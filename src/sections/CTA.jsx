import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Users, Ticket } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export default function CTA({ onRegisterClick }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#111827] via-surface-lighter to-[#0a0d16] border border-blue-500/30 p-8 sm:p-14 text-center shadow-2xl shadow-blue-950/40 overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
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

          {/* Key Reminders */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>November 28, 2026</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>100% In-Person Venue</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Capped at 150 Seats</span>
            </div>
          </div>

          {/* Action CTA */}
          <div>
            <a
              href="#register"
              onClick={onRegisterClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base sm:text-lg"
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

