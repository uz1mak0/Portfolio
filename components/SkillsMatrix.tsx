'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Zap, 
  Network, 
  Cpu, 
  Bot, 
  Sparkles, 
  Terminal, 
  Workflow, 
  CheckCircle2,
  Server,
  FileCode,
  Globe,
  ArrowLeftRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'Globe': return <Globe className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Network': return <Network className="w-4 h-4" />;
      case 'ArrowLeftRight': return <ArrowLeftRight className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Bot': return <Bot className="w-4 h-4" />;
      case 'Terminal': return <Terminal className="w-4 h-4" />;
      case 'Workflow': return <Workflow className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills-section" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400 mb-2">
              TECHNICAL PROFICIENCY // CORE ARSENAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-slate-100">
              STACK & CAPABILITIES
            </h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Tech
            </button>
            {PORTFOLIO_DATA.skillsGrouped.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsGrouped
            .filter((_, idx) => selectedCategory === 'all' || selectedCategory === idx)
            .map((cat, catIdx) => (
              <div
                key={catIdx}
                className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="border-b border-white/[0.06] pb-3">
                    <h3 className="text-xl font-black tracking-tight uppercase text-slate-100">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">{cat.description}</p>
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-black/40 border border-white/[0.05] hover:border-cyan-500/30 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-white/[0.04] text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                              {getIcon(skill.icon)}
                            </div>
                            <span className="font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wide">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1.5 pl-8 font-light leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section summary footer */}
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <span>SYSTEM MATCH: 100%</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
