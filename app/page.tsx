'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsMatrix from '@/components/SkillsMatrix';
import ArchitectureWorkflow from '@/components/ArchitectureWorkflow';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import AiCopilotDrawer from '@/components/AiCopilotDrawer';
import ResumeModal from '@/components/ResumeModal';
import { Project, PORTFOLIO_DATA } from '@/lib/portfolioData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Floating Glass Navigation */}
      <Navbar
        onOpenCopilot={() => setCopilotOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCopilot={() => setCopilotOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onSelectProject={handleSelectProjectById}
        />

        {/* Featured Production Projects Showcase with Live Application Links */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Technical Stack & Capabilities (Languages, Cloud, AI Tools) */}
        <SkillsMatrix />

        {/* System Architecture & Workflows (n8n, AWS Serverless, Gemini) */}
        <ArchitectureWorkflow />

        {/* Contact & Direct Dispatch Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCopilot={() => setCopilotOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Modals and Drawers */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AiCopilotDrawer
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
