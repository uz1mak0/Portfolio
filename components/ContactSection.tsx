'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Full Stack & AI Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 }
      });
    } catch (err) {}
  };

  const templates = [
    { label: "Technical Interview", text: "Hi! We would love to discuss a Full Stack / AI Engineer role on our engineering team." },
    { label: "Cloud & AI Architecture", text: "Hello! We are looking to design a resilient n8n / Gemini workflow and Serverless AWS system." },
    { label: "Consulting / Contract", text: "Hi! We'd like to explore contract availability for our upcoming Next.js & GraphQL platform." }
  ];

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/[0.01]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400">
            CONNECT // DIRECT TRANSMISSION
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-slate-100">
            LET&apos;S BUILD SOMETHING <span className="text-cyan-400">INTELLIGENT</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Open for full-time engineering roles, AI system consulting, and high-impact contract architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Credentials & Status */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Direct Inbox</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-base sm:text-xl font-black text-slate-100 font-mono">
                    {PORTFOLIO_DATA.profile.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  className="flex-1 btn-minimal gap-2 justify-center py-2.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  id="contact-direct-mailto-link"
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="btn-minimal-primary gap-1.5 py-2.5 px-4 cursor-pointer"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-[11px] font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> RESPONSE TIME:
                  </span>
                  <span className="text-slate-200 font-bold uppercase">Within 4-8 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" /> AVAILABILITY:
                  </span>
                  <span className="text-emerald-300 font-bold uppercase">Remote / Worldwide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> SECURITY:
                  </span>
                  <span className="text-slate-200 font-bold uppercase">NDAs Welcome</span>
                </div>
              </div>
            </div>

            {/* Quick Templates */}
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-3">
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Quick Inquiries:</div>
              <div className="space-y-2">
                {templates.map((tpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSubject(tpl.label);
                      setMessage(tpl.text);
                    }}
                    className="w-full text-left p-3 rounded-lg bg-black/40 border border-white/[0.05] hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all font-light cursor-pointer"
                  >
                    <span className="font-bold text-cyan-400 block text-[10px] uppercase tracking-wider mb-0.5">{tpl.label}</span>
                    {tpl.text}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-slate-100">Transmission Dispatched</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. A confirmation has been drafted to <strong>{email}</strong>. 
                    You can also email directly at <strong>{PORTFOLIO_DATA.profile.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-minimal mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Mercer"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1.5">Inquiry Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Full Stack / AI Engineer Opportunity"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1.5">Project Scope / Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your tech requirements, timeline, or interview schedule..."
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500">
                      Dispatched to {PORTFOLIO_DATA.profile.email}
                    </span>
                    <button
                      type="submit"
                      className="btn-minimal-primary gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Transmission</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
