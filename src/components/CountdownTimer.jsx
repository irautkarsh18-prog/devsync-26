import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle, ShieldAlert } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.registrationDeadline).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  if (timeLeft.isExpired) {
    return (
      <div className="w-full max-w-xl mx-auto p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center justify-center gap-3 backdrop-blur-md shadow-lg shadow-rose-950/20">
        <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0" />
        <div className="text-sm font-medium">
          <span className="font-semibold text-rose-200">Registration Closed:</span> The registration deadline (Nov 27, 2026, 11:59 PM IST) has passed or capacity has been reached.
        </div>
      </div>
    );
  }

  const units = [
    { 
      label: 'Days', 
      value: formatNumber(timeLeft.days),
      brickClass: 'bg-gradient-to-b from-[#ff4d55] to-[#e3000b] border-[#ff7077] border-b-4 border-b-[#8f0007] text-white shadow-[0_6px_14px_rgba(227,0,11,0.3)]',
      studColor: 'red',
      labelClass: 'text-white/80 font-bold'
    },
    { 
      label: 'Hours', 
      value: formatNumber(timeLeft.hours),
      brickClass: 'bg-gradient-to-b from-[#2b7fff] to-[#0055bf] border-[#4d94ff] border-b-4 border-b-[#003373] text-white shadow-[0_6px_14px_rgba(0,85,191,0.3)]',
      studColor: 'blue',
      labelClass: 'text-white/80 font-bold'
    },
    { 
      label: 'Minutes', 
      value: formatNumber(timeLeft.minutes),
      brickClass: 'bg-gradient-to-b from-[#ffe566] to-[#ffd500] border-[#ffeb80] border-b-4 border-b-[#a38200] text-[#11141c] shadow-[0_6px_14px_rgba(255,213,0,0.3)]',
      studColor: 'yellow',
      labelClass: 'text-black/80 font-bold'
    },
    { 
      label: 'Seconds', 
      value: formatNumber(timeLeft.seconds),
      brickClass: 'bg-gradient-to-b from-[#10b542] to-[#00852b] border-[#28c959] border-b-4 border-b-[#004d19] text-white shadow-[0_6px_14px_rgba(0,133,43,0.3)]',
      studColor: 'green',
      labelClass: 'text-white/80 font-bold'
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Sub-header info badge */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#252525] font-bold">
          <Clock className="w-3.5 h-3.5 text-[#E53935] animate-pulse" />
          <span>Registration Window Closes</span>
        </div>
        <div className="text-[11px] font-mono font-bold text-[#252525] bg-white px-2.5 py-1 rounded-md border-2 border-[#E8DCC4] border-b-2 border-b-[#D5C7AB] shadow-sm">
          Nov 27, 2026 • 11:59 PM IST
        </div>
      </div>

      {/* 4 Colored LEGO Brick Modules Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((unit) => (
          <div 
            key={unit.label}
            className={`group relative flex flex-col items-center justify-center pt-3 pb-3 sm:pb-4 rounded-xl sm:rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${unit.brickClass}`}
          >
            {/* Top 2 Studs */}
            <div className="flex items-center gap-2 mb-1.5 opacity-90">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.3)]" />
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.3)]" />
            </div>
            
            {/* Value */}
            <div className="font-mono font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none drop-shadow-md">
              {unit.value}
            </div>
            
            {/* Label */}
            <div className={`mt-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest ${unit.labelClass}`}>
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

