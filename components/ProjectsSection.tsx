'use client';

import React from 'react';
import { 
  Workflow, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Play, 
  ExternalLink,
  ChevronRight,
  Github
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400 mb-2">
              FEATURED WORK // 2026
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-slate-100">
              PRODUCTION PROJECTS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
            Interactive enterprise-grade applications, multi-agent AI pipelines, and privacy-first platforms engineered with modern TypeScript and Next.js.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Card Ambient Glow Accent */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="space-y-5">
                
                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
                    0{idx + 1} / {project.category.toUpperCase().split(' ')[0]}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 opacity-60">2026</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 mt-1">
                    {project.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/80 line-clamp-4 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06]">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[9px] uppercase tracking-wider font-mono text-slate-400 truncate">{m.label}</div>
                      <div className="text-xs font-bold font-mono text-slate-100 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.08] text-[9px] uppercase font-bold tracking-widest text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  id={`project-live-btn-${project.id}`}
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-minimal-primary gap-2 justify-center py-3 text-[11px] uppercase font-bold tracking-wider cursor-pointer no-underline shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  id={`project-details-btn-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="btn-minimal p-3 text-slate-300 hover:text-white cursor-pointer"
                  title="View Specs & Architecture"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
