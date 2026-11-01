import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Coffee, Presentation, Code2, Utensils, Zap, Trophy, Sparkles, Filter } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/eventData';
import { LegoStud, LegoCampusGatewayGraphic } from '../components/LegoElements';

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
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#F5EBD2] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-sand">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-[#252525] border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] mb-4 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#E53935]" />
            <span>NOVEMBER 28, 2026 • SINGLE INTENSIVE DAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#252525] mb-6">
            One Day. Countless Ideas.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans mb-8">
            An action-packed offline agenda structured around deep discussions, interactive code-alongs, and hands-on peer review.
          </p>

          {/* Physical Venue Alert Pill with MINIATURE LEGO STRUCTURE 3: Campus Gateway */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#FFD500] border-b-3 border-b-[#C6A700] text-[#252525] text-xs font-mono font-bold shadow-sm">
              <MapPin className="w-4 h-4 text-[#E53935] shrink-0" />
              <span>All sessions conducted in-person at Seminar Hall Complex / Multi-Purpose Hall.</span>
            </div>
            <div className="hidden lg:inline-flex items-center" title="MMMUT Campus Gateway">
              <LegoCampusGatewayGraphic width={54} height={44} />
            </div>
          </div>
        </div>

        {/* Timeline Filter Pills styled as LEGO Brick Plates */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Morning', 'Midday', 'Lunch', 'Afternoon', 'Wrap-up'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === tab
                  ? 'lego-btn-blue text-white shadow-md'
                  : 'bg-white text-slate-700 border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] hover:text-[#252525] hover:bg-[#FFF8E7]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line styled as Interlocking Brick Track */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#006CB7] via-[#FFD500] to-[#00852B] rounded-full shadow-sm" />

          <div className="space-y-6">
            {filteredSessions.map((session, index) => {
              const Icon = iconMap[session.icon] || Clock;
              const studColor = nodeColors[index % nodeColors.length];

              return (
                <div
                  key={session.time}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 sm:ml-16 shadow-md bg-white border-2 ${
                    session.highlight
                      ? 'border-[#006CB7] border-b-5 border-b-[#004B80]'
                      : 'border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] hover:border-[#006CB7]'
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
                        <span className="font-mono text-xs font-bold text-white px-2.5 py-0.5 rounded-md bg-[#006CB7] shadow-sm">
                          {session.time}
                        </span>
                        <span className="text-[11px] font-mono uppercase font-bold text-slate-700 px-2 py-0.5 rounded-md bg-[#F5EBD2] border border-[#E8DCC4]">
                          {session.type}
                        </span>
                        {session.highlight && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-extrabold text-[#252525] px-2.5 py-0.5 rounded-md bg-[#FFD500] border border-[#C6A700] shadow-sm">
                            <Sparkles className="w-3 h-3 text-[#E53935]" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#252525] group-hover:text-[#006CB7] transition-colors">
                        {session.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {session.subtitle}
                      </p>
                    </div>

                    {/* Venue Location Pill */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#006CB7] shrink-0" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{session.location}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#00852B] font-extrabold uppercase tracking-wider mt-1">
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
