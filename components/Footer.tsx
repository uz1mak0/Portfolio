'use client';

import React from 'react';
import { Terminal, Sparkles, Heart, ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

interface FooterProps {
  onOpenCopilot: () => void;
  onOpenResume: () => void;
}

export default function Footer({ onOpenCopilot, onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Translucent background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left info */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-black uppercase tracking-tight text-slate-100 text-sm">Ryan Lorenton Barcebal</span>
            <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              AVAILABLE
            </span>
          </div>
          <p className="text-xs text-slate-400 font-light">
            Full Stack Developer / AI Engineer • JavaScript • TypeScript • Next.js • AWS • GraphQL • Gemini
          </p>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
          <button
            onClick={onOpenCopilot}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>AI Copilot</span>
          </button>
          <span>•</span>
          <button
            onClick={onOpenResume}
            className="hover:text-slate-200 transition-colors cursor-pointer"
          >
            Curriculum Vitae
          </button>
          <span>•</span>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="hover:text-slate-200 transition-colors cursor-pointer"
          >
            {PORTFOLIO_DATA.profile.email}
          </a>
        </div>

        {/* Right action */}
        <div className="flex items-center gap-3">
          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="btn-minimal gap-1.5 text-slate-400 hover:text-white cursor-pointer"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-[10px] uppercase tracking-widest font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} FULL STACK DEVELOPER / AI ENGINEER. ALL RIGHTS RESERVED.</span>
        <span>ENGINEERED WITH NEXT.JS, AWS, & GEMINI AI</span>
      </div>
    </footer>
  );
}
