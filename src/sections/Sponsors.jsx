import React from 'react';
import { Building2, Sparkles, AlertCircle, Shield, Award } from 'lucide-react';
import { SPONSORS_DATA } from '../data/eventData';

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Glow orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>COMMUNITY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Powered by Community & Innovation.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
            Collaboration drives technology forward. We are proud to feature supportive community partners backing our campus developers.
          </p>

          {/* Mandatory Fictional Notice Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-lighter/80 border border-white/10 text-slate-400 text-xs font-mono">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>NOTICE: All partners and brand marks listed below are <strong>SAMPLE / FICTIONAL ENTITIES</strong> designed for event demonstration.</span>
          </div>
        </div>

        {/* 3 Sponsor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPONSORS_DATA.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group relative rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {sponsor.tag}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    FICTIONAL PARTNER
                  </span>
                </div>

                {/* Original Distinctive Text-Based Logo Placeholder */}
                <div className="h-28 rounded-2xl bg-[#07090e] border border-white/10 flex flex-col items-center justify-center p-4 mb-6 group-hover:border-blue-500/30 transition-all">
                  <div className="font-display font-black text-2xl tracking-wider text-white group-hover:text-blue-400 transition-colors">
                    {sponsor.logoText}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 mt-1">
                    {sponsor.logoSub}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {sponsor.name}
                </h3>
                <p className="text-xs font-mono text-blue-400 mb-4">
                  {sponsor.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {sponsor.description}
                </p>
              </div>

              {/* Verified demo tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Campus Supporter</span>
                <span>Demo Brand</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

