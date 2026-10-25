import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ActiveDetailModal } from '../components/modals/ActiveDetailModal';
import { CardDetail } from '../types/portfolio';

const mockDetail: CardDetail = {
  id: 'test-card',
  title: 'Test Engineering Project',
  category: 'Systems Architecture',
  badge: 'Test Suite',
  subtitle: 'High performance testing',
  dateOrRank: '2026',
  description: 'Comprehensive full dossier describing the architecture, technologies, and implementation.',
  highlights: [
    'Clean component encapsulation',
    'WCAG AA accessible modal dialog',
  ],
  metrics: [
    { label: 'Coverage', value: '100%' },
    { label: 'Uptime', value: '99.99%' },
  ],
  tags: ['TypeScript', 'React', 'Vitest'],
};

describe('ActiveDetailModal Accessibility & Interaction', () => {
  it('renders dialog with correct ARIA roles and headings', () => {
    const onClose = vi.fn();
    render(<ActiveDetailModal detail={mockDetail} onClose={onClose} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText('Test Engineering Project')).toBeInTheDocument();
    expect(screen.getByText('Systems Architecture')).toBeInTheDocument();
  });

  it('triggers onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<ActiveDetailModal detail={mockDetail} onClose={onClose} />);

    const closeBtn = screen.getByRole('button', { name: /Close detail modal/i });
    fireEvent.click(closeBtn);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('triggers onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(<ActiveDetailModal detail={mockDetail} onClose={onClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('returns null when detail is null', () => {
    const onClose = vi.fn();
    const { container } = render(<ActiveDetailModal detail={null} onClose={onClose} />);

    expect(container.firstChild).toBeNull();
  });
});
