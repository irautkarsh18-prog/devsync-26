import React from 'react';
import { Building2, AlertCircle } from 'lucide-react';
import { SPONSORS_DATA } from '../data/eventData';
import { LegoStudRow } from '../components/LegoElements';

export default function Sponsors() {
  const sponsorStudColors = ['blue', 'orange', 'green'];
  const sponsorBorderColors = [
    'border-[#006CB7] border-b-6 border-b-[#004A80]',
    'border-[#FF8C00] border-b-6 border-b-[#B35F00]',
    'border-[#00852B] border-b-6 border-b-[#00551B]'
  ];

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#F5EBD2] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-sand">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#006CB7] border-2 border-[#006CB7] mb-4 shadow-sm">
            <Building2 className="w-4 h-4 text-[#006CB7]" />
            <span>COMMUNITY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-6">
            Powered by Community & Innovation.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans mb-6">
            Collaboration drives technology forward. We are proud to feature supportive community partners backing our campus developers.
          </p>

          {/* Mandatory Fictional Notice Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-[#FFD500] text-slate-800 text-xs font-mono font-bold shadow-md">
            <AlertCircle className="w-4 h-4 text-[#FF8C00] shrink-0" />
            <span>NOTICE: All partners and brand marks listed below are <strong>SAMPLE / FICTIONAL ENTITIES</strong> designed for event demonstration.</span>
          </div>
        </div>

        {/* 3 Sponsor Cards styled as LEGO Plates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPONSORS_DATA.map((sponsor, idx) => (
            <div
              key={sponsor.name}
              className={`group relative rounded-3xl bg-white p-8 flex flex-col justify-between hover:border-[#FFD500] transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden border-4 ${sponsorBorderColors[idx % 3]}`}
            >
              {/* Top Studs */}
              <div className="absolute top-2 left-6">
                <LegoStudRow count={4} color={sponsorStudColors[idx % 3]} size="xs" />
              </div>

              <div className="pt-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded bg-[#FFF8E7] border border-[#E8DCC4] text-[#E53935]">
                    {sponsor.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#006CB7] uppercase tracking-wider font-black">
                    FICTIONAL PARTNER
                  </span>
                </div>

                {/* Original Distinctive Text-Based Logo Placeholder */}
                <div className="h-28 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] flex flex-col items-center justify-center p-4 mb-6 group-hover:border-[#FFD500] transition-all shadow-inner">
                  <div className="font-display font-black text-2xl tracking-wider text-[#252525] group-hover:text-[#006CB7] transition-colors">
                    {sponsor.logoText}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 mt-1 font-bold">
                    {sponsor.logoSub}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-black font-display text-[#252525] mb-1">
                  {sponsor.name}
                </h3>
                <p className="text-xs font-mono font-black text-[#006CB7] mb-4">
                  {sponsor.role}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {sponsor.description}
                </p>
              </div>

              {/* Verified demo tag */}
              <div className="mt-8 pt-4 border-t-2 border-[#E8DCC4] flex items-center justify-between text-[11px] font-mono text-slate-600 font-bold">
                <span>Campus Supporter</span>
                <span className="text-[#E53935] font-black">Demo Brand</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
