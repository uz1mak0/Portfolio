'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowDown,
  Terminal,
  Cpu,
  Workflow,
  Cloud,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Bot
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

interface HeroProps {
  onOpenCopilot: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export default function Hero({ onOpenCopilot, onOpenResume, onSelectProject }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const coreTools = [
    { name: "TypeScript", icon: "TS", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    { name: "Next.js", icon: "NEXT", color: "text-slate-200 bg-slate-800/40 border-slate-700/50" },
    { name: "AWS", icon: "AWS", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { name: "Serverless", icon: "SLS", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
    { name: "GraphQL", icon: "GQL", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
    { name: "Node.js", icon: "NODE", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { name: "Gemini AI", icon: "AI", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
    { name: "Google AI Studio", icon: "GAS", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    { name: "Claude Code", icon: "CC", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  ];

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Translucent Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-sky-600/15 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow-slow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-teal-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center space-y-8">

        {/* Role & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-inner">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400">
            ENGINEERING PORTFOLIO
          </span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-300">
            NEXT.JS • AWS • GEMINI • GRAPHQL
          </span>
        </div>

        {/* Main Headline - Iconic Bold Typography */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-8xl lg:text-[100px] leading-[0.88] font-black tracking-tighter uppercase text-slate-100 mb-2">
            FULL STACK<br />
            <span className="text-cyan-400">AI ENGINEER</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            Specializing in high-performance Next.js applications, serverless AWS backends, and multi-agent AI architectures that scale.
          </p>
        </div>

        {/* Interactive Minimalist Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            id="hero-explore-projects-btn"
            onClick={() => {
              const el = document.getElementById('projects-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-minimal-primary gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Explore Production Projects</span>
          </button>

          <button
            id="hero-ai-copilot-btn"
            onClick={onOpenCopilot}
            className="btn-minimal gap-2 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Portfolio Copilot</span>
          </button>

          <button
            id="hero-copy-email-btn"
            onClick={copyEmail}
            className="btn-minimal gap-2 text-slate-300 hover:text-white cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Core Tech Stack Matrix Ticker - Bold Chips */}
        <div className="pt-6">
          <div className="text-[10px] uppercase tracking-[0.35em] font-bold text-slate-400 mb-3">
            Core Technologies & AI Tooling
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {coreTools.map((tool) => (
              <span
                key={tool.name}
                className="px-3.5 py-1.5 bg-white/[0.04] border border-white/10 text-[10px] uppercase font-bold tracking-widest text-slate-200 backdrop-blur-md hover:border-cyan-400/50 hover:text-cyan-300 transition-all cursor-default"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        {/* Live Architecture Metric Bar (Translucent Glass Panel) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left">
          {/* {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all group"
            >
              <div className="text-[10px] uppercase tracking-widest font-mono text-slate-400 flex items-center justify-between">
                <span>{stat.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-100 mt-1">
                {stat.value}
              </div>
            </div>
          ))} */}
        </div>

        {/* Scroll indicator */}
        <div className="pt-8">
          <button
            id="hero-scroll-indicator"
            onClick={() => {
              const el = document.getElementById('projects-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-300 transition-colors cursor-pointer group"
          >
            <span>Scroll to Projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
