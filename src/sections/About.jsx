import React from 'react';
import { BookOpen, Code2, Users, CheckCircle, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { EVENT_DETAILS, ABOUT_FEATURES, TARGET_AUDIENCE } from '../data/eventData';

export default function About() {
  const iconMap = {
    BookOpen: BookOpen,
    Code2: Code2,
    Users: Users
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>COMMUNITY IDENTITY & PURPOSE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            {EVENT_DETAILS.aboutHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            {EVENT_DETAILS.aboutDescription}
          </p>
        </div>

        {/* 3 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {ABOUT_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] || Code2;
            return (
              <div
                key={feature.number}
                className="group relative rounded-2xl bg-gradient-to-b from-surface-lighter/70 to-surface/90 border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-blue-900/20 flex flex-col justify-between"
              >
                {/* Top glow indicator */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-cyan-400 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-cyan-300 group-hover:bg-blue-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-blue-400/60 transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>IN-PERSON HUDDLE</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Interactive Section */}
        <div className="rounded-3xl bg-surface-lighter/40 border border-white/10 p-8 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
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
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface/90 border border-white/10 hover:border-blue-500/40 text-slate-200 text-sm font-medium transition-all group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                    <span>{audience.label}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-white/5">
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

