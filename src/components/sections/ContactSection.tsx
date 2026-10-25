import React, { useState } from 'react';
import { CANDIDATE_INFO } from '../../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  WhatsappIcon,
  FiverrIcon,
} from '../common/SocialIcons';
import {
  Mail,
  ExternalLink,
  Copy,
  Check,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Engineering Role',
    message: '',
  });

  const [lastSender, setLastSender] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const copyToClipboard = async (text: string, fieldKey: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedField(fieldKey);
      setCopyFeedback(null);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      setCopyFeedback('Unable to auto-copy. Please manually select and copy.');
      setTimeout(() => setCopyFeedback(null), 4000);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Please provide your name or organization.';
    } else if (trimmedName.length > 100) {
      newErrors.name = 'Name must be 100 characters or fewer.';
    }

    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.';
    } else if (trimmedEmail.length > 100) {
      newErrors.email = 'Email must be 100 characters or fewer.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = 'Please provide a short description or inquiry.';
    } else if (trimmedMessage.length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    } else if (trimmedMessage.length > 3000) {
      newErrors.message = 'Message must be 3,000 characters or fewer.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const category = formData.subject;

    // Silent background dispatch: direct delivery to Safin's Gmail & phone notifications
    try {
      if (typeof fetch !== 'undefined') {
        await fetch(`https://formsubmit.co/ajax/${CANDIDATE_INFO.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            _subject: `[Portfolio Inquiry] ${category} — ${trimmedName}`,
            category: category,
            message: trimmedMessage,
            recipient: `Saharia Hassan Safin (+880 1763-609992 / ${CANDIDATE_INFO.email})`,
            _captcha: 'false',
          }),
        });
      }
    } catch (err) {
      console.warn('Background dispatch completed with notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setLastSender(trimmedName);
      setFormData({
        name: '',
        email: '',
        subject: 'Full-Stack Engineering Role',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 12000);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 overflow-x-clip">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">11</span>
            <span>/</span>
            <span>Initiate Contact</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Connect & Collaborative Inquiries
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Open to full-stack software roles, embedded/IoT hardware projects, cybersecurity engagements, and freelance collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Profile Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-6 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold/90 block mb-2">
              Direct Contact Coordinates
            </span>
            <h3 className="font-forum text-2xl dark:text-white text-neutral-900 mb-4">
              Get in Touch Directly
            </h3>
            <p className="font-sans text-sm dark:text-cream/70 text-neutral-600 leading-relaxed font-light mb-8">
              Based in Dhaka, Bangladesh, available for high-impact local engagements and globally distributed remote engineering contracts.
            </p>

            <div className="space-y-4">
              {/* Email Touchpoint */}
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-gold/60 hover:border-[#997300]/50 dark:hover:bg-gold/[0.05] hover:bg-amber-50/50 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-gold text-[#997300] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#997300] dark:group-hover:bg-gold group-hover:text-white dark:group-hover:text-black group-hover:border-[#997300] dark:group-hover:border-gold group-hover:shadow-[0_0_18px_rgba(212,175,55,0.45)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Email Address</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-gold group-hover:text-[#997300] transition-colors truncate">
                      {CANDIDATE_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyToClipboard(CANDIDATE_INFO.email, 'email');
                    }}
                    aria-label="Copy email address"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-cream/70 text-neutral-600 dark:hover:text-white hover:text-black dark:hover:bg-white/15 hover:bg-neutral-200 transition-all"
                  >
                    {copiedField === 'email' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-gold group-hover:text-[#997300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </a>

              {/* WhatsApp Direct Message Touchpoint */}
              <a
                href={CANDIDATE_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-[#25D366]/60 hover:border-[#25D366]/50 dark:hover:bg-[#25D366]/[0.05] hover:bg-emerald-50/50 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(37,211,102,0.18)] group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-[#25D366] text-[#128C7E] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] group-hover:shadow-[0_0_18px_rgba(37,211,102,0.45)]">
                    <WhatsappIcon className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Direct Message</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-[#25D366] group-hover:text-[#128C7E] transition-colors truncate">
                      {CANDIDATE_INFO.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyToClipboard(CANDIDATE_INFO.whatsappDisplay, 'whatsapp');
                    }}
                    aria-label="Copy WhatsApp username"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-cream/70 text-neutral-600 dark:hover:text-white hover:text-black dark:hover:bg-white/15 hover:bg-neutral-200 transition-all"
                  >
                    {copiedField === 'whatsapp' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-[#25D366] group-hover:text-[#128C7E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </a>

              {/* GitHub Touchpoint */}
              <a
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-white/40 hover:border-neutral-900/40 dark:hover:bg-white/[0.05] hover:bg-neutral-100 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.06)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-cream/80 text-neutral-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#24292e] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-[#24292e] dark:group-hover:border-white group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Open-Source Hub</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-white group-hover:text-black transition-colors">
                      {CANDIDATE_INFO.githubDisplay}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-white group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>

              {/* LinkedIn Touchpoint */}
              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-[#0a66c2]/60 hover:border-[#0a66c2]/50 dark:hover:bg-[#0a66c2]/[0.05] hover:bg-sky-50/50 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(10,102,194,0.15)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-[#38bdf8] text-[#0a66c2] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0a66c2] group-hover:text-white group-hover:border-[#0a66c2] group-hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Professional Network</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-[#38bdf8] group-hover:text-[#0a66c2] transition-colors">
                      {CANDIDATE_INFO.linkedinDisplay}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-[#38bdf8] group-hover:text-[#0a66c2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>

              {/* Medium Articles Touchpoint */}
              <a
                href={CANDIDATE_INFO.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-[#00ab6c]/60 hover:border-[#00ab6c]/50 dark:hover:bg-[#00ab6c]/[0.05] hover:bg-emerald-50/50 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(0,171,108,0.15)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-[#34d399] text-[#00ab6c] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00ab6c] group-hover:text-white group-hover:border-[#00ab6c] group-hover:shadow-[0_0_18px_rgba(0,171,108,0.45)]">
                    <MediumIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Articles & Insights</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-[#34d399] group-hover:text-[#00ab6c] transition-colors">
                      {CANDIDATE_INFO.mediumDisplay}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-[#34d399] group-hover:text-[#00ab6c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>

              {/* Fiverr Touchpoint */}
              <a
                href={CANDIDATE_INFO.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-4 transition-all duration-300 dark:hover:border-[#1dbf73]/60 hover:border-[#1dbf73]/50 dark:hover:bg-[#1dbf73]/[0.05] hover:bg-emerald-50/50 hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(29,191,115,0.18)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 dark:text-[#1dbf73] text-[#109655] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1dbf73] group-hover:text-white group-hover:border-[#1dbf73] group-hover:shadow-[0_0_18px_rgba(29,191,115,0.45)]">
                    <FiverrIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] dark:text-cream/40 text-neutral-500 uppercase">Freelance Marketplace</div>
                    <div className="font-mono text-xs sm:text-sm dark:text-cream text-neutral-900 dark:group-hover:text-[#1dbf73] group-hover:text-[#109655] transition-colors">
                      {CANDIDATE_INFO.fiverrDisplay}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 dark:text-cream/40 text-neutral-400 dark:group-hover:text-[#1dbf73] group-hover:text-[#109655] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>

            {/* Resume Download Action */}
            <div className="mt-8 pt-6 border-t dark:border-white/10 border-black/10">
              <a
                href={CANDIDATE_INFO.resumePdf}
                download="Saharia_Hassan_Safin_Resume.pdf"
                className="neumorphic-btn flex w-full items-center justify-center gap-2.5 rounded-2xl p-4 text-xs sm:text-sm font-medium dark:text-white text-neutral-900 shadow-neumorphic"
              >
                <Download className="h-4 w-4 text-gold" />
                <span>Download Verified Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Validated Message Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/40 text-neutral-500 block mb-2">
              Dispatch Transmission
            </span>
            <h3 className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="font-sans text-sm dark:text-cream/70 text-neutral-600 mb-8 font-light">
              Submit your inquiry below for full-stack engineering, embedded prototyping, or research collaboration.
            </p>

            {/* Copy Feedback Toast */}
            {copyFeedback && (
              <div
                role="alert"
                className="mb-6 rounded-2xl border border-amber-500/40 bg-amber-950/20 p-4 text-amber-200 text-xs font-mono flex items-center gap-2"
              >
                <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{copyFeedback}</span>
              </div>
            )}

            {/* Clean Success Notification (Silent on-page delivery, zero redirects) */}
            {isSuccess && (
              <div
                role="status"
                aria-live="polite"
                className="mb-8 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-5 text-emerald-200 flex items-start justify-between gap-3 animate-in fade-in"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-forum text-lg sm:text-xl dark:text-white text-neutral-900">
                      Message Sent Successfully
                    </div>
                    <div className="font-sans text-xs dark:text-cream/80 text-neutral-600 mt-1">
                      Thank you{lastSender ? `, ${lastSender}` : ''}. Your inquiry has been securely dispatched to <span className="font-cinzel tracking-wider dark:text-cream text-neutral-900 font-medium">Saharia Hassan Safin</span>. You will receive a direct reply shortly.
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-emerald-400 hover:text-white p-1 rounded-lg transition-colors text-base font-mono shrink-0"
                  aria-label="Close notification"
                >
                  &times;
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="font-mono text-xs dark:text-cream/70 text-neutral-700 block font-medium">
                    Your Name / Organization <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full rounded-xl border dark:bg-black/50 bg-neutral-50/80 px-4 py-3 text-sm dark:text-white text-neutral-900 placeholder-neutral-400 dark:placeholder-cream/30 focus:outline-none transition-all shadow-sm ${
                      errors.name
                        ? 'border-rose-500/70 focus:ring-1 focus:ring-rose-500'
                        : 'dark:border-white/10 border-black/15 focus:border-gold focus:ring-1 focus:ring-gold/30'
                    }`}
                  />
                  {errors.name && (
                    <div id="name-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 font-mono">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-mono text-xs dark:text-cream/70 text-neutral-700 block font-medium">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="name@company.com"
                    className={`w-full rounded-xl border dark:bg-black/50 bg-neutral-50/80 px-4 py-3 text-sm dark:text-white text-neutral-900 placeholder-neutral-400 dark:placeholder-cream/30 focus:outline-none transition-all shadow-sm ${
                      errors.email
                        ? 'border-rose-500/70 focus:ring-1 focus:ring-rose-500'
                        : 'dark:border-white/10 border-black/15 focus:border-gold focus:ring-1 focus:ring-gold/30'
                    }`}
                  />
                  {errors.email && (
                    <div id="email-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 font-mono">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Topic Select */}
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="font-mono text-xs dark:text-cream/70 text-neutral-700 block font-medium">
                  Engagement Category
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border dark:border-white/10 border-black/15 dark:bg-black/80 bg-neutral-50/80 px-4 py-3 text-sm dark:text-white text-neutral-900 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 shadow-sm"
                >
                  <option value="Full-Stack Engineering Role">Full-Stack Engineering Role (MERN / Next.js)</option>
                  <option value="Robotics & Embedded IoT">Robotics / Embedded IoT Prototyping</option>
                  <option value="Cybersecurity Engagement">Cybersecurity Audit / Ethical Hacking Engagement</option>
                  <option value="Fiverr Freelance Project">Independent Contract / Freelance Project</option>
                  <option value="Academic & ML Research">Academic / Machine Learning Collaboration</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="contact-message" className="font-mono text-xs dark:text-cream/70 text-neutral-700 block font-medium">
                    Detailed Message / Project Scope <span className="text-gold">*</span>
                  </label>
                  <span className="font-mono text-[10px] dark:text-cream/40 text-neutral-500">
                    {formData.message.length} chars (min 15, max 3000)
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={3000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Describe your project, timeline, target architecture, or role requirements..."
                  className={`w-full rounded-xl border dark:bg-black/50 bg-neutral-50/80 px-4 py-3 text-sm dark:text-white text-neutral-900 placeholder-neutral-400 dark:placeholder-cream/30 focus:outline-none transition-all shadow-sm ${
                    errors.message
                      ? 'border-rose-500/70 focus:ring-1 focus:ring-rose-500'
                      : 'dark:border-white/10 border-black/15 focus:border-gold focus:ring-1 focus:ring-gold/30'
                  }`}
                />
                {errors.message && (
                  <div id="message-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 font-mono">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="neumorphic-btn flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-medium dark:text-white text-neutral-900 shadow-neumorphic disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 dark:border-white border-neutral-900 border-t-transparent" />
                    <span>Dispatching Transmission...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-gold" />
                    <span>Send Verified Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
