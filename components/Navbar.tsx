'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, Mail, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCopilot: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCopilot, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07090e]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black tracking-wider uppercase text-slate-100 group-hover:text-cyan-300 transition-colors">
              Ryan Lorenton Barcebal
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 bg-white/[0.03] backdrop-blur-md px-5 py-2 rounded-full border border-white/[0.08]">
          <button
            id="nav-link-projects"
            onClick={() => scrollToSection('projects-section')}
            className="text-[10px] uppercase tracking-widest font-bold text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            id="nav-link-skills"
            onClick={() => scrollToSection('skills-section')}
            className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            id="nav-link-architecture"
            onClick={() => scrollToSection('architecture-section')}
            className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Architecture
          </button>
          <button
            id="nav-link-contact"
            onClick={() => scrollToSection('contact-section')}
            className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Availability Status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/25 text-[10px] uppercase tracking-widest font-bold text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>

          {/* AI Copilot Trigger */}
          <button
            id="nav-ai-copilot-btn"
            onClick={onOpenCopilot}
            className="btn-minimal gap-1.5 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Copilot</span>
          </button>

          {/* Resume Modal */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="btn-minimal text-slate-300 hover:text-white gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Contact Direct */}
          <button
            id="nav-direct-contact-btn"
            onClick={() => scrollToSection('contact-section')}
            className="btn-minimal-primary gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-ai-trigger"
            onClick={onOpenCopilot}
            className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-2 mx-4 p-4 rounded-xl border border-white/10 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time & Contract</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection('projects-section')}
              className="text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-md"
            >
              Featured Projects
            </button>
            <button
              onClick={() => scrollToSection('skills-section')}
              className="text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-md"
            >
              Tools & Programming Languages
            </button>
            <button
              onClick={() => scrollToSection('architecture-section')}
              className="text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-md"
            >
              Architecture & Pipelines
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-md"
            >
              Contact & Inquiry
            </button>
          </div>
          <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCopilot();
              }}
              className="w-full btn-minimal justify-center text-xs text-sky-300 gap-2 border-sky-500/30"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch AI Portfolio Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full btn-minimal justify-center text-xs gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume Snapshot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
