import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Wifi, Sparkles, CheckCircle2, Play, Circle, Layers } from 'lucide-react';
import { LegoStud, LegoGoogleBrickBar, FloatingLegoBrick } from './LegoElements';

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
    setCompileOutput('Connecting campus nodes... [GDG MMMUT Mesh Online]');
    setTimeout(() => {
      setIsCompiling(false);
      setCompileOutput('✨ DevSync 2026 Engine Online: MMMUT Seminar Hall Complex Ready.');
    }, 1100);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-yellow-500/15 to-red-500/20 rounded-3xl blur-2xl opacity-75 -z-10 animate-pulse-subtle" />

      {/* Floating Decorative 3D LEGO Bricks */}
      <div className="absolute -top-8 -right-6 hidden sm:block z-20">
        <FloatingLegoBrick color="yellow" size={54} rotation={18} />
      </div>
      <div className="absolute -bottom-8 -left-6 hidden sm:block z-20">
        <FloatingLegoBrick color="red" size={50} rotation={-14} />
      </div>

      {/* LEGO Workstation Terminal / Code Editor Window */}
      <div className="relative rounded-2xl bg-[#0b0e16] border-2 border-[#2b3548] border-b-4 border-b-[#07090f] shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top 4-Color LEGO Brick Interlocking Header */}
        <LegoGoogleBrickBar />

        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0e1424] border-b border-white/10">
          <div className="flex items-center gap-2">
            {/* Realistic 3D LEGO Window Studs */}
            <div className="flex items-center gap-1.5">
              <LegoStud color="red" size="xs" />
              <LegoStud color="yellow" size="xs" />
              <LegoStud color="green" size="xs" />
            </div>
            <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5 font-bold">
              <Terminal className="w-3.5 h-3.5 text-[#3b8bff]" />
              devsync-core-workspace
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#00852b] text-white border-b-2 border-[#004d19] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              100% OFFLINE MESH
            </span>
          </div>
        </div>

        {/* Tab Bar styled like LEGO Building Plates */}
        <div className="flex items-center justify-between px-3 pt-2 bg-[#0c101c] border-b border-white/5">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all border-t-2 ${
                  activeTab === tab.id
                    ? 'bg-[#090d16] text-[#ffd500] border-t-[#ffd500] border-x border-white/10 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border-t-transparent'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* 3D LEGO Brick Run/Simulate Button */}
          <button
            onClick={handleRunCompile}
            disabled={isCompiling}
            className="lego-btn-blue flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold text-white rounded-lg active:scale-95 disabled:opacity-60 uppercase tracking-wider"
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
              <p className="pl-4"><span className="text-slate-400">organiser:</span> <span className="text-cyan-300">"GDG MMMUT"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">institution:</span> <span className="text-amber-300">"MMMUT Gorakhpur, UP"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">date:</span> <span className="text-emerald-400">"November 28, 2026"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">venue:</span> <span className="text-amber-200">"Seminar Hall Complex, Campus"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">format:</span> <span className="text-cyan-400">"100% IN-PERSON"</span> <span className="text-slate-500">// Zero Virtual Attendance</span>,</p>
              <p className="pl-4"><span className="text-slate-400">capacityLimit:</span> <span className="text-purple-400">150</span> <span className="text-slate-500">// Combined</span>,</p>
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

      {/* Floating Decorative LEGO Brick Badges */}
      <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-4 px-4 py-2.5 rounded-xl bg-[#121626] border-2 border-blue-500/40 border-b-4 border-b-blue-900/80 shadow-2xl z-20">
        <LegoStud color="blue" size="sm" />
        <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold font-display text-white">MMMUT Gorakhpur</div>
          <div className="text-[10px] font-mono text-slate-400">Seminar Hall Complex</div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-3 absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-[#121626] border-2 border-emerald-500/40 border-b-4 border-b-emerald-900/80 shadow-2xl z-20">
        <LegoStud color="green" size="sm" />
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold font-display text-white">100% In-Person</div>
          <div className="text-[10px] font-mono text-slate-400">Zero Virtual Streaming</div>
        </div>
      </div>
    </div>
  );
}

