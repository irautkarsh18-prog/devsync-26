import React from 'react';
import { Layout, Server, Terminal, ArrowRight, Layers, CheckCircle, Sparkles } from 'lucide-react';
import { TRACKS_DATA } from '../data/eventData';

export default function Tracks({ onSelectTrack }) {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Terminal: Terminal
  };

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>CURATED TECHNICAL BREAKDOWNS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Explore Your Technical Playground.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Three deep-dive engineering paths designed for real-world application, live architecture critiques, and direct hands-on collaboration.
          </p>
        </div>

        {/* 3 Premium Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRACKS_DATA.map((track) => {
            const Icon = iconMap[track.icon] || Layout;

            return (
              <div
                key={track.id}
                className="group relative rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-blue-900/20"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
              >
                {/* Accent top gradient stripe */}
                <div 
                  className="absolute top-0 left-10 right-10 h-[2px] transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${track.glowColor}, transparent)`
                  }}
                />

                <div>
                  {/* Header: Track Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider ${track.badgeBg}`}>
                      {track.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {track.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Core Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Quick Action */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => onSelectTrack(track.title)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-slate-300 bg-white/5 hover:bg-blue-600 hover:text-white transition-all group/btn"
                  >
                    <span>Choose this track</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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

