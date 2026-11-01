import React from 'react';
import { BookOpen, Code2, Users, CheckCircle, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { EVENT_DETAILS, ABOUT_FEATURES, TARGET_AUDIENCE } from '../data/eventData';
import { LegoStudRow, LegoStud, LegoInnovationLabGraphic } from '../components/LegoElements';

export default function About() {
  const iconMap = {
    BookOpen: BookOpen,
    Code2: Code2,
    Users: Users
  };

  const featureBrickStyles = [
    {
      cardBorder: 'border-[#006CB7] border-b-4 border-b-[#004B80] shadow-[0_8px_20px_rgba(0,108,183,0.15)]',
      studColor: 'blue',
      numColor: 'text-[#006CB7]',
      iconBg: 'bg-[#EBF5FB] text-[#006CB7] border-[#B9E2FE]',
    },
    {
      cardBorder: 'border-[#E53935] border-b-4 border-b-[#B71C1C] shadow-[0_8px_20px_rgba(229,57,53,0.15)]',
      studColor: 'red',
      numColor: 'text-[#E53935]',
      iconBg: 'bg-[#FFEBEE] text-[#E53935] border-[#FFCDD2]',
    },
    {
      cardBorder: 'border-[#00852B] border-b-4 border-b-[#00581C] shadow-[0_8px_20px_rgba(0,133,43,0.15)]',
      studColor: 'green',
      numColor: 'text-[#00852B]',
      iconBg: 'bg-[#E8F8F0] text-[#00852B] border-[#B7E8CE]',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F5EBD2] text-[#252525] border-t-4 border-[#E8DCC4] overflow-hidden lego-baseplate-sand">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-[#252525] border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#E53935]" />
            <span>COMMUNITY IDENTITY & PURPOSE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#252525] mb-6">
            {EVENT_DETAILS.aboutHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
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
                className={`group relative rounded-2xl bg-white border-2 p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-md flex flex-col justify-between overflow-hidden ${style.cardBorder}`}
              >
                {/* Top Row of Studs */}
                <div className="absolute top-2 left-6">
                  <LegoStudRow count={4} color={style.studColor} size="xs" />
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${style.iconBg}`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`font-mono text-3xl font-extrabold ${style.numColor}`}>
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#252525] mb-3 group-hover:text-[#006CB7] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                  <span>IN-PERSON HUDDLE</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#252525] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Interactive Section with MINIATURE LEGO STRUCTURE 2 */}
        <div className="rounded-3xl bg-white border-2 border-[#E8DCC4] border-b-6 border-b-[#D5C7AB] p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#006CB7] font-bold block">
                Who Is This For?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#252525]">
                Engineered for Campus Builders & Coders
              </h3>
              <p className="text-sm text-slate-600">
                Whether you just committed your first Git repo or maintain scalable microservices, DevSync '26 is curated to expand your technical horizons.
              </p>

              {/* MINIATURE LEGO INNOVATION LAB BUILDING 2 */}
              <div className="hidden sm:flex items-center gap-3 pt-3">
                <LegoInnovationLabGraphic width={90} height={80} />
                <div className="text-xs font-mono text-slate-600">
                  <span className="font-bold text-[#E53935] block">CAMPUS INNOVATION HUB</span>
                  Multi-tier brick-built coding lab
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {TARGET_AUDIENCE.map((audience) => (
                  <div
                    key={audience.label}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4] border-b-3 border-b-[#D5C7AB] hover:border-[#006CB7] text-[#252525] text-sm font-semibold transition-all group shadow-sm hover:translate-y-[-1px]"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD500] group-hover:scale-125 transition-transform shadow-sm" />
                    <span>{audience.label}</span>
                    <span className="text-[10px] font-mono text-slate-600 uppercase px-1.5 py-0.5 rounded bg-[#F5EBD2]">
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
