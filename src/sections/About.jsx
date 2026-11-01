import React from 'react';
import { BookOpen, Code2, Users, CheckCircle, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { EVENT_DETAILS, ABOUT_FEATURES, TARGET_AUDIENCE } from '../data/eventData';
import { LegoStudRow, LegoStud } from '../components/LegoElements';

export default function About() {
  const iconMap = {
    BookOpen: BookOpen,
    Code2: Code2,
    Users: Users
  };

  const featureBrickStyles = [
    {
      cardBorder: 'border-[#0055bf]/40 border-b-4 border-b-[#003882]',
      studColor: 'blue',
      numColor: 'text-[#3b8bff]',
      iconBg: 'bg-[#0055bf]/15 text-[#3b8bff] border-[#0055bf]/30',
    },
    {
      cardBorder: 'border-[#e3000b]/40 border-b-4 border-b-[#8f0007]',
      studColor: 'red',
      numColor: 'text-[#ff5a62]',
      iconBg: 'bg-[#e3000b]/15 text-[#ff5a62] border-[#e3000b]/30',
    },
    {
      cardBorder: 'border-[#00852b]/40 border-b-4 border-b-[#004d19]',
      studColor: 'green',
      numColor: 'text-[#22c55e]',
      iconBg: 'bg-[#00852b]/15 text-[#22c55e] border-[#00852b]/30',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] overflow-hidden lego-baseplate-pattern">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-[#090d14] mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>COMMUNITY IDENTITY & PURPOSE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            {EVENT_DETAILS.aboutHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            {EVENT_DETAILS.aboutDescription}
          </p>
        </div>

        {/* 3 Premium LEGO Brick Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {ABOUT_FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Code2;
            const style = featureBrickStyles[idx] || featureBrickStyles[0];

            return (
              <div
                key={feature.number}
                className={`group relative rounded-2xl bg-[#111520] border p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between overflow-hidden ${style.cardBorder}`}
              >
                {/* Top Row of 5 Studs */}
                <div className="absolute top-2 left-6">
                  <LegoStudRow count={4} color={style.studColor} size="xs" />
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${style.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`font-mono text-3xl font-extrabold ${style.numColor}`}>
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#ffd500] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 font-bold">
                  <span>IN-PERSON HUDDLE</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Interactive Section with LEGO Baseplate Styling */}
        <div className="rounded-3xl bg-[#111520] border-2 border-[#2b3548] border-b-4 border-b-[#070910] p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#ffd500] font-bold block">
                Who Is This For?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Engineered for Campus Builders & Coders
              </h3>
              <p className="text-sm text-slate-300">
                Whether you just committed your first Git repo or maintain scalable microservices, DevSync '26 is curated to expand your technical horizons.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {TARGET_AUDIENCE.map((audience, idx) => (
                  <div
                    key={audience.label}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#151b29] border border-[#2e394d] border-b-2 border-b-[#0c1018] hover:border-[#ffd500]/50 text-slate-200 text-sm font-semibold transition-all group shadow-sm hover:translate-y-[-1px]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffd500] group-hover:scale-125 transition-transform shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    <span>{audience.label}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase px-1.5 py-0.5 rounded bg-black/40">
                      {audience.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

