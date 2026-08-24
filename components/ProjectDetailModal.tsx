'use client';

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Workflow, 
  ShieldCheck, 
  Send, 
  Mail, 
  Smartphone, 
  Clock, 
  DollarSign, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Play, 
  RefreshCw, 
  ArrowRight,
  EyeOff,
  UserCheck,
  Lock,
  Compass,
  FileCheck,
  AlertCircle,
  Github,
  ExternalLink
} from 'lucide-react';
import { Project } from '@/lib/portfolioData';
import confetti from 'canvas-confetti';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'spec'>('demo');

  // Simulator States for Project 1 (Travel Generator)
  const [travelDestination, setTravelDestination] = useState('Tokyo, Japan');
  const [travelBudget, setTravelBudget] = useState('Comfort ($1,500)');
  const [travelVibe, setTravelVibe] = useState('Culture & Culinary');
  const [travelEmail, setTravelEmail] = useState('traveler@example.com');
  const [travelRunning, setTravelRunning] = useState(false);
  const [travelStep, setTravelStep] = useState<number>(0);
  const [travelResult, setTravelResult] = useState<any>(null);

  // Simulator States for Project 2 (Toda Management)
  const [todaDrivers, setTodaDrivers] = useState([
    { id: 'TODA-101', name: 'Carlos Santos', status: 'On Shift', timeIn: '06:15 AM', timeOut: '--', boundaryPaid: 250, boundaryDue: 250, trips: 18 },
    { id: 'TODA-102', name: 'Danilo Reyes', status: 'On Shift', timeIn: '07:00 AM', timeOut: '--', boundaryPaid: 200, boundaryDue: 250, trips: 14 },
    { id: 'TODA-103', name: 'Eduardo Ramos', status: 'Clocked Out', timeIn: '05:30 AM', timeOut: '02:00 PM', boundaryPaid: 250, boundaryDue: 250, trips: 22 },
  ]);
  const [selectedDriverId, setSelectedDriverId] = useState('TODA-101');
  const [remittanceInput, setRemittanceInput] = useState('50');
  const [todaLogMsg, setTodaLogMsg] = useState<string | null>(null);

  if (!project) return null;

  // Run Travel Simulation
  const handleRunTravelGenerator = () => {
    setTravelRunning(true);
    setTravelStep(1);
    setTravelResult(null);

    setTimeout(() => {
      setTravelStep(2); // n8n webhook
    }, 700);

    setTimeout(() => {
      setTravelStep(3); // Gemini AI reasoning
    }, 1500);

    setTimeout(() => {
      setTravelStep(4); // Dual SMS & Email dispatch
    }, 2300);

    setTimeout(() => {
      setTravelRunning(false);
      setTravelStep(5);
      setTravelResult({
        destination: travelDestination,
        safetyIndex: '9.4 / 10 (Very Safe)',
        estimatedCost: '$1,380 total',
        dailyBreakdown: [
          'Day 1: Arrival & Historic Shibuya District Walking Tour (Estimated cost: $95)',
          'Day 2: Morning Fish Market tasting & Asakusa Senso-ji temple grounds (Estimated cost: $110)',
          'Day 3: Shinjuku Gyoen peaceful retreat & evening Omoide Yokocho dining (Estimated cost: $85)'
        ],
        accommodationRecommendation: 'Mid-tier Boutique Hotel in Ginza with 24/7 concierge & automated keyless access',
        smsDispatched: `[AI-TRAVEL] Itinerary confirmed for ${travelDestination}! 3-day guide & safety map sent to ${travelEmail}. Booking ref #TRV-8942`,
        emailDispatched: true
      });
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // ignore in iframe
      }
    }, 3100);
  };

  // Toda Actions
  const handleLogDriverAction = (action: 'timeIn' | 'timeOut' | 'remittance') => {
    const updated = todaDrivers.map(d => {
      if (d.id === selectedDriverId) {
        if (action === 'timeIn') {
          const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return { ...d, status: 'On Shift', timeIn: now, timeOut: '--' };
        } else if (action === 'timeOut') {
          const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return { ...d, status: 'Clocked Out', timeOut: now };
        } else if (action === 'remittance') {
          const added = parseInt(remittanceInput) || 0;
          return { ...d, boundaryPaid: Math.min(d.boundaryDue, d.boundaryPaid + added) };
        }
      }
      return d;
    });

    setTodaDrivers(updated);
    setTodaLogMsg(`Updated record for driver ${selectedDriverId} successfully!`);
    setTimeout(() => setTodaLogMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded flex items-center justify-center text-slate-100 font-bold text-sm border"
              style={{ backgroundColor: `${project.accentColor}15`, borderColor: `${project.accentColor}40`, color: project.accentColor }}
            >
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-slate-100">{project.title}</h3>
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                  {project.category}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">{project.skills.join(' • ')}</p>
            </div>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.06] bg-black/40 px-6">
          <button
            id="modal-tab-demo"
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-4 text-[10px] uppercase font-bold tracking-widest border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'demo'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/[0.04]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Sandbox</span>
          </button>
          <button
            id="modal-tab-architecture"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-[10px] uppercase font-bold tracking-widest border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/[0.04]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Workflow</span>
          </button>
          <button
            id="modal-tab-spec"
            onClick={() => setActiveTab('spec')}
            className={`py-3 px-4 text-[10px] uppercase font-bold tracking-widest border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'spec'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/[0.04]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>System Specifications</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          
          {/* TAB 1: INTERACTIVE SANDBOX DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              
              {/* Project 1: Travel Generator Interactive Simulator */}
              {project.demoType === 'travel' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                        <Sparkles className="w-4 h-4" />
                        <span>Live n8n + Gemini Automation Engine Simulator</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">1-Click Dispatch</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Configure your travel preference below and execute the full stack workflow. Witness the n8n pipeline trigger, Gemini reasoning, and dual-channel email/SMS output.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Destination Target</label>
                        <select
                          value={travelDestination}
                          onChange={(e) => setTravelDestination(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                        >
                          <option>Tokyo, Japan</option>
                          <option>Zurich & Swiss Alps</option>
                          <option>Bali, Indonesia</option>
                          <option>Rome & Amalfi Coast</option>
                          <option>New York City, USA</option>
                          <option>Cebu & Palawan, Philippines</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Budget Bracket</label>
                        <select
                          value={travelBudget}
                          onChange={(e) => setTravelBudget(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                        >
                          <option>Budget-Conscious ($650)</option>
                          <option>Comfort ($1,500)</option>
                          <option>Premium Luxury ($3,500)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Travel Experience / Vibe</label>
                        <select
                          value={travelVibe}
                          onChange={(e) => setTravelVibe(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                        >
                          <option>Culture & Culinary</option>
                          <option>Relaxation & Nature</option>
                          <option>Urban Exploration & Tech</option>
                          <option>High Adventure & Hiking</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-mono">Recipient:</span>
                        <input
                          type="email"
                          value={travelEmail}
                          onChange={(e) => setTravelEmail(e.target.value)}
                          placeholder="traveler@example.com"
                          className="bg-slate-950 border border-white/10 rounded-md px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                        />
                      </div>

                      <button
                        id="run-travel-generator-btn"
                        onClick={handleRunTravelGenerator}
                        disabled={travelRunning}
                        className="btn-minimal-primary text-xs gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {travelRunning ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Orchestrating Pipeline...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Run Automated Workflow</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* n8n Node Execution Visualizer */}
                  {(travelRunning || travelStep > 0) && (
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-white/[0.08] space-y-3">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>n8n Pipeline Node Telemetry</span>
                        <span className="text-sky-400">Status: {travelRunning ? 'Executing' : 'Success (200 OK)'}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                          travelStep >= 1 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="font-semibold">1. Webhook</span>
                          </div>
                          <p className="text-[10px] text-slate-400">Payload Ingestion</p>
                        </div>

                        <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                          travelStep >= 2 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="font-semibold">2. Safety Index</span>
                          </div>
                          <p className="text-[10px] text-slate-400">Destination Audit</p>
                        </div>

                        <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                          travelStep >= 3 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="font-semibold">3. Gemini AI</span>
                          </div>
                          <p className="text-[10px] text-slate-400">Itinerary Synthesis</p>
                        </div>

                        <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                          travelStep >= 4 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="font-semibold">4. SMS/Email</span>
                          </div>
                          <p className="text-[10px] text-slate-400">Dual Dispatch</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Generated Output */}
                  {travelResult && (
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-sky-500/30 space-y-4 animate-in fade-in">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                        <div>
                          <span className="text-xs text-sky-400 font-mono">Generated Output</span>
                          <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-sky-400" />
                            {travelResult.destination} Custom Itinerary
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono">
                            Safety: {travelResult.safetyIndex}
                          </span>
                          <span className="text-xs px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono">
                            Est: {travelResult.estimatedCost}
                          </span>
                        </div>
                      </div>

                      {/* Daily Plan */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400">Curated Schedule:</div>
                        {travelResult.dailyBreakdown.map((item: string, idx: number) => (
                          <div key={idx} className="p-2 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-200 flex items-start gap-2">
                            <span className="text-sky-400 font-mono font-bold">{idx + 1}.</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Dispatched Messages Simulation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/20 space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>Instant SMS Dispatched</span>
                          </div>
                          <p className="text-[11px] text-slate-300 font-mono bg-emerald-950/20 p-2 rounded border border-emerald-500/10">
                            {travelResult.smsDispatched}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-950 border border-sky-500/20 space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400">
                            <Mail className="w-3.5 h-3.5" />
                            <span>HTML Summary Sent</span>
                          </div>
                          <p className="text-[11px] text-slate-300 font-mono bg-sky-950/20 p-2 rounded border border-sky-500/10">
                            Delivered interactive map + hotel vouchers to <strong>{travelEmail}</strong> with PDF offline backup.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Project 2: Toda Management Interactive Simulator */}
              {project.demoType === 'toda' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <Compass className="w-4 h-4" />
                        <span>TODA Fleet Dispatch & Remittance Tracker</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">AI Route & Boundary Optimizer</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Select Driver</label>
                        <select
                          value={selectedDriverId}
                          onChange={(e) => setSelectedDriverId(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                        >
                          {todaDrivers.map(d => (
                            <option key={d.id} value={d.id}>{d.name} ({d.id})</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Add Remittance (₱)</label>
                        <input
                          type="number"
                          value={remittanceInput}
                          onChange={(e) => setRemittanceInput(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div className="flex items-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleLogDriverAction('remittance')}
                          className="flex-1 btn-minimal text-xs text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/10"
                        >
                          Submit ₱
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLogDriverAction('timeIn')}
                          className="btn-minimal text-xs text-slate-300"
                          title="Log Time In"
                        >
                          Time-In
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLogDriverAction('timeOut')}
                          className="btn-minimal text-xs text-slate-300"
                          title="Log Time Out"
                        >
                          Time-Out
                        </button>
                      </div>
                    </div>

                    {todaLogMsg && (
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                        {todaLogMsg}
                      </div>
                    )}
                  </div>

                  {/* Driver Performance Table */}
                  <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-slate-950">
                    <div className="px-4 py-2.5 bg-slate-900/80 border-b border-white/[0.08] text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Daily Driver Roster & Boundary Ledger</span>
                      <span className="text-emerald-400">Total Active: {todaDrivers.filter(d => d.status === 'On Shift').length}</span>
                    </div>

                    <div className="divide-y divide-white/[0.04]">
                      {todaDrivers.map((driver) => (
                        <div key={driver.id} className="p-3 flex flex-wrap items-center justify-between gap-3 hover:bg-white/[0.02]">
                          <div>
                            <div className="font-semibold text-slate-200 text-xs">{driver.name}</div>
                            <div className="text-[11px] font-mono text-slate-500">ID: {driver.id} • Trips: {driver.trips}</div>
                          </div>

                          <div className="flex items-center gap-4 text-xs font-mono">
                            <div>
                              <span className="text-slate-500 block text-[10px]">Time In / Out</span>
                              <span className="text-slate-300">{driver.timeIn} → {driver.timeOut}</span>
                            </div>

                            <div>
                              <span className="text-slate-500 block text-[10px]">Boundary Status</span>
                              <span className={driver.boundaryPaid >= driver.boundaryDue ? 'text-emerald-400' : 'text-amber-400'}>
                                ₱{driver.boundaryPaid} / ₱{driver.boundaryDue}
                              </span>
                            </div>

                            <span className={`px-2 py-0.5 rounded text-[10px] ${
                              driver.status === 'On Shift' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {driver.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Google AI Studio Demand Prediction Card */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Google AI Studio Peak-Hour Dispatch Optimization</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      AI Forecast: Terminal B expecting +42% passenger influx between 05:00 PM - 07:30 PM. 
                      Recommendation: Re-route 4 standby tricycles from Terminal A to eliminate queue latency.
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & WORKFLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider">Architecture Narrative</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              {project.workflowSteps && (
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-400">Execution Lifecycle:</div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.workflowSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-white/[0.06] flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-xs font-mono font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200 text-xs">{step.title}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400">{step.tool}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SPECIFICATIONS */}
          {activeTab === 'spec' && (
            <div className="space-y-5">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Functional Capabilities</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-white/[0.06] flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.08] text-center">
                    <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                    <div className="text-base font-bold text-slate-100 mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-black/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
          <div className="text-[10px] uppercase text-slate-400 font-mono flex items-center gap-2">
            <span>DIRECT:</span>
            <span className="text-slate-200">itzy4n6@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-minimal-primary text-[10px] uppercase font-bold tracking-wider py-1.5 px-3 gap-1.5 no-underline cursor-pointer"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-minimal text-[10px] uppercase font-bold tracking-wider py-1.5 px-3 gap-1.5 no-underline cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-minimal text-[10px] uppercase font-bold tracking-wider py-1.5 px-3 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
