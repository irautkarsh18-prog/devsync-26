import React from 'react';
import { Trophy, Award, Gift, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { PRIZES_DATA } from '../data/eventData';

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-violet-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>RECOGNITION & PARTICIPATION MERIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Good Ideas Deserve Great Rewards.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            From premier developer hardware and custom trophies to curated attendee kits, excellence and participation are recognized at DevSync '26.
          </p>
        </div>

        {/* Reward Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRIZES_DATA.map((prize, idx) => (
            <div
              key={prize.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl ${
                prize.highlight
                  ? 'bg-gradient-to-b from-surface-lighter/90 via-surface-lighter/60 to-surface/90 border-2 ' + prize.accentBorder + ' shadow-blue-950/30'
                  : 'bg-surface-lighter/40 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Highlight Ribbon for top two */}
              {prize.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md">
                  ★ {prize.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {prize.category}
                  </div>
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${prize.iconColor}`}>
                    {idx === 0 ? <Trophy className="w-6 h-6" /> : idx === 1 ? <Award className="w-6 h-6" /> : <Gift className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                  {prize.title}
                </h3>

                <p className="text-sm text-slate-300 mb-8 leading-relaxed font-sans">
                  {prize.description}
                </p>

                {/* Reward Items List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Reward Package:
                  </div>
                  {prize.rewards.map((reward) => (
                    <div key={reward} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {reward}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Awarded In-Person</span>
                <span className="text-cyan-400">Nov 28, 2026</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

