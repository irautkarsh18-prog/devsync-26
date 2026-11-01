import React from 'react';
import { Trophy, Award, Gift, Sparkles, Check } from 'lucide-react';
import { PRIZES_DATA } from '../data/eventData';
import { LegoStudRow, LegoTrophyGraphic } from '../components/LegoElements';

export default function Prizes() {
  const prizeBrickStyles = [
    {
      cardClass: 'border-[#FFD500] border-b-8 border-b-[#D4AF37] shadow-[0_8px_24px_rgba(255,213,0,0.25)]',
      studColor: 'yellow',
      iconBox: 'bg-[#FFD500]/20 text-[#A06C00] border-[#FFD500]',
      badgeClass: 'bg-[#FFD500] text-[#252525] border border-[#D4AF37]',
      accentBg: 'bg-[#FFFBEA]',
    },
    {
      cardClass: 'border-[#006CB7] border-b-8 border-b-[#004A80] shadow-[0_8px_24px_rgba(0,108,183,0.25)]',
      studColor: 'blue',
      iconBox: 'bg-[#006CB7]/15 text-[#006CB7] border-[#006CB7]',
      badgeClass: 'bg-[#006CB7] text-white border border-[#004A80]',
      accentBg: 'bg-[#F0F7FF]',
    },
    {
      cardClass: 'border-[#00852B] border-b-8 border-b-[#00551B] shadow-[0_8px_24px_rgba(0,133,43,0.25)]',
      studColor: 'green',
      iconBox: 'bg-[#00852B]/15 text-[#00852B] border-[#00852B]',
      badgeClass: 'bg-[#00852B] text-white border border-[#00551B]',
      accentBg: 'bg-[#F2FBF5]',
    },
  ];

  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#E53935] border-2 border-[#E53935] mb-4 shadow-sm">
            <Trophy className="w-4 h-4 text-[#FFD500]" />
            <span>RECOGNITION & PARTICIPATION MERIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-6">
            Good Ideas Deserve Great Rewards.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            From premier developer hardware and custom trophies to curated attendee kits, excellence and participation are recognized at DevSync '26.
          </p>
        </div>

        {/* Reward Cards Grid styled as LEGO Trophy & Reward Bricks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRIZES_DATA.map((prize, idx) => {
            const style = prizeBrickStyles[idx] || prizeBrickStyles[0];

            return (
              <div
                key={prize.id}
                className={`relative rounded-3xl bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden border-4 ${style.cardClass}`}
              >
                {/* Top Studs Row */}
                <div className="absolute top-2 left-6">
                  <LegoStudRow count={4} color={style.studColor} size="xs" />
                </div>

                {/* Highlight Ribbon for top two */}
                {prize.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-[#FFD500] to-[#FF8C00] text-[#252525] shadow-md border-2 border-[#D4AF37]">
                    ★ {prize.badge}
                  </div>
                )}

                <div className="pt-3">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-500">
                      {prize.category}
                    </div>
                    <div className={`p-2.5 rounded-2xl border-2 flex items-center justify-center ${style.iconBox}`}>
                      {idx === 0 ? <LegoTrophyGraphic width={36} height={36} /> : idx === 1 ? <Award className="w-6 h-6 text-[#006CB7]" /> : <Gift className="w-6 h-6 text-[#00852B]" />}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-display text-[#252525] mb-3">
                    {prize.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-8 leading-relaxed font-sans">
                    {prize.description}
                  </p>

                  {/* Reward Items List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Reward Package:
                    </div>
                    {prize.rewards.map((reward) => (
                      <div key={reward} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00852B]/15 text-[#00852B] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-[#00852B]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-[#252525]">
                          {reward}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t-2 border-[#E8DCC4] flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span>Awarded In-Person</span>
                  <span className="text-[#006CB7] font-black">Nov 28, 2026</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
