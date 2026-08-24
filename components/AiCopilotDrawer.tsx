'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  RefreshCw, 
  Terminal, 
  Copy, 
  Check, 
  Lightbulb,
  Mail
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolioData';

interface AiCopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiCopilotDrawer({ isOpen, onClose }: AiCopilotDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am the AI Portfolio Copilot for Ryan Lorenton Barcebal. I can provide instant technical breakdowns of his featured projects (TODA Management System, Automated Travel Itinerary Generator), discuss AWS & Serverless architectures, or verify stack alignment for your role. What would you like to explore?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    "Explain the Toda Management System & AI integration",
    "How does the n8n + Gemini travel generator work?",
    "What is the AWS & Serverless experience?",
    "What core technologies and frameworks are used?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newHistory.slice(-5)
        }),
      });

      const data = await response.json();
      setMessages([...newHistory, { role: 'assistant', content: data.text || "Thank you! Feel free to reach out to itzy4n6@gmail.com." }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newHistory,
        {
          role: 'assistant',
          content: "I specialize in Full Stack TypeScript, Next.js, AWS Serverless, and AI integrations (Gemini, Claude Code, Google AI Studio, n8n). Please contact itzy4n6@gmail.com directly for technical interviews!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg h-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-black/80 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black uppercase tracking-tight text-slate-100 text-sm">AI PORTFOLIO COPILOT</h3>
                <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  GEMINI 3.7
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">TECHNICAL ADVISOR</p>
            </div>
          </div>

          <button
            id="close-copilot-drawer-btn"
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
          
          {/* Quick Prompts */}
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
              <span>SUGGESTED INQUIRIES:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="text-left px-2.5 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-[10px] uppercase tracking-wider font-mono text-slate-300 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 pt-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed relative group ${
                    msg.role === 'user'
                      ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-100 rounded-tr-none'
                      : 'bg-black/60 border border-white/[0.08] text-slate-200 rounded-tl-none font-light'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => copyMessage(msg.content, idx)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded bg-black/60 text-slate-400 hover:text-white cursor-pointer"
                      title="Copy response"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] text-xs text-slate-400 font-mono flex items-center gap-2">
                  <span>Synthesizing response...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-white/[0.08] bg-black/80 backdrop-blur-md space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, architecture, or AWS stack..."
              disabled={loading}
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-minimal-primary p-2.5 rounded-lg disabled:opacity-40 cursor-pointer"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
            <span>DIRECT: {PORTFOLIO_DATA.profile.email}</span>
            <span className="text-cyan-400">GEMINI GROUNDED</span>
          </div>
        </div>

      </div>
    </div>
  );
}
