import React from 'react';
import { MapPin, Navigation, Calendar, Clock, AlertCircle, Compass } from 'lucide-react';
import { VENUE_DATA } from '../data/eventData';
import { LegoStudRow } from '../components/LegoElements';

export default function Venue() {
  return (
    <section id="venue" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#006CB7] border-2 border-[#006CB7] mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-[#006CB7]" />
            <span>PHYSICAL CAMPUS LOGISTICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-6">
            Meet Us on Campus.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans mb-6">
            DevSync '26 takes place entirely on campus at the central seminar facility. Plan your arrival and review key entry checkpoints below.
          </p>

          {/* Provisional Venue Disclaimer */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-[#FFD500] text-slate-800 text-xs font-mono font-bold shadow-md">
            <AlertCircle className="w-4 h-4 text-[#FF8C00] shrink-0" />
            <span>PROVISIONAL PLACEHOLDER: Campus venue rooms and gate landmarks will be finalized in your registration confirmation email.</span>
          </div>
        </div>

        {/* Venue Layout Grid: Card Details + Campus Blueprint / Schematic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border-4 border-[#006CB7] border-b-8 border-b-[#004A80] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="blue" size="xs" />
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between border-b-2 border-[#E8DCC4] pb-4 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Event Location
                </div>
                <span className="px-3 py-1 rounded-md text-[11px] font-mono font-black uppercase bg-[#00852B] text-white shadow-sm">
                  {VENUE_DATA.format}
                </span>
              </div>

              <div className="space-y-6">
                {/* Venue Name */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#006CB7]/15 text-[#006CB7] border border-[#006CB7]/30 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500 font-bold">Venue Complex</div>
                    <div className="text-lg font-black text-[#252525] mt-0.5">{VENUE_DATA.venue}</div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#FF8C00]/15 text-[#FF8C00] border border-[#FF8C00]/30 shrink-0 mt-1">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500 font-bold">Date & Schedule</div>
                    <div className="text-base font-bold text-[#252525] mt-0.5">{VENUE_DATA.date}</div>
                    <div className="text-xs font-mono text-slate-600 font-semibold">{VENUE_DATA.timing}</div>
                  </div>
                </div>

                {/* Gate Entry & Landmark */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC4]">
                    <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">Designated Entry</div>
                    <div className="text-sm font-black text-[#252525] mt-1">{VENUE_DATA.entry}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC4]">
                    <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">Nearest Landmark</div>
                    <div className="text-sm font-black text-[#252525] mt-1">{VENUE_DATA.landmark}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Guidelines */}
            <div className="mt-8 pt-6 border-t-2 border-[#E8DCC4] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 block font-black">
                Attendee Check-in Protocol:
              </span>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside font-medium">
                <li>Produce your DevSync digital pass or student ID at the registration desk.</li>
                <li>Breakfast and delegate kits are distributed from 09:30 AM to 10:15 AM.</li>
                <li>Strict 150 capacity limit enforced for physical hall safety.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Campus Blueprint Schematic Map */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-4 border-[#FFD500] border-b-8 border-b-[#D4AF37] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="yellow" size="xs" />
            </div>

            <div className="pt-3">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#006CB7]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#252525] font-black">
                    Interactive Campus Schematic
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-bold">
                  PROVISIONAL MAP GUIDE
                </span>
              </div>

              {/* Custom SVG Blueprint Illustration */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#F5EBD2] border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] p-4 flex items-center justify-center overflow-hidden group shadow-inner">
              
                {/* Grid Lines */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(to right, #006CB7 1px, transparent 1px), linear-gradient(to bottom, #006CB7 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Waypoint Nodes & Campus Schematic SVG */}
                <svg className="w-full h-full max-w-md relative z-10" viewBox="0 0 400 240" fill="none">
                  {/* Entry pathway */}
                  <path d="M 40 200 L 120 200 L 120 120 L 220 120 L 220 70 L 320 70" stroke="#E53935" strokeWidth="3" strokeDasharray="6 6" />

                  {/* Building: Main Academic Block */}
                  <rect x="80" y="30" width="100" height="60" rx="8" fill="#FFFFFF" stroke="#006CB7" strokeWidth="2" />
                  <text x="130" y="65" fill="#006CB7" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Main Academic Block</text>

                  {/* Building: Seminar Hall Complex (Highlighted Destination) */}
                  <rect x="220" y="30" width="140" height="90" rx="8" fill="#FFF8E7" stroke="#E53935" strokeWidth="3" />
                  <rect x="225" y="35" width="130" height="80" rx="6" fill="#FFD500" fillOpacity="0.25" />
                  <text x="290" y="75" fill="#252525" fontSize="12" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" fontWeight="bold">Seminar Hall</text>
                  <text x="290" y="92" fill="#E53935" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">★ DevSync '26 Venue</text>

                  {/* Main Gate waypoint */}
                  <circle cx="40" cy="200" r="9" fill="#00852B" stroke="#ffffff" strokeWidth="2" />
                  <text x="40" y="225" fill="#00852B" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MMMUT Gate</text>

                  {/* Courtyard Networking Area */}
                  <rect x="130" y="140" width="80" height="50" rx="6" fill="#FFFFFF" stroke="#FF8C00" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="170" y="168" fill="#FF8C00" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Lunch Courtyard</text>
                </svg>

                {/* Floating Live Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-white/95 border border-[#E8DCC4] text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                  On-campus signage will guide delegates from Main Gate
                </div>
              </div>
            </div>

            {/* Checkpoint list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {VENUE_DATA.checkpoints.map((cp) => (
                <div key={cp.name} className="p-3.5 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4]">
                  <div className="flex items-center justify-between text-xs font-black text-[#252525]">
                    <span>{cp.name}</span>
                    <span className="text-[10px] font-mono text-[#006CB7] font-black">{cp.time}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1 font-medium">{cp.desc}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
