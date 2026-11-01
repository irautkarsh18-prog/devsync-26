import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Coffee, Presentation, Code2, Utensils, Zap, Trophy, Sparkles, Filter } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/eventData';

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

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>NOVEMBER 28, 2026 • SINGLE INTENSIVE DAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            One Day. Countless Ideas.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8">
            An action-packed offline agenda structured around deep discussions, interactive code-alongs, and hands-on peer review.
          </p>

          {/* Physical Venue Alert Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-lighter/80 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>All sessions conducted in-person at Seminar Hall Complex / Multi-Purpose Hall.</span>
          </div>
        </div>

        {/* Timeline Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Morning', 'Midday', 'Lunch', 'Afternoon', 'Wrap-up'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-violet-500/50 to-transparent" />

          <div className="space-y-6">
            {filteredSessions.map((session, index) => {
              const Icon = iconMap[session.icon] || Clock;

              return (
                <div
                  key={session.time}
                  className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 sm:ml-16 ${
                    session.highlight
                      ? 'bg-gradient-to-r from-blue-950/40 via-surface-lighter/90 to-surface-lighter/60 border-blue-500/40 shadow-xl shadow-blue-950/20'
                      : 'bg-surface-lighter/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden sm:flex absolute -left-[4.5rem] top-7 w-6 h-6 rounded-full bg-[#090b10] border-2 border-blue-500 items-center justify-center group-hover:scale-125 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Time & Session Details */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                          {session.time}
                        </span>
                        <span className="text-[11px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded bg-white/5">
                          {session.type}
                        </span>
                        {session.highlight && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {session.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {session.subtitle}
                      </p>
                    </div>

                    {/* Venue Location Pill */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{session.location}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mt-1">
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

