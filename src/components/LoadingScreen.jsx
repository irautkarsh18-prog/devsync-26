import React, { useState, useEffect } from 'react';
import { LegoStud } from './LegoElements';

export default function LoadingScreen({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 400);
    }, 750);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090d] text-white transition-opacity duration-300 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Centered LEGO Assembly Animation */}
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated LEGO 2x2 Block Grid */}
        <div className="relative w-20 h-20 rounded-2xl bg-[#111522] border-2 border-white/20 border-b-4 border-b-black/80 p-2 shadow-2xl flex items-center justify-center animate-bounce">
          <div className="grid grid-cols-2 gap-2 w-full h-full p-1">
            <div className="rounded-lg bg-lego-blue border border-blue-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-inner" />
            </div>
            <div className="rounded-lg bg-lego-red border border-red-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-inner" />
            </div>
            <div className="rounded-lg bg-lego-yellow border border-amber-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/50 shadow-inner" />
            </div>
            <div className="rounded-lg bg-lego-green border border-emerald-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-inner" />
            </div>
          </div>
        </div>

        {/* Title & Chapter */}
        <div className="text-center space-y-1.5">
          <div className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center justify-center gap-2">
            <span>DevSync</span>
            <span className="text-lego-yellow font-mono">'26</span>
          </div>
          <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider flex items-center justify-center gap-1.5">
            <LegoStud color="yellow" size="xs" />
            <span>ORGANISED BY GDG MMMUT</span>
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-2 bg-[#121624] rounded-full overflow-hidden border border-white/10 p-0.5">
          <div className="h-full bg-gradient-to-r from-lego-blue via-lego-yellow to-lego-red rounded-full animate-pulse" style={{ width: '100%' }} />
        </div>

        <div className="text-[11px] font-mono text-slate-400 animate-pulse">
          Assembling developer bricks...
        </div>

      </div>
    </div>
  );
}

