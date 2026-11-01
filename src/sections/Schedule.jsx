import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Coffee, Presentation, Code2, Utensils, Zap, Trophy, Sparkles, Filter } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/eventData';
import { LegoStud } from '../components/LegoElements';

export default function Schedule() {
  const [filter, setFilter] = useState('All');

  const iconMap = {
    Coffee: Coffee,
    Presentation: Presentation,
    Code2: Code2,
    Utensils: Utensils,
    Zap: Zap,
    Trophy: Trophy
  };

  const filteredSessions = filter === 'All' 
    ? SCHEDULE_DATA 
    : SCHEDULE_DATA.filter(s => s.timeTag.toLowerCase() === filter.toLowerCase());

  const nodeColors = ['blue', 'yellow', 'red', 'green', 'orange', 'blue'];

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] lego-baseplate-pattern">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-black mb-4 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>NOVEMBER 28, 2026 • SINGLE INTENSIVE DAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            One Day. Countless Ideas.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8">
            An action-packed offline agenda structured around deep discussions, interactive code-alongs, and hands-on peer review.
          </p>

          {/* Physical Venue Alert Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#151b29] border border-[#ff7e14]/40 border-b-2 border-b-[#b35200] text-[#ffd500] text-xs font-mono font-semibold shadow-sm">
            <MapPin className="w-4 h-4 text-[#ff7e14] shrink-0" />
            <span>All sessions conducted in-person at Seminar Hall Complex / Multi-Purpose Hall.</span>
          </div>
        </div>

        {/* Timeline Filter Pills styled as LEGO Brick Plates */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Morning', 'Midday', 'Lunch', 'Afternoon', 'Wrap-up'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === tab
                  ? 'lego-btn-blue text-white shadow-md'
                  : 'bg-[#151b29] text-slate-300 border border-[#2b3548] border-b-2 border-b-black hover:text-white hover:bg-[#1f283d]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line styled as Interlocking Brick Track */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-1 bg-gradient-to-b from-[#0055bf] via-[#ffd500] to-[#00852b] rounded-full shadow-[0_0_8px_rgba(0,85,191,0.5)]" />

          <div className="space-y-6">
            {filteredSessions.map((session, index) => {
              const Icon = iconMap[session.icon] || Clock;
              const studColor = nodeColors[index % nodeColors.length];

              return (
                <div
                  key={session.time}
                  className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 sm:ml-16 shadow-xl ${
                    session.highlight
                      ? 'bg-[#111522] border-[#0055bf]/60 border-b-4 border-b-[#003882] shadow-blue-950/40'
                      : 'bg-[#111520] border-[#2b3548] border-b-4 border-b-[#070910] hover:border-[#ffd500]/40'
                  }`}
                >
                  {/* Timeline 3D LEGO Stud Node Point (Desktop) */}
                  <div className="hidden sm:flex absolute -left-[4.75rem] top-7 items-center justify-center group-hover:scale-125 transition-transform duration-200">
                    <LegoStud color={studColor} size="md" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Time & Session Details */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-white px-2.5 py-0.5 rounded-md bg-[#0055bf] border-b border-[#003373] shadow-sm">
                          {session.time}
                        </span>
                        <span className="text-[11px] font-mono uppercase font-semibold text-slate-300 px-2 py-0.5 rounded-md bg-[#151b29] border border-white/10">
                          {session.type}
                        </span>
                        {session.highlight && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#11141c] px-2.5 py-0.5 rounded-md bg-[#ffd500] border-b border-[#a38200] shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#ffd500] transition-colors">
                        {session.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {session.subtitle}
                      </p>
                    </div>

                    {/* Venue Location Pill */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-[#3b8bff] shrink-0" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{session.location}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#22c55e] font-bold uppercase tracking-wider mt-1">
                        Physical Room
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

