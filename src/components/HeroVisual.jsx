import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Wifi, Sparkles, CheckCircle2, Play, Circle, Layers } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('config');
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileOutput, setCompileOutput] = useState('Build status: Ready (100% In-Person Venue)');

  const tabs = [
    { id: 'config', name: 'devsync.config.ts', lang: 'typescript' },
    { id: 'mesh', name: 'campus_mesh.rs', lang: 'rust' },
    { id: 'schedule', name: 'sessions.json', lang: 'json' },
  ];

  const handleRunCompile = () => {
    setIsCompiling(true);
    setCompileOutput('Connecting campus nodes... [150/150 nodes indexed]');
    setTimeout(() => {
      setIsCompiling(false);
      setCompileOutput('✨ DevSync 2026 Engine Online: Physical Seminar Hall Complex Ready.');
    }, 1100);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-violet-600/15 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 -z-10 animate-pulse-subtle" />

      {/* Terminal / Code Editor Window */}
      <div className="relative rounded-2xl bg-[#0b0f19] border border-white/15 shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl">
        
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0e1424] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              devsync-core-workspace
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              100% OFFLINE MESH
            </span>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center justify-between px-3 pt-2 bg-[#0d1220] border-b border-white/5">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0b0f19] text-blue-400 border-t-2 border-t-blue-500 border-x border-white/10 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleRunCompile}
            disabled={isCompiling}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded transition-all active:scale-95 disabled:opacity-60"
            title="Execute dry-run simulation"
          >
            <Play className={`w-3 h-3 fill-current ${isCompiling ? 'animate-spin' : ''}`} />
            <span>{isCompiling ? 'Syncing...' : 'Simulate'}</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-[#090d16]">
          {activeTab === 'config' && (
            <div className="space-y-1">
              <p><span className="text-violet-400">export const</span> <span className="text-blue-400">DevSyncConference</span> = {'{'}</p>
              <p className="pl-4"><span className="text-slate-400">edition:</span> <span className="text-emerald-400">"DevSync '26"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">date:</span> <span className="text-emerald-400">"November 28, 2026"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">venue:</span> <span className="text-amber-300">"Seminar Hall Complex, Campus"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">format:</span> <span className="text-cyan-400">"100% IN-PERSON"</span> <span className="text-slate-500">// Zero Virtual Attendance</span>,</p>
              <p className="pl-4"><span className="text-slate-400">capacityLimit:</span> <span className="text-purple-400">150</span>,</p>
              <p className="pl-4"><span className="text-slate-400">admission:</span> <span className="text-blue-400">"Free"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">tracks:</span> [</p>
              <p className="pl-8 text-slate-300"><span className="text-amber-200">"01_Frontend_Architecture"</span>,</p>
              <p className="pl-8 text-slate-300"><span className="text-amber-200">"02_Backend_API_Systems"</span>,</p>
              <p className="pl-8 text-slate-300"><span className="text-amber-200">"03_Open_Source_Tooling"</span></p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-slate-400">perks:</span> [<span className="text-emerald-300">"Swag Kit"</span>, <span className="text-emerald-300">"High-Tea"</span>, <span className="text-emerald-300">"Mentorship"</span>]</p>
              <p>{'}'};</p>
            </div>
          )}

          {activeTab === 'mesh' && (
            <div className="space-y-1 text-slate-300">
              <p><span className="text-violet-400">struct</span> <span className="text-yellow-400">CampusNetworkNode</span> {'{'}</p>
              <p className="pl-4"><span className="text-slate-400">node_id:</span> <span className="text-cyan-400">&str</span>,</p>
              <p className="pl-4"><span className="text-slate-400">location:</span> <span className="text-cyan-400">SeminarHallComplex</span>,</p>
              <p className="pl-4"><span className="text-slate-400">offline_verified:</span> <span className="text-purple-400">bool</span>,</p>
              <p className="pl-4"><span className="text-slate-400">max_builders:</span> <span className="text-purple-400">u16</span>,</p>
              <p>{'}'}</p>
              <p className="text-slate-500 pt-1">// Offline peer review protocol</p>
              <p><span className="text-violet-400">fn</span> <span className="text-blue-400">handshake_builders</span>() -&gt; <span className="text-emerald-400">Result&lt;Community, Error&gt;</span> {'{'}</p>
              <p className="pl-4 text-emerald-300">Ok(Community::new_offline_collective())</p>
              <p>{'}'}</p>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-1">
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-slate-400">"09:30 AM":</span> <span className="text-emerald-300">"Breakfast & Swag Kit Distribution"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">"10:15 AM":</span> <span className="text-emerald-300">"Keynote: College Projects to Scalable Codebases"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">"11:45 AM":</span> <span className="text-emerald-300">"Interactive Code-along & Live Debugging"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">"01:15 PM":</span> <span className="text-emerald-300">"Networking Lunch & Peer Hangout"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">"02:15 PM":</span> <span className="text-emerald-300">"Offline Lightning Talks (5-min Open Mic)"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">"03:45 PM":</span> <span className="text-emerald-300">"Peer Review Mixer, Quiz Awards & Wrap-Up"</span></p>
              <p>{'}'}</p>
            </div>
          )}
        </div>

        {/* Terminal Status Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1424] border-t border-white/10 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="truncate max-w-[280px] sm:max-w-md text-slate-300">{compileOutput}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-500">
            <span>UTF-8</span>
            <span>Tab: 2</span>
            <span>150 Cap</span>
          </div>
        </div>

      </div>

      {/* Floating Decorative Cards */}
      <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-4 px-4 py-3 rounded-xl bg-surface-lighter/90 border border-blue-500/30 backdrop-blur-md shadow-xl shadow-black/50">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Physical Venue</div>
          <div className="text-[10px] text-slate-400">Seminar Hall Complex</div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-3 absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-surface-lighter/90 border border-violet-500/30 backdrop-blur-md shadow-xl shadow-black/50">
        <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">100% In-Person</div>
          <div className="text-[10px] text-slate-400">Zero Virtual Streaming</div>
        </div>
      </div>
    </div>
  );
}

