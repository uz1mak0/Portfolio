'use client';

import React, { useState } from 'react';
import { 
  Workflow, 
  Cpu, 
  Layers, 
  Server, 
  Cloud, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Database,
  Terminal,
  Smartphone,
  Mail,
  Network
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

export default function ArchitectureWorkflow() {
  const [activePipeline, setActivePipeline] = useState<'toda' | 'travel'>('toda');

  const pipelines = {
    toda: {
      title: "TODA Transport Dispatch & Remittance Engine",
      steps: [
        { name: "Terminal UI", tech: "Next.js Real-time Dashboard", role: "Driver time-in/out logging & instant boundary fee collection" },
        { name: "Data Processing", tech: "Node.js & Serverless AWS", role: "Reconciles daily driver boundary dues & fleet revenue analytics" },
        { name: "Predictive Analytics", tech: "Google AI Studio Models", role: "Forecasts rush-hour passenger load and dynamic route assignment" },
        { name: "Audit Reporting", tech: "Automated Ledger Export", role: "Generates cryptographic end-of-day financial balance sheets" }
      ]
    },
    travel: {
      title: "Automated Travel Itinerary & Multi-Channel Dispatch",
      steps: [
        { name: "Client UI Layer", tech: "Next.js 15 & React", role: "Captures user budget, location safety thresholds & preferences" },
        { name: "Webhook Ingestion", tech: "AWS API Gateway / Serverless", role: "Authenticates request payload with cryptographic HMAC signature" },
        { name: "Automation Core", tech: "n8n Workflow Engine", role: "Orchestrates API calls, weather matrices, and hotel availability nodes" },
        { name: "Cognitive AI Model", tech: "Google Gemini 3.7", role: "Synthesizes personalized daily itineraries with cost breakdowns" },
        { name: "Multi-Channel Gateway", tech: "Twilio SMS & AWS SES", role: "Dispatches SMS alerts and formatted PDF/HTML email itineraries" }
      ]
    }
  };

  return (
    <section id="architecture-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400 mb-2">
              SYSTEM TOPOLOGY // END-TO-END WORKFLOWS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-slate-100">
              SYSTEM ARCHITECTURE
            </h2>
          </div>
          
          {/* Pipeline Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setActivePipeline('toda')}
              className={`px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-colors cursor-pointer ${
                activePipeline === 'toda'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TODA Logistics Engine
            </button>
            <button
              onClick={() => setActivePipeline('travel')}
              className={`px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-colors cursor-pointer ${
                activePipeline === 'travel'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              n8n + Gemini Travel Pipeline
            </button>
          </div>
        </div>

        {/* Visual Pipeline Nodes */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase text-slate-100">{pipelines[activePipeline].title}</h3>
              <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 mt-1">End-to-End Data Lifecycle & Execution Pipeline</p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              Low Latency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {pipelines[activePipeline].steps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-black/50 border border-white/[0.06] hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-3 relative group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-xs font-black font-mono text-cyan-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-slate-300 px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.05]">{step.tech}</span>
                  </div>
                  <h4 className="font-bold text-slate-200 text-xs mt-2.5 uppercase tracking-wide">{step.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 font-light leading-relaxed">{step.role}</p>
                </div>

                <div className="pt-2 border-t border-white/[0.04] text-[9px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Node</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Architecture Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.architectureHighlights.map((pillar, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl border border-white/[0.06] space-y-2 hover:border-cyan-500/30 transition-all">
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                <span>{pillar.name}</span>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
