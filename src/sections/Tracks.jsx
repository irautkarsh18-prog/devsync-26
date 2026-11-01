import React from 'react';
import { Layout, Server, Terminal, ArrowRight, Layers, CheckCircle, Sparkles } from 'lucide-react';
import { TRACKS_DATA } from '../data/eventData';
import { LegoStudRow, LegoStud } from '../components/LegoElements';

export default function Tracks({ onSelectTrack }) {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Terminal: Terminal
  };

  const trackLegoStyles = [
    {
      cardClass: 'border-[#0055bf] border-b-4 border-b-[#003373] shadow-[0_8px_25px_rgba(0,85,191,0.25)]',
      studColor: 'blue',
      badgeClass: 'bg-[#0055bf] text-white border-b border-[#003373]',
      iconClass: 'bg-[#0055bf]/15 text-[#3b8bff] border-[#0055bf]/30',
      btnClass: 'lego-btn-blue text-white',
    },
    {
      cardClass: 'border-[#00852b] border-b-4 border-b-[#004d19] shadow-[0_8px_25px_rgba(0,133,43,0.25)]',
      studColor: 'green',
      badgeClass: 'bg-[#00852b] text-white border-b border-[#004d19]',
      iconClass: 'bg-[#00852b]/15 text-[#22c55e] border-[#00852b]/30',
      btnClass: 'lego-btn-green text-white',
    },
    {
      cardClass: 'border-[#ffd500] border-b-4 border-b-[#a38200] shadow-[0_8px_25px_rgba(255,213,0,0.25)]',
      studColor: 'yellow',
      badgeClass: 'bg-[#ffd500] text-[#11141c] border-b border-[#a38200]',
      iconClass: 'bg-[#ffd500]/15 text-[#ffd500] border-[#ffd500]/30',
      btnClass: 'lego-btn-yellow',
    },
  ];

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] lego-baseplate-pattern">
      
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-black mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>CURATED TECHNICAL BREAKDOWNS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Explore Your Technical Playground.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
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
                className={`group relative rounded-3xl bg-[#111520] border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden ${style.cardClass}`}
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
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${style.iconClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-[#ffd500] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {track.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Core Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#151b29] hover:bg-[#1e2638] text-slate-200 border border-[#2b3548] border-b-2 border-b-black transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Quick Action with 3D Brick Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectTrack(track.title)}
                    className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-extrabold ${style.btnClass}`}
                  >
                    <span>Choose this track</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

