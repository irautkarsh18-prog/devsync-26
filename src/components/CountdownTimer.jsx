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
    { label: 'Days', value: formatNumber(timeLeft.days) },
    { label: 'Hours', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Sub-header info badge */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
          <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>Registration Window Closes</span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          Nov 27, 2026 • 11:59 PM IST
        </div>
      </div>

      {/* Counter Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((unit, index) => (
          <div 
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-lighter/80 backdrop-blur-md border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl shadow-black/40 overflow-hidden"
          >
            {/* Top ambient highlight line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:via-cyan-400 transition-colors" />
            
            {/* Value */}
            <div className="font-mono font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-200">
              {unit.value}
            </div>
            
            {/* Label */}
            <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-300">
              {unit.label}
            </div>

            {/* Subtle glow orb */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

