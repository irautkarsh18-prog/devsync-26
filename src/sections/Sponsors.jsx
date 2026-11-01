import React from 'react';
import { Building2, Sparkles, AlertCircle, Shield, Award } from 'lucide-react';
import { SPONSORS_DATA } from '../data/eventData';
import { LegoStudRow } from '../components/LegoElements';

export default function Sponsors() {
  const sponsorStudColors = ['blue', 'orange', 'green'];

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] lego-baseplate-pattern">
      
      {/* Glow orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-black mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>COMMUNITY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Powered by Community & Innovation.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
            Collaboration drives technology forward. We are proud to feature supportive community partners backing our campus developers.
          </p>

          {/* Mandatory Fictional Notice Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#151b29] border border-[#2b3548] border-b-2 border-b-black text-slate-300 text-xs font-mono font-semibold shadow-sm">
            <AlertCircle className="w-4 h-4 text-[#ffd500] shrink-0" />
            <span>NOTICE: All partners and brand marks listed below are <strong>SAMPLE / FICTIONAL ENTITIES</strong> designed for event demonstration.</span>
          </div>
        </div>

        {/* 3 Sponsor Cards styled as LEGO Plates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPONSORS_DATA.map((sponsor, idx) => (
            <div
              key={sponsor.name}
              className="group relative rounded-3xl bg-[#111520] border-2 border-[#2b3548] border-b-4 border-b-[#070910] p-8 flex flex-col justify-between hover:border-[#ffd500]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl overflow-hidden"
            >
              {/* Top Studs */}
              <div className="absolute top-2 left-6">
                <LegoStudRow count={4} color={sponsorStudColors[idx % 3]} size="xs" />
              </div>

              <div className="pt-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#181f30] border border-[#2e3b54] text-[#ffd500]">
                    {sponsor.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#3b8bff] uppercase tracking-wider font-bold">
                    FICTIONAL PARTNER
                  </span>
                </div>

                {/* Original Distinctive Text-Based Logo Placeholder */}
                <div className="h-28 rounded-2xl bg-[#080c14] border-2 border-[#1c2333] border-b-4 border-b-black flex flex-col items-center justify-center p-4 mb-6 group-hover:border-[#ffd500]/40 transition-all shadow-inner">
                  <div className="font-display font-black text-2xl tracking-wider text-white group-hover:text-[#ffd500] transition-colors">
                    {sponsor.logoText}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 mt-1 font-bold">
                    {sponsor.logoSub}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {sponsor.name}
                </h3>
                <p className="text-xs font-mono font-bold text-[#3b8bff] mb-4">
                  {sponsor.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {sponsor.description}
                </p>
              </div>

              {/* Verified demo tag */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 font-semibold">
                <span>Campus Supporter</span>
                <span className="text-[#ffd500]">Demo Brand</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

