import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, MapPin, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { LegoGoogleBrickBar, LegoRobotGraphic, LegoTrophyGraphic, LegoBrickGraphic, LegoStud } from './LegoElements';

export default function RegistrationThankYouModal({ isOpen, onClose, attendee, onViewPass }) {
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
        className="relative w-full max-w-lg bg-[#FFF8E7] border-4 border-[#00852B] border-b-8 border-b-[#00581C] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#252525] overflow-hidden"
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
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Robot & Trophy Celebration Header */}
        <div className="mt-4 mb-5 flex items-center justify-between border-b-2 border-[#E8DCC4] pb-4">
          <div className="flex items-center gap-3">
            <LegoRobotGraphic pose="celebrating" size={72} />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00852B] text-white shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>CONFIRMED REGISTRATION</span>
              </div>
              <div className="text-xs font-mono text-[#006CB7] font-bold mt-1">
                Seat ID: {attendee?.seatNumber || '#DS-0001'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LegoTrophyGraphic width={48} height={48} />
          </div>
        </div>

        {/* Exact Content Required */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#252525] tracking-tight">
            THANK YOU FOR REGISTERING!
          </h2>

          <p className="text-base sm:text-lg font-sans font-bold text-[#00852B]">
            You're officially part of DevSync '26!
          </p>

          <p className="text-sm font-sans text-slate-700 leading-relaxed">
            Get ready to connect, collaborate, and build something amazing with the developer community.
          </p>

          {/* Exact Required 4 Event Details */}
          <div className="p-4 rounded-2xl bg-[#F5EBD2] border-2 border-[#E8DCC4] space-y-2">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E53935]" />
              <span>November 28, 2026</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006CB7]" />
              <span>GDG MMMUT</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD500]" />
              <span>MMMUT, Gorakhpur</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00852B]" />
              <span>Offline event</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: AWESOME! & View Pass */}
        <div className="mt-6 pt-4 border-t-2 border-[#E8DCC4] flex flex-col sm:flex-row items-center justify-end gap-3">
          {onViewPass && (
            <button
              onClick={() => {
                onClose();
                onViewPass();
              }}
              className="lego-btn lego-btn-blue w-full sm:w-auto px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider shadow-sm"
            >
              <span>View Collector Pass</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="lego-btn lego-btn-green w-full sm:w-auto px-8 py-3.5 text-sm font-display font-extrabold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <span>AWESOME!</span>
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
