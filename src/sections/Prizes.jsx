import React from 'react';
import { Trophy, Award, Gift, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { PRIZES_DATA } from '../data/eventData';
import { LegoStudRow } from '../components/LegoElements';

export default function Prizes() {
  const prizeBrickStyles = [
    {
      cardClass: 'border-[#ffd500] border-b-4 border-b-[#a38200] shadow-[0_10px_30px_rgba(255,213,0,0.2)]',
      studColor: 'yellow',
      iconBox: 'bg-[#ffd500]/15 text-[#ffd500] border-[#ffd500]/30',
      badgeClass: 'bg-[#ffd500] text-black border-b border-[#a38200]',
    },
    {
      cardClass: 'border-[#0055bf] border-b-4 border-b-[#003373] shadow-[0_10px_30px_rgba(0,85,191,0.2)]',
      studColor: 'blue',
      iconBox: 'bg-[#0055bf]/15 text-[#3b8bff] border-[#0055bf]/30',
      badgeClass: 'bg-[#0055bf] text-white border-b border-[#003373]',
    },
    {
      cardClass: 'border-[#00852b] border-b-4 border-b-[#004d19] shadow-[0_10px_30px_rgba(0,133,43,0.2)]',
      studColor: 'green',
      iconBox: 'bg-[#00852b]/15 text-[#22c55e] border-[#00852b]/30',
      badgeClass: 'bg-[#00852b] text-white border-b border-[#004d19]',
    },
  ];

  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] lego-baseplate-pattern">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-black mb-4 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>RECOGNITION & PARTICIPATION MERIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Good Ideas Deserve Great Rewards.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
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
                className={`relative rounded-3xl bg-[#111520] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden ${style.cardClass}`}
              >
                {/* Top Studs Row */}
                <div className="absolute top-2 left-6">
                  <LegoStudRow count={4} color={style.studColor} size="xs" />
                </div>

                {/* Highlight Ribbon for top two */}
                {prize.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#ffd500] to-[#ff7e14] text-slate-950 shadow-md border border-[#ffe566]">
                    ★ {prize.badge}
                  </div>
                )}

                <div className="pt-3">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      {prize.category}
                    </div>
                    <div className={`p-3 rounded-2xl border ${style.iconBox}`}>
                      {idx === 0 ? <Trophy className="w-6 h-6" /> : idx === 1 ? <Award className="w-6 h-6" /> : <Gift className="w-6 h-6" />}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-[#ffd500] transition-colors">
                    {prize.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-8 leading-relaxed font-sans">
                    {prize.description}
                  </p>

                  {/* Reward Items List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Reward Package:
                    </div>
                    {prize.rewards.map((reward) => (
                      <div key={reward} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0055bf]/25 text-[#3b8bff] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-200">
                          {reward}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 font-semibold">
                  <span>Awarded In-Person</span>
                  <span className="text-[#ffd500] font-bold">Nov 28, 2026</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

