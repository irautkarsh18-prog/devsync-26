import React from 'react';
import { Calendar, Users, MapPin, Ticket, ArrowRight, Sparkles, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';
import CountdownTimer from '../components/CountdownTimer';
import HeroVisual from '../components/HeroVisual';
import { FloatingLegoBrick, LegoStud, LegoRobotGraphic, LegoCampusBuildingGraphic } from '../components/LegoElements';

export default function Hero({ registeredCount, onRegisterClick, onScheduleClick }) {
  const seatsRemaining = Math.max(0, EVENT_DETAILS.capacity - registeredCount);
  const percentClaimed = Math.min(100, Math.round((registeredCount / EVENT_DETAILS.capacity) * 100));

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-center bg-[#FFF8E7] text-[#252525] lego-baseplate-pattern"
    >
      {/* Background Ambience with Warm LEGO Accent Tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FFD500]/25 via-[#E53935]/15 to-[#006CB7]/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Floating Background 3D LEGO Bricks */}
      <div className="absolute top-28 left-8 hidden lg:block opacity-85 pointer-events-none">
        <FloatingLegoBrick color="blue" size={60} rotation={-16} />
      </div>
      <div className="absolute top-44 right-12 hidden lg:block opacity-85 pointer-events-none">
        <FloatingLegoBrick color="green" size={54} rotation={22} />
      </div>
      <div className="absolute bottom-32 left-12 hidden lg:block opacity-80 pointer-events-none">
        <FloatingLegoBrick color="orange" size={48} rotation={12} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Badges Row styled as LEGO Building Bricks */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* ORGANISED BY GDG MMMUT BADGE with 4 LEGO Studs */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#FFFFFF] text-[#252525] border-2 border-[#E8DCC4] border-b-3 border-b-[#D5C7AB] shadow-sm">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006CB7] shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD500] shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00852B] shadow-sm" />
            </div>
            <span>ORGANISED BY GDG MMMUT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#EBF5FB] text-[#006CB7] border-2 border-[#B9E2FE] border-b-3 border-b-[#006CB7] shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#006CB7]" />
            <span>NOVEMBER 28, 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#E8F8F0] text-[#00852B] border-2 border-[#B7E8CE] border-b-3 border-b-[#00852B] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00852B] animate-pulse" />
            <span>100% IN-PERSON</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#FFFDE7] text-[#8C6D00] border-2 border-[#FFF59D] border-b-3 border-b-[#C6A700] shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#C6A700]" />
            <span>LIMITED TO 150 SEATS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#FFEBEE] text-[#C62828] border-2 border-[#FFCDD2] border-b-3 border-b-[#E53935] shadow-sm">
            <Ticket className="w-3.5 h-3.5 text-[#E53935]" />
            <span>FREE ENTRY</span>
          </div>
        </div>

        {/* Main Content Grid: Text + Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left / Top Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* 3D LEGO-Style DevSync '26 Title Badge with Visible LEGO Robot Mascot 1 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] shadow-md">
                <div className="flex items-center gap-1.5">
                  <LegoStud color="blue" size="sm" />
                  <LegoStud color="red" size="sm" />
                </div>
                <span className="font-display font-extrabold text-xl sm:text-2xl text-[#252525] tracking-tight">
                  DevSync <span className="text-[#006CB7] font-mono">'26</span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 border-l border-slate-300 pl-2.5 hidden sm:inline">
                  OFFLINE DEV GATHERING
                </span>
                <div className="flex items-center gap-1.5">
                  <LegoStud color="yellow" size="sm" />
                  <LegoStud color="green" size="sm" />
                </div>
              </div>

              {/* VISIBLE LEGO ROBOT 1: Hero Waving Robot Mascot */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#FFF59D] border-2 border-[#FFD500] border-b-4 border-b-[#C6A700] shadow-sm animate-bounce">
                <LegoRobotGraphic pose="waving" size={44} />
                <span className="text-xs font-mono font-bold text-[#252525]">Hi, Builder!</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] text-xs font-mono text-slate-700 font-bold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-pulse" />
              <span>Madan Mohan Malaviya University of Technology, Gorakhpur</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-[#252525] leading-[1.08]">
              Where Developers <br className="hidden sm:inline" />
              <span className="gradient-text">Connect, Create</span> & <br className="hidden sm:inline" />
              <span className="gradient-text-blue">Collaborate.</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              {EVENT_DETAILS.heroSupportingText}
            </p>

            {/* Tactile 3D LEGO Brick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                onClick={onRegisterClick}
                className="lego-btn-red w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-extrabold text-white uppercase tracking-wider text-base shadow-lg"
              >
                <span>Reserve Your Seat</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#schedule"
                onClick={onScheduleClick}
                className="lego-btn-yellow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-bold text-[#252525] uppercase tracking-wider text-base shadow-md"
              >
                <span>Explore Schedule</span>
              </a>
            </div>

            {/* In-Person Venue & Combined Seat Availability Gauge styled as LEGO Brick Bar */}
            <div className="pt-4 max-w-md mx-auto lg:mx-0 p-4 rounded-2xl bg-white border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] shadow-md space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-700 font-bold flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#006CB7] shrink-0" />
                  <span className="truncate">MMMUT Campus, Gorakhpur</span>
                </span>
                <span className="font-mono font-extrabold text-[#E53935] shrink-0 bg-[#FFEBEE] px-2 py-0.5 rounded border border-[#FFCDD2]">
                  {seatsRemaining} Seats Left
                </span>
              </div>

              {/* Segmented LEGO Brick Gauge */}
              <div className="w-full h-3.5 bg-[#F5EBD2] rounded-full overflow-hidden p-0.5 border border-[#D8CCA8] shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-[#006CB7] via-[#FFD500] to-[#E53935] transition-all duration-500 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
                  style={{ width: `${percentClaimed}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-600 font-semibold">
                <span>{registeredCount} / {EVENT_DETAILS.capacity} Claimed</span>
                <span className="text-[#006CB7] font-bold">Combined MMMUT + Outside Cap</span>
              </div>
            </div>

          </div>

          {/* Right / Visual Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <HeroVisual />
            
            {/* MINIATURE LEGO CAMPUS BUILDING 1: Displayed visibly near Hero */}
            <div className="hidden sm:flex items-center gap-3 mt-6 p-3 rounded-2xl bg-white border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] shadow-md">
              <LegoCampusBuildingGraphic width={90} height={80} />
              <div className="text-left">
                <div className="text-xs font-mono uppercase font-bold text-[#006CB7]">
                  Venue Landmark
                </div>
                <div className="text-sm font-bold text-[#252525]">
                  MMMUT Seminar Hall
                </div>
                <div className="text-[11px] font-mono text-slate-600">
                  Built brick-by-brick for builders
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Countdown Timer Section */}
        <div className="mt-8 pt-8 border-t-2 border-[#E8DCC4]">
          <CountdownTimer />
        </div>

      </div>
    </section>
  );
}
