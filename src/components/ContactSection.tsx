import React, { useState } from 'react';
import { ArrowRight, Send, CheckCircle2, MapPin, Mail, Phone, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    scaleGoal: prefilledService || 'Full 360° Brand Scale',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scaleGoals = [
    'Full 360° Brand Scale',
    'Commercial Film & Showreel',
    'ATL & Highway OOH Blitz',
    'Digital Performance & Social',
    'BTL & Experiential Launch',
    'Brand Identity & Narrative'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#070707] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff3b00]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Huge Typographic Anchor */}
        <div className="mb-16 border-b border-neutral-800 pb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#ff3b00] rounded-sm animate-ping"></span>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              // The Next Step
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-[0.88]">
            READY TO <br />
            <span className="text-[#ff3b00] drop-shadow-[0_0_80px_rgba(255,59,0,0.5)]">
              SCALE?
            </span>
          </h2>

          <div className="mt-8 max-w-xl">
            <p className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
              Tell us where you are. <br className="hidden sm:inline" />
              We’ll figure out where you can go.
            </p>
            <p className="text-sm text-neutral-400 font-sans mt-2">
              Whether you have a 30-second commercial brief, a multi-city launch, or an ambitious vision looking for a partner.
            </p>
          </div>
        </div>

        {/* Form and Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#111111] border border-neutral-800 p-8 sm:p-12 rounded-3xl shadow-2xl relative">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#ff3b00]/20 border border-[#ff3b00] flex items-center justify-center text-[#ff3b00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-black text-white uppercase">
                  Conversation Initiated.
                </h3>
                <p className="text-sm text-neutral-300 max-w-md font-sans leading-relaxed">
                  Thank you, <strong>{formData.name || 'Friend'}</strong>. Our strategy and production directors in Kolkata will review your note and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        scaleGoal: 'Full 360° Brand Scale',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono-tech uppercase tracking-wider text-[#ff3b00] hover:underline"
                  >
                    ← Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Souman Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                      Company / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bengal Heritage Co."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="souman@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98300 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                    What are you looking to scale?
                  </label>
                  <select
                    value={formData.scaleGoal}
                    onChange={(e) => setFormData({ ...formData, scaleGoal: e.target.value })}
                    className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                  >
                    {scaleGoals.map((goal) => (
                      <option key={goal} value={goal} className="bg-neutral-900 text-white">
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                    Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand challenge, current stage, and where you envision scaling..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-4 px-6 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#ff3b00]/30 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING...</span>
                  ) : (
                    <>
                      <span>START A CONVERSATION →</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 space-y-6">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block">
                // Studio Coordinates
              </span>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-[#ff3b00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Scale Up Creative & Production House
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-sans leading-relaxed">
                    Park Street Creative Enclave, Near Flurys & Chowringhee, <br />
                    Kolkata 700016, West Bengal, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-[#ff3b00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Direct Client Enquiries
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-mono-tech">
                    hello@scaleupagency.in // scale@kolkata.agency
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-[#ff3b00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Studio Desk & WhatsApp
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-mono-tech">
                    +91 (033) 2229-8470 // +91 98300 24890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-[#ff3b00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Studio Working Hours
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-mono-tech">
                    Monday — Saturday: 10:00 — 19:30 IST
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Assurance */}
            <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800 flex items-center gap-4 text-xs font-mono-tech text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] shrink-0"></span>
              <span>
                Confidentiality Guaranteed: NDA-ready briefs reviewed exclusively by agency partners.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
