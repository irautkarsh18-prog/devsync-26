import React from 'react';
import { Calendar, Users, MapPin, Ticket, ArrowRight, Sparkles, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';
import CountdownTimer from '../components/CountdownTimer';
import HeroVisual from '../components/HeroVisual';

export default function Hero({ registeredCount, onRegisterClick, onScheduleClick }) {
  const seatsRemaining = Math.max(0, EVENT_DETAILS.capacity - registeredCount);
  const percentClaimed = Math.min(100, Math.round((registeredCount / EVENT_DETAILS.capacity) * 100));

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ambience & Grid Pattern */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Decorative gradient orbs with subtle Google accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-blue-600/15 via-emerald-600/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* ORGANISED BY GDG MMMUT BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-white border border-white/20 shadow-lg shadow-blue-950/40">
            <span className="flex h-2 w-2 rounded-full bg-[#4285F4]" />
            <span className="flex h-2 w-2 rounded-full bg-[#EA4335]" />
            <span className="flex h-2 w-2 rounded-full bg-[#FBBC05]" />
            <span className="flex h-2 w-2 rounded-full bg-[#34A853]" />
            <span>ORGANISED BY GDG MMMUT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/25">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>NOVEMBER 28, 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% IN-PERSON</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>LIMITED TO 150 SEATS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/25">
            <Ticket className="w-3.5 h-3.5 text-purple-400" />
            <span>FREE ENTRY</span>
          </div>
        </div>

        {/* Main Content Grid: Text + Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left / Top Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Madan Mohan Malaviya University of Technology, Gorakhpur</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
              Where Developers <br className="hidden sm:inline" />
              <span className="gradient-text">Connect, Create</span> & <br className="hidden sm:inline" />
              <span className="gradient-text-blue">Collaborate.</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {EVENT_DETAILS.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base"
              >
                <span>Reserve Your Seat</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#schedule"
                onClick={onScheduleClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-semibold text-slate-200 bg-surface-lighter/80 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-base"
              >
                <span>Explore Schedule</span>
              </a>
            </div>

            {/* In-Person Venue & Combined Seat Availability Gauge */}
            <div className="pt-4 max-w-md mx-auto lg:mx-0 p-3.5 rounded-xl bg-surface-lighter/50 border border-white/5 backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">MMMUT Campus, Gorakhpur</span>
                </span>
                <span className="font-mono font-bold text-cyan-300 shrink-0">
                  {seatsRemaining} Seats Left
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 transition-all duration-500 rounded-full"
                  style={{ width: `${percentClaimed}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>{registeredCount} / {EVENT_DETAILS.capacity} Claimed</span>
                <span>Combined MMMUT + Outside Cap</span>
              </div>
            </div>

          </div>

          {/* Right / Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>

        {/* Live Countdown Timer Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <CountdownTimer />
        </div>

      </div>
    </section>
  );
}
