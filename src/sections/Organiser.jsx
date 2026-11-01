import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Users, Lightbulb, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStud } from '../components/LegoElements';

export default function Organiser() {
  return (
    <section id="organiser" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] border-t-4 border-[#E8DCC4] overflow-hidden lego-baseplate-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-white border-2 border-[#E8DCC4] border-b-6 border-b-[#D5C7AB] p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden">
          
          {/* Top 4-Color LEGO Interlocking Brick Bar */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-3">
            
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#F5EBD2] border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] text-[#252525] shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#006CB7]" />
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#E53935]" />
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#FFD500]" />
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#00852B]" />
                <span className="font-bold text-[#252525] ml-1">OFFICIAL HOST CHAPTER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#252525] leading-tight">
                Organised by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006CB7] via-[#FF8C00] to-[#E53935]">
                  Google Developer Groups MMMUT
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                <strong>GDG MMMUT</strong> is the developer community chapter based at <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong>. We are a passionate, student-driven collective dedicated to cultivating practical software engineering capabilities, peer code reviews, open-source engagement, and cross-campus collaboration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC4] border-b-3 border-b-[#D5C7AB] space-y-1 shadow-sm">
                  <div className="text-xs font-mono text-[#006CB7] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#006CB7]" />
                    <span>Campus Rooted</span>
                  </div>
                  <div className="text-sm font-bold text-[#252525]">MMMUT Gorakhpur</div>
                  <div className="text-xs text-slate-600">Hub for university coders and regional engineering minds.</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF8E7] border-2 border-[#E8DCC4] border-b-3 border-b-[#D5C7AB] space-y-1 shadow-sm">
                  <div className="text-xs font-mono text-[#00852B] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00852B]" />
                    <span>Inclusive Access</span>
                  </div>
                  <div className="text-sm font-bold text-[#252525]">MMMUT + Outside Campuses</div>
                  <div className="text-xs text-slate-600">Welcoming delegates across institutions to DevSync '26.</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about-gdg"
                  className="lego-btn-blue inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-white shadow-md text-sm group uppercase tracking-wider"
                >
                  <span>About GDG MMMUT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#register"
                  className="lego-btn-yellow inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-[#252525] text-sm uppercase tracking-wider shadow-sm"
                >
                  <span>Reserve In-Person Seat</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Community Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#F5EBD2] border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] p-6 sm:p-8 space-y-6 shadow-md">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b-2 border-[#E8DCC4] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#E8DCC4] flex items-center justify-center font-mono font-black text-lg shadow-sm">
                      <span className="text-[#006CB7]">&lt;</span>
                      <span className="text-[#E53935]">&gt;</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#252525]">GDG MMMUT</div>
                      <div className="text-[11px] font-mono font-semibold text-slate-600">Gorakhpur Chapter</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#006CB7] text-white shadow-sm">
                    Official Organiser
                  </span>
                </div>

                {/* Core Community Values */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DCC4] text-[#006CB7] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#252525]">Hands-on Technical Depth</div>
                      <div className="text-xs text-slate-600">Architectural breakdowns, live debugging, and modern web/cloud engineering.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DCC4] text-[#00852B] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#252525]">Peer Mentorship & Code Reviews</div>
                      <div className="text-xs text-slate-600">Pair programming, alumni connections, and collaborative Git open-source initiatives.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DCC4] text-[#FF8C00] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#252525]">In-Person Campus Culture</div>
                      <div className="text-xs text-slate-600">Prioritizing physical interaction, lightning talks, and authentic campus networking.</div>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t-2 border-[#E8DCC4] flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#006CB7]" />
                    MMMUT Campus, Gorakhpur
                  </span>
                  <Link to="/about-gdg" className="text-[#006CB7] hover:underline flex items-center gap-1">
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
