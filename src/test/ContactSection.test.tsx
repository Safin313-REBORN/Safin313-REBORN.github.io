import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';

describe('ContactSection User Journey & Boundary Validation', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.open = vi.fn();
  });

  it('renders contact inputs with accessible labels and required indicators', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Your Name \/ Organization/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email Address/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Detailed Message \/ Project Scope/i)).toBeInTheDocument();
  });

  it('prevents submission and displays inline validation errors for empty fields', async () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole('button', { name: /Send Verified Inquiry/i });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please provide your name or organization/i)).toBeInTheDocument();
      expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Please provide a short description or inquiry/i)).toBeInTheDocument();
    });
  });

  it('validates minimum message length of 15 characters', async () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/Your Name \/ Organization/i);
    const emailInput = screen.getByRole('textbox', { name: /Email Address/i });
    const messageInput = screen.getByLabelText(/Detailed Message \/ Project Scope/i);
    const submitBtn = screen.getByRole('button', { name: /Send Verified Inquiry/i });

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Too short' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Message must be at least 15 characters/i)).toBeInTheDocument();
    });
  });

  it('validates invalid email format', async () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/Your Name \/ Organization/i);
    const emailInput = screen.getByRole('textbox', { name: /Email Address/i });
    const messageInput = screen.getByLabelText(/Detailed Message \/ Project Scope/i);
    const submitBtn = screen.getByRole('button', { name: /Send Verified Inquiry/i });

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.change(messageInput, { target: { value: 'Valid inquiry message that meets the minimum length.' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please provide a valid email format/i)).toBeInTheDocument();
    });
  });

  it('submits valid form silently in the background and renders success confirmation', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    global.fetch = fetchMock;

    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/Your Name \/ Organization/i);
    const emailInput = screen.getByRole('textbox', { name: /Email Address/i });
    const messageInput = screen.getByLabelText(/Detailed Message \/ Project Scope/i);
    const submitBtn = screen.getByRole('button', { name: /Send Verified Inquiry/i });

    fireEvent.change(nameInput, { target: { value: 'Jane Architect' } });
    fireEvent.change(emailInput, { target: { value: 'jane@enterprise.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'We would love to discuss a Full-Stack MERN contract for our system.' },
    });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(screen.getByText(/Message Sent Successfully/i)).toBeInTheDocument();
    });

    const [calledUrl, calledOptions] = fetchMock.mock.calls[0];
    expect(calledUrl).toContain('formsubmit.co/ajax/safinhassan164@gmail.com');
    const parsedBody = JSON.parse(calledOptions.body);
    expect(parsedBody.name).toBe('Jane Architect');
    expect(parsedBody.email).toBe('jane@enterprise.com');
    expect(parsedBody.message).toContain('Full-Stack MERN contract');
  });
});
