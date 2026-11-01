import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Users, Lightbulb, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';

export default function Organiser() {
  return (
    <section id="organiser" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5 overflow-hidden">
      
      {/* Google Colored Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0f1422] to-[#0a0d16] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Top Google Quad-color stripe */}
          <div className="absolute top-0 inset-x-0 h-1 flex">
            <div className="flex-1 bg-[#4285F4]" />
            <div className="flex-1 bg-[#EA4335]" />
            <div className="flex-1 bg-[#FBBC05]" />
            <div className="flex-1 bg-[#34A853]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-300">
                <span className="flex h-2 w-2 rounded-full bg-[#4285F4]" />
                <span className="flex h-2 w-2 rounded-full bg-[#EA4335]" />
                <span className="flex h-2 w-2 rounded-full bg-[#FBBC05]" />
                <span className="flex h-2 w-2 rounded-full bg-[#34A853]" />
                <span className="font-semibold text-white ml-1">OFFICIAL HOST CHAPTER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Organised by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-300">
                  Google Developer Groups MMMUT
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                <strong>GDG MMMUT</strong> is the developer community chapter based at <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong>. We are a passionate, student-driven collective dedicated to cultivating practical software engineering capabilities, peer code reviews, open-source engagement, and cross-campus collaboration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface/80 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-blue-400 uppercase font-semibold">Campus Rooted</div>
                  <div className="text-sm font-bold text-white">MMMUT Gorakhpur</div>
                  <div className="text-xs text-slate-400">Hub for university coders and regional engineering minds.</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface/80 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">Inclusive Access</div>
                  <div className="text-sm font-bold text-white">MMMUT + Outside Campuses</div>
                  <div className="text-xs text-slate-400">Welcoming delegates across institutions to DevSync '26.</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about-gdg"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all text-sm group"
                >
                  <span>About GDG MMMUT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-display font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm"
                >
                  <span>Reserve In-Person Seat</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Community Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#080c14] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    {/* Multi-color GDG brackets */}
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-black text-lg">
                      <span className="text-[#4285F4]">&lt;</span>
                      <span className="text-[#EA4335]">&gt;</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">GDG MMMUT</div>
                      <div className="text-[11px] font-mono text-slate-400">Gorakhpur Chapter</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Official Organiser
                  </span>
                </div>

                {/* Core Community Values */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Hands-on Technical Depth</div>
                      <div className="text-xs text-slate-400">Architectural breakdowns, live debugging, and modern web/cloud engineering.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Peer Mentorship & Code Reviews</div>
                      <div className="text-xs text-slate-400">Pair programming, alumni connections, and collaborative Git open-source initiatives.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">In-Person Campus Culture</div>
                      <div className="text-xs text-slate-400">Prioritizing physical interaction, lightning talks, and authentic campus networking.</div>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    MMMUT Campus, Gorakhpur
                  </span>
                  <Link to="/about-gdg" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    <span>Chapter Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
