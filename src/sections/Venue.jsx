import React from 'react';
import { MapPin, Navigation, Calendar, Clock, AlertCircle, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { VENUE_DATA } from '../data/eventData';

export default function Venue() {
  return (
    <section id="venue" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>PHYSICAL CAMPUS LOGISTICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Meet Us on Campus.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
            DevSync '26 takes place entirely on campus at the central seminar facility. Plan your arrival and review key entry checkpoints below.
          </p>

          {/* Provisional Venue Disclaimer */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-lighter/80 border border-white/10 text-slate-400 text-xs font-mono">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>PROVISIONAL PLACEHOLDER: Campus venue rooms and gate landmarks will be finalized in your registration confirmation email.</span>
          </div>
        </div>

        {/* Venue Layout Grid: Card Details + Campus Blueprint / Schematic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-surface-lighter/70 border border-white/10 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Event Location
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {VENUE_DATA.format}
                </span>
              </div>

              <div className="space-y-6">
                {/* Venue Name */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Venue Complex</div>
                    <div className="text-lg font-bold text-white mt-0.5">{VENUE_DATA.venue}</div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-1">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Date & Schedule</div>
                    <div className="text-base font-semibold text-white mt-0.5">{VENUE_DATA.date}</div>
                    <div className="text-xs font-mono text-slate-400">{VENUE_DATA.timing}</div>
                  </div>
                </div>

                {/* Gate Entry & Landmark */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#090d16] border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Designated Entry</div>
                    <div className="text-sm font-bold text-white mt-1">{VENUE_DATA.entry}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#090d16] border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Nearest Landmark</div>
                    <div className="text-sm font-bold text-white mt-1">{VENUE_DATA.landmark}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Guidelines */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Attendee Check-in Protocol:
              </span>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Produce your DevSync digital pass or student ID at the registration desk.</li>
                <li>Breakfast and delegate kits are distributed from 09:30 AM to 10:15 AM.</li>
                <li>Strict 150 capacity limit enforced for physical hall safety.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Campus Blueprint Schematic Map */}
          <div className="lg:col-span-7 rounded-3xl bg-surface-lighter/50 border border-white/10 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Interactive Campus Schematic
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                PROVISIONAL MAP GUIDE
              </span>
            </div>

            {/* Custom SVG Blueprint Illustration */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#080c14] border border-white/10 p-4 flex items-center justify-center overflow-hidden group">
              
              {/* Grid Lines */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Waypoint Nodes & Campus Schematic SVG */}
              <svg className="w-full h-full max-w-md relative z-10" viewBox="0 0 400 240" fill="none">
                {/* Entry pathway */}
                <path d="M 40 200 L 120 200 L 120 120 L 220 120 L 220 70 L 320 70" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                {/* Building: Main Academic Block */}
                <rect x="80" y="30" width="100" height="60" rx="8" fill="#131e33" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="130" y="65" fill="#93c5fd" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Main Academic Block</text>

                {/* Building: Seminar Hall Complex (Highlighted Destination) */}
                <rect x="220" y="30" width="140" height="90" rx="8" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
                <rect x="225" y="35" width="130" height="80" rx="6" fill="#1e3a8a" fillOpacity="0.3" />
                <text x="290" y="75" fill="#ffffff" fontSize="11" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" fontWeight="bold">Seminar Hall</text>
                <text x="290" y="92" fill="#67e8f9" fontSize="8" fontFamily="monospace" textAnchor="middle">★ DevSync '26 Venue</text>

                {/* Main Gate waypoint */}
                <circle cx="40" cy="200" r="8" fill="#10b981" />
                <text x="40" y="225" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">Campus Gate</text>

                {/* Courtyard Networking Area */}
                <rect x="130" y="140" width="80" height="50" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />
                <text x="170" y="168" fill="#c084fc" fontSize="8" fontFamily="monospace" textAnchor="middle">Lunch Courtyard</text>
              </svg>

              {/* Floating Live Badge */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#090b10]/90 border border-blue-500/30 text-[10px] font-mono text-cyan-300">
                On-campus signage will guide delegates from Main Gate
              </div>
            </div>

            {/* Checkpoint list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {VENUE_DATA.checkpoints.map((cp) => (
                <div key={cp.name} className="p-3 rounded-xl bg-[#080d17] border border-white/5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>{cp.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{cp.time}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">{cp.desc}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

