import React from 'react';
import { X, Sparkles, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { LegoGoogleBrickBar, LegoStud, LegoStudRow } from './LegoElements';

export default function WelcomeModal({ isOpen, onClose, onRegisterClick }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#0e121e] border-2 border-white/20 border-b-6 border-b-black/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden">
        
        {/* Top 4-Color Interlocking LEGO Brick Stripe */}
        <div className="absolute top-0 inset-x-0">
          <LegoGoogleBrickBar />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors border border-white/10"
          aria-label="Close welcome modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stud Header */}
        <div className="mt-4 mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#151a28] text-amber-300 border border-white/10">
            <LegoStud color="yellow" size="sm" />
            <span>WELCOME BUILDER</span>
          </div>
          <LegoStudRow count={4} color="blue" size="sm" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight">
            Welcome to DevSync <span className="text-lego-blue font-mono">'26</span>!
          </h2>

          <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
            <span>Organised by Google Developer Groups MMMUT</span>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Join us for an exclusive 100% in-person developer conference featuring live tech talks, interactive code-alongs, and hands-on networking.
          </p>

          {/* Quick Key Highlights */}
          <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#131726] border border-blue-500/20 border-b-2 border-b-blue-900/60">
              <Calendar className="w-4 h-4 text-lego-blue shrink-0" />
              <span>Nov 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#131726] border border-amber-500/20 border-b-2 border-b-amber-900/60">
              <MapPin className="w-4 h-4 text-lego-yellow shrink-0" />
              <span>MMMUT Gorakhpur</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#131726] border border-emerald-500/20 border-b-2 border-b-emerald-900/60">
              <Users className="w-4 h-4 text-lego-green shrink-0" />
              <span>Capped at 150 Seats</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#131726] border border-red-500/20 border-b-2 border-b-red-900/60">
              <Sparkles className="w-4 h-4 text-lego-red shrink-0" />
              <span>100% Free Entry</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="lego-btn lego-btn-dark px-4 py-2.5 text-xs font-bold text-slate-200 uppercase tracking-wider"
          >
            Explore Event
          </button>
          <button
            onClick={() => {
              onClose();
              if (onRegisterClick) onRegisterClick();
            }}
            className="lego-btn lego-btn-red px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 shadow-lg"
          >
            <span>Reserve Seat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

