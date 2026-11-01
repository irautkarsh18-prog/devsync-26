import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Users, Ticket } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStud, FloatingLegoBrick } from '../components/LegoElements';

export default function CTA({ onRegisterClick }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#08090d] lego-baseplate-pattern border-t-4 border-white/10 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-lego-blue/20 via-lego-red/20 to-lego-yellow/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Floating LEGO Bricks decorative */}
      <FloatingLegoBrick color="blue" size={38} className="top-12 left-[10%] hidden md:block" rotation={18} />
      <FloatingLegoBrick color="yellow" size={32} className="bottom-12 right-[8%] hidden md:block" rotation={-22} />
      <FloatingLegoBrick color="red" size={28} className="top-24 right-[14%] hidden lg:block" rotation={35} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#131726] via-[#10131e] to-[#0a0d16] border-2 border-white/15 border-b-6 border-b-black/80 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          
          {/* Top interlocking LEGO brick stripe */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#1b2030] text-amber-300 border border-white/10 shadow-md mb-6 mt-4">
            <LegoStud color="yellow" size="sm" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>FINAL SEAT RESERVATION WINDOW</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
            Don't Just Scroll Through Innovation. <br className="hidden sm:inline" />
            <span className="gradient-text">Be Part of It.</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans mb-10 leading-relaxed">
            Meet the builders. Exchange ideas. Discover what's next. See you at DevSync '26.
          </p>

          {/* Key Reminders styled as LEGO tactile plates */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono text-slate-300 mb-10">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0e17] border border-blue-500/30 border-b-2 border-b-blue-900/60 shadow-sm">
              <Calendar className="w-4 h-4 text-lego-blue" />
              <span>November 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0e17] border border-amber-500/30 border-b-2 border-b-amber-900/60 shadow-sm">
              <MapPin className="w-4 h-4 text-lego-yellow" />
              <span>100% In-Person Venue</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0e17] border border-emerald-500/30 border-b-2 border-b-emerald-900/60 shadow-sm">
              <Users className="w-4 h-4 text-lego-green" />
              <span>Capped at 150 Seats</span>
            </div>
          </div>

          {/* Action CTA with chunky 3D LEGO brick button */}
          <div>
            <a
              href="#register"
              onClick={onRegisterClick}
              className="lego-btn lego-btn-red inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-white text-base sm:text-lg shadow-2xl"
            >
              <span>Reserve Your Seat</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
