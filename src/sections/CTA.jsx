import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Users } from 'lucide-react';
import { LegoGoogleBrickBar, LegoStud, FloatingLegoBrick } from '../components/LegoElements';

export default function CTA({ onRegisterClick }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] lego-baseplate-pattern border-t-4 border-[#E8DCC4] overflow-hidden">
      
      {/* Floating LEGO Bricks decorative */}
      <FloatingLegoBrick color="blue" size={38} className="top-12 left-[10%] hidden md:block" rotation={18} />
      <FloatingLegoBrick color="yellow" size={32} className="bottom-12 right-[8%] hidden md:block" rotation={-22} />
      <FloatingLegoBrick color="red" size={28} className="top-24 right-[14%] hidden lg:block" rotation={35} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-white border-4 border-[#E53935] border-b-8 border-b-[#B71C1C] p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          
          {/* Top interlocking LEGO brick stripe */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-[#FFF8E7] text-[#E53935] border-2 border-[#E53935] shadow-sm mb-6 mt-4">
            <LegoStud color="yellow" size="xs" />
            <Sparkles className="w-4 h-4 text-[#FF8C00]" />
            <span>FINAL SEAT RESERVATION WINDOW</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#252525] mb-6 leading-tight">
            Don't Just Scroll Through Innovation. <br className="hidden sm:inline" />
            <span className="text-[#006CB7]">Be Part of It.</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-sans mb-10 leading-relaxed font-medium">
            Meet the builders. Exchange ideas. Discover what's next. See you at DevSync '26.
          </p>

          {/* Key Reminders styled as LEGO tactile plates */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono text-[#252525] mb-10 font-bold">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8E7] border-2 border-[#006CB7] shadow-sm">
              <Calendar className="w-4 h-4 text-[#006CB7]" />
              <span>November 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8E7] border-2 border-[#FFD500] shadow-sm">
              <MapPin className="w-4 h-4 text-[#A06C00]" />
              <span>100% In-Person Venue</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8E7] border-2 border-[#00852B] shadow-sm">
              <Users className="w-4 h-4 text-[#00852B]" />
              <span>Capped at 150 Seats</span>
            </div>
          </div>

          {/* Action CTA with chunky 3D LEGO brick button */}
          <div>
            <a
              href="#register"
              onClick={onRegisterClick}
              className="lego-btn lego-btn-red inline-flex items-center gap-3 px-9 py-4 font-display font-black text-white text-base sm:text-lg shadow-2xl"
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
