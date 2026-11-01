import React, { useEffect } from 'react';
import { X, Sparkles, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { LegoGoogleBrickBar, LegoRobotGraphic, LegoBrickGraphic, LegoStud } from './LegoElements';

export default function WelcomeModal({ isOpen, onClose, onRegisterClick }) {
  // Prevent background scrolling while open & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#FFF8E7] border-4 border-[#FFD500] border-b-8 border-b-[#C6A700] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#252525] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top 4-Color Interlocking LEGO Brick Stripe */}
        <div className="absolute top-0 inset-x-0">
          <LegoGoogleBrickBar />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5EBD2] hover:bg-[#E8DCC4] text-[#252525] transition-colors border-2 border-[#D8CCA8] shadow-sm"
          aria-label="Close welcome modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Top Decorative Header with Small LEGO Robot */}
        <div className="mt-4 mb-4 flex items-center justify-between border-b-2 border-[#E8DCC4] pb-4">
          <div className="flex items-center gap-3">
            <LegoRobotGraphic pose="waving" size={64} />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFD500] text-[#252525] border border-[#C6A700] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E53935]" />
                <span>WELCOME!</span>
              </div>
              <div className="text-xs font-mono text-[#006CB7] font-bold mt-1">
                Organised by GDG MMMUT
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <LegoBrickGraphic color="red" width={48} height={36} />
          </div>
        </div>

        {/* Exact Content Required */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#252525] tracking-tight">
            Welcome to DevSync <span className="text-[#006CB7] font-mono">'26</span>!
          </h2>

          <p className="text-base sm:text-lg font-sans font-semibold text-[#252525] leading-relaxed">
            Build connections. Explore technology. Create something amazing!
          </p>

          <p className="text-sm font-sans text-slate-700 leading-relaxed bg-[#F5EBD2] p-3.5 rounded-xl border border-[#E8DCC4]">
            An exclusive in-person developer conference at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong> on <strong>November 28, 2026</strong>.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold text-slate-700">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#E8DCC4]">
              <LegoStud color="blue" size="xs" />
              <span>100% In-Person Venue</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#E8DCC4]">
              <LegoStud color="green" size="xs" />
              <span>Capped at 150 Seats</span>
            </div>
          </div>
        </div>

        {/* Stud-Inspired LET'S BUILD! Button */}
        <div className="mt-6 pt-4 border-t-2 border-[#E8DCC4] flex items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              if (onRegisterClick) onRegisterClick();
            }}
            className="lego-btn lego-btn-red w-full sm:w-auto px-8 py-3.5 text-sm font-display font-extrabold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <span>LET'S BUILD!</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
