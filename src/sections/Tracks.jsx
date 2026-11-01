import React from 'react';
import { Layout, Server, Terminal, ArrowRight, Layers, CheckCircle, Sparkles } from 'lucide-react';
import { TRACKS_DATA } from '../data/eventData';
import { LegoStudRow, LegoStud, LegoRobotGraphic } from '../components/LegoElements';

export default function Tracks({ onSelectTrack }) {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Terminal: Terminal
  };

  const trackLegoStyles = [
    {
      cardClass: 'border-[#006CB7] border-b-6 border-b-[#004B80] shadow-[0_8px_25px_rgba(0,108,183,0.15)]',
      studColor: 'blue',
      badgeClass: 'bg-[#006CB7] text-white',
      iconClass: 'bg-[#EBF5FB] text-[#006CB7] border-[#B9E2FE]',
      btnClass: 'lego-btn-blue text-white',
    },
    {
      cardClass: 'border-[#00852B] border-b-6 border-b-[#00581C] shadow-[0_8px_25px_rgba(0,133,43,0.15)]',
      studColor: 'green',
      badgeClass: 'bg-[#00852B] text-white',
      iconClass: 'bg-[#E8F8F0] text-[#00852B] border-[#B7E8CE]',
      btnClass: 'lego-btn-green text-white',
    },
    {
      cardClass: 'border-[#FFD500] border-b-6 border-b-[#C6A700] shadow-[0_8px_25px_rgba(255,213,0,0.15)]',
      studColor: 'yellow',
      badgeClass: 'bg-[#FFD500] text-[#252525]',
      iconClass: 'bg-[#FFFDE7] text-[#8C6D00] border-[#FFF59D]',
      btnClass: 'lego-btn-yellow text-[#252525]',
    },
  ];

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with VISIBLE LEGO ROBOT 2 */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-[#252525] border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#006CB7]" />
            <span>CURATED TECHNICAL BREAKDOWNS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#252525] mb-6 flex items-center justify-center gap-3">
            <span>Explore Your Technical Playground.</span>
            {/* VISIBLE LEGO ROBOT 2: Coding Robot */}
            <span className="hidden sm:inline-block animate-bounce">
              <LegoRobotGraphic pose="coding" size={56} />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            Three deep-dive engineering paths designed for real-world application, live architecture critiques, and direct hands-on collaboration.
          </p>
        </div>

        {/* 3 Premium Track Cards styled as Assembled LEGO Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRACKS_DATA.map((track, idx) => {
            const Icon = iconMap[track.icon] || Layout;
            const style = trackLegoStyles[idx] || trackLegoStyles[0];

            return (
              <div
                key={track.id}
                className={`group relative rounded-3xl bg-white border-2 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-lg overflow-hidden ${style.cardClass}`}
              >
                {/* Top Row of 4 Tactile Studs */}
                <div className="absolute top-2 left-6">
                  <LegoStudRow count={4} color={style.studColor} size="xs" />
                </div>

                <div className="pt-4">
                  {/* Header: Track Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-md text-xs font-mono font-extrabold uppercase tracking-wider shadow-sm ${style.badgeClass}`}>
                      {track.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 shadow-sm ${style.iconClass}`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#252525] mb-3 group-hover:text-[#006CB7] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {track.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Core Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#F5EBD2] text-[#252525] border border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Quick Action with 3D Brick Button */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => onSelectTrack(track.title)}
                    className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-extrabold ${style.btnClass}`}
                  >
                    <span>Choose this track</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
