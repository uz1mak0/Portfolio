'use client';

import React from 'react';
import { X, FileText, Download, Printer, Mail, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tight text-slate-100 text-sm">CURRICULUM VITAE // SNAPSHOT</h3>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">FULL STACK DEVELOPER / AI ENGINEER</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-minimal gap-1.5 py-1.5 px-2.5 text-slate-300 cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm bg-black/40">
          
          {/* Header section */}
          <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-100">FULL STACK DEVELOPER & AI ENGINEER</h2>
              <p className="text-xs text-cyan-400 font-mono mt-0.5 uppercase tracking-wider">TypeScript • Next.js • Serverless AWS • Gemini • n8n</p>
            </div>
            <div className="text-right text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              <div>EMAIL: {PORTFOLIO_DATA.profile.email}</div>
              <div className="text-emerald-400 font-bold">STATUS: AVAILABLE</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Executive Summary</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Results-driven Full Stack Developer and AI Engineer with deep expertise in architecting resilient Next.js applications, 
              scalable Amazon Web Services (AWS) serverless backends, GraphQL APIs, and automated multi-agent AI pipelines. 
              Proven track record in building high-scale automated workflows serving millions of travelers, enterprise-grade fleet dispatch systems, 
              and AI-driven transport logistics management suites.
            </p>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Technical Competencies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05]">
                <strong className="text-slate-200 block text-[10px] uppercase tracking-wider font-bold mb-1">Languages & Frameworks:</strong>
                <span className="text-slate-400">JavaScript (ESNext), TypeScript, Next.js (App Router), React, Node.js</span>
              </div>
              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05]">
                <strong className="text-slate-200 block text-[10px] uppercase tracking-wider font-bold mb-1">Cloud & Infrastructure:</strong>
                <span className="text-slate-400">Amazon Web Services (AWS), Serverless Framework, GraphQL, REST, DynamoDB</span>
              </div>
              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05]">
                <strong className="text-slate-200 block text-[10px] uppercase tracking-wider font-bold mb-1">AI Tooling & Automation:</strong>
                <span className="text-slate-400">Google Gemini AI, Google AI Studio, Claude Code, n8n Workflow Automation</span>
              </div>
              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.05]">
                <strong className="text-slate-200 block text-[10px] uppercase tracking-wider font-bold mb-1">Architecture & Systems:</strong>
                <span className="text-slate-400">Event-driven queues, microservices, end-to-end type safety, biometric fleet loggers</span>
              </div>
            </div>
          </div>

          {/* Key Project Achievements */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Key Engineering Projects</h4>
            
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="p-3.5 rounded-xl bg-black/50 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black uppercase tracking-tight text-slate-200 text-sm">{p.title}</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">{p.skills.join(', ')}</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{p.description}</p>
                <div className="text-[10px] uppercase font-mono text-slate-400 pt-1">
                  Architecture: <span className="text-slate-300">{p.architectureOverview}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-black/80 backdrop-blur-md flex items-center justify-between">
          <div className="text-[10px] uppercase font-mono text-slate-400">
            Contact: <span className="text-slate-200">{PORTFOLIO_DATA.profile.email}</span>
          </div>
          <button
            onClick={onClose}
            className="btn-minimal text-xs cursor-pointer"
          >
            Close Snapshot
          </button>
        </div>

      </div>
    </div>
  );
}
