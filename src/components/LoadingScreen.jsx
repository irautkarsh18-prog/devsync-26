import React, { useState, useEffect } from 'react';
import { LegoRobotGraphic, LegoStud } from './LegoElements';

export default function LoadingScreen({ onFinish }) {
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Progress animation tracking initialization
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 120);

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 350);
    }, 750);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF8E7] lego-baseplate-pattern text-[#252525] transition-opacity duration-300 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 p-8 max-w-sm text-center">
        
        {/* Animated LEGO Robot Mascot */}
        <div className="animate-bounce">
          <LegoRobotGraphic pose="coding" size={88} />
        </div>

        {/* 4 Colored LEGO Bricks Assembling */}
        <div className="relative w-24 h-14 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] p-2 shadow-lg flex items-center justify-center">
          <div className="grid grid-cols-4 gap-1.5 w-full h-full">
            <div className="rounded-md bg-[#006CB7] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
            <div className="rounded-md bg-[#E53935] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
            <div className="rounded-md bg-[#FFD500] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
            <div className="rounded-md bg-[#00852B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
          </div>
        </div>

        {/* Exact Required Texts */}
        <div className="space-y-1.5">
          <h2 className="font-display font-extrabold text-2xl tracking-tight text-[#252525]">
            BUILDING SOMETHING AWESOME...
          </h2>
          <p className="text-sm font-sans font-medium text-slate-600">
            Getting DevSync '26 ready for you!
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-56 h-3 bg-[#F5EBD2] rounded-full overflow-hidden border-2 border-[#D8CCA8] p-0.5 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-[#006CB7] via-[#FFD500] to-[#E53935] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }} 
          />
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E53935]">
          <LegoStud color="red" size="xs" />
          <span>GDG MMMUT • OFFLINE DEVELOPER CONFERENCE</span>
        </div>

      </div>
    </div>
  );
}
