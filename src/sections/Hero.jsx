import React from 'react';
import { Calendar, Users, MapPin, Ticket, ArrowRight, Sparkles, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';
import CountdownTimer from '../components/CountdownTimer';
import HeroVisual from '../components/HeroVisual';
import { FloatingLegoBrick, LegoStud } from '../components/LegoElements';

export default function Hero({ registeredCount, onRegisterClick, onScheduleClick }) {
  const seatsRemaining = Math.max(0, EVENT_DETAILS.capacity - registeredCount);
  const percentClaimed = Math.min(100, Math.round((registeredCount / EVENT_DETAILS.capacity) * 100));

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-center lego-baseplate-pattern"
    >
      {/* Background Ambience with LEGO Accent Tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-600/15 via-yellow-500/10 to-blue-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Background 3D LEGO Bricks */}
      <div className="absolute top-28 left-8 hidden lg:block opacity-75 pointer-events-none">
        <FloatingLegoBrick color="blue" size={60} rotation={-16} />
      </div>
      <div className="absolute top-44 right-12 hidden lg:block opacity-75 pointer-events-none">
        <FloatingLegoBrick color="green" size={54} rotation={22} />
      </div>
      <div className="absolute bottom-32 left-16 hidden lg:block opacity-60 pointer-events-none">
        <FloatingLegoBrick color="orange" size={48} rotation={12} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Badges Row styled as LEGO Building Bricks */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* ORGANISED BY GDG MMMUT BADGE with 4 LEGO Studs */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#141924] text-white border border-[#2b3548] border-b-2 border-b-[#0b0e15] shadow-md">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0055bf] shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              <span className="w-2 h-2 rounded-full bg-[#e3000b] shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              <span className="w-2 h-2 rounded-full bg-[#ffd500] shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              <span className="w-2 h-2 rounded-full bg-[#00852b] shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            </div>
            <span>ORGANISED BY GDG MMMUT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#0055bf]/15 text-[#3b8bff] border border-[#0055bf]/30 border-b-2 border-b-[#003882] shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#3b8bff]" />
            <span>NOVEMBER 28, 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#00852b]/15 text-[#22c55e] border border-[#00852b]/30 border-b-2 border-b-[#00521b] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>100% IN-PERSON</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#ffd500]/15 text-[#ffd500] border border-[#ffd500]/30 border-b-2 border-b-[#b89900] shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>LIMITED TO 150 SEATS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#e3000b]/15 text-[#ff5a62] border border-[#e3000b]/30 border-b-2 border-b-[#a80007] shadow-sm">
            <Ticket className="w-3.5 h-3.5 text-[#ff5a62]" />
            <span>FREE ENTRY</span>
          </div>
        </div>

        {/* Main Content Grid: Text + Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left / Top Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* 3D LEGO-Style DevSync '26 Title Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#111626] border-2 border-white/20 border-b-4 border-b-black/80 shadow-2xl">
                <div className="flex items-center gap-1.5">
                  <LegoStud color="blue" size="sm" />
                  <LegoStud color="red" size="sm" />
                </div>
                <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  DevSync <span className="text-lego-yellow font-mono">'26</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 border-l border-white/10 pl-2.5 hidden sm:inline">
                  OFFLINE DEV GATHERING
                </span>
                <div className="flex items-center gap-1.5">
                  <LegoStud color="yellow" size="sm" />
                  <LegoStud color="green" size="sm" />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141924] border border-[#2b3548] border-b-2 border-b-[#090d14] text-xs font-mono text-slate-300 font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ffd500] animate-pulse" />
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

            {/* Tactile 3D LEGO Brick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                onClick={onRegisterClick}
                className="lego-btn-red w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-extrabold text-white uppercase tracking-wider text-base"
              >
                <span>Reserve Your Seat</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#schedule"
                onClick={onScheduleClick}
                className="lego-btn-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-bold text-slate-200 uppercase tracking-wider text-base"
              >
                <span>Explore Schedule</span>
              </a>
            </div>

            {/* In-Person Venue & Combined Seat Availability Gauge styled as LEGO Brick Bar */}
            <div className="pt-4 max-w-md mx-auto lg:mx-0 p-4 rounded-2xl bg-[#111520] border border-[#2b3548] border-b-4 border-b-[#070910] shadow-xl space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-300 font-semibold flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#3b8bff] shrink-0" />
                  <span className="truncate">MMMUT Campus, Gorakhpur</span>
                </span>
                <span className="font-mono font-bold text-[#ffd500] shrink-0">
                  {seatsRemaining} Seats Left
                </span>
              </div>

              {/* Segmented LEGO Brick Gauge */}
              <div className="w-full h-3 bg-[#0a0d14] rounded-full overflow-hidden p-0.5 border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-[#0055bf] via-[#ffd500] to-[#e3000b] transition-all duration-500 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]"
                  style={{ width: `${percentClaimed}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>{registeredCount} / {EVENT_DETAILS.capacity} Claimed</span>
                <span className="text-[#3b8bff] font-semibold">Combined MMMUT + Outside Cap</span>
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
