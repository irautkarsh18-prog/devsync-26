import React from 'react';
import { X, Download, Share2, CheckCircle, MapPin, Calendar, QrCode, Sparkles, User, Hash, Cpu, GraduationCap, Building2 } from 'lucide-react';
import { LegoGoogleBrickBar, LegoStud, LegoStudRow } from './LegoElements';

export default function TicketModal({ isOpen, onClose, attendee }) {
  if (!isOpen || !attendee) return null;

  const handlePrint = () => {
    window.print();
  };

  const isMmmut = attendee.category === 'MMMUT Student' || !attendee.collegeName;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-[#0e121e] border-2 border-white/20 border-b-6 border-b-black/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] overflow-y-auto">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-lego-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-lego-green/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors border border-white/10"
          aria-label="Close pass dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <LegoStud color="green" size="sm" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Registration Confirmed • LEGO In-Person Pass
          </span>
        </div>

        {/* Physical LEGO Collector Badge Layout */}
        <div className="relative bg-[#131726] border-2 border-white/15 border-b-4 border-b-black/60 rounded-2xl p-5 sm:p-6 shadow-inner overflow-hidden">
          
          {/* Top interlocking LEGO brick bar */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Lanyard punch hole & Stud Row aesthetic */}
          <div className="mt-3 mb-4 flex items-center justify-between">
            <div className="w-16 h-3 bg-[#080a11] border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-1 bg-white/30 rounded-full" />
            </div>
            <LegoStudRow count={4} color="blue" size="sm" />
          </div>

          {/* Badge Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xl font-extrabold font-display tracking-tight text-white flex items-center gap-2">
                DevSync <span className="text-lego-blue font-mono">'26</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 mt-0.5">
                <span className="font-bold text-emerald-400">GDG MMMUT</span>
                <span>•</span>
                <span>COLLECTOR PASS</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block font-semibold">SEAT ID</span>
              <span className="text-sm font-mono font-bold text-amber-300 px-2 py-0.5 rounded bg-black/40 border border-amber-500/30">
                {attendee.seatNumber || '#DS-0119'}
              </span>
            </div>
          </div>

          {/* Category Chip */}
          <div className="pt-3 pb-2 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wide border-2 ${
              isMmmut 
                ? 'bg-blue-950/60 text-blue-300 border-blue-500/50 shadow-sm' 
                : 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50 shadow-sm'
            }`}>
              {isMmmut ? <GraduationCap className="w-3.5 h-3.5 text-lego-blue" /> : <Building2 className="w-3.5 h-3.5 text-lego-green" />}
              <span>{attendee.category || 'MMMUT Student'}</span>
            </span>
            <span className="text-[10px] font-mono text-slate-300 px-2 py-1 rounded bg-black/30 border border-white/10">
              {attendee.foodPreference || 'Veg'}
            </span>
          </div>

          {/* Attendee Details */}
          <div className="py-3 space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Attendee Name</div>
              <div className="text-lg font-bold text-white tracking-wide">{attendee.fullName}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Roll / Student ID</div>
                <div className="text-sm font-mono text-slate-200">{attendee.rollNumber || attendee.mmmutRollNumber || attendee.universityRollNumber}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Institution</div>
                <div className="text-xs text-slate-200 truncate" title={attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}>
                  {attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Branch & Year</div>
              <div className="text-xs text-slate-300 truncate">
                {attendee.branchYear || attendee.branch}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Registered Track</div>
              <div className="text-xs font-bold text-blue-400 truncate" title={attendee.track}>
                {attendee.track}
              </div>
            </div>
          </div>

          {/* Venue & Date Footer */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-lego-blue shrink-0" />
              <span>Nov 28, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-lego-yellow shrink-0" />
              <span className="truncate">MMMUT Campus, Gorakhpur</span>
            </div>
          </div>

          {/* Barcode & Simulated QR representation */}
          <div className="mt-4 pt-3 border-t border-dashed border-white/20 flex items-center justify-between">
            <div className="space-y-1">
              {/* CSS Barcode simulation */}
              <div className="flex items-center gap-[2px] h-7 opacity-80">
                {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 1, 4, 2, 6, 3, 1, 4, 5, 2].map((height, i) => (
                  <div
                    key={i}
                    className="w-[2px] bg-slate-200"
                    style={{ height: `${height * 4 + 4}px` }}
                  />
                ))}
              </div>
              <div className="text-[9px] font-mono text-slate-400 tracking-widest">
                DS26-GDG-{attendee.rollNumber?.replace(/\W/g, '').toUpperCase() || 'PASS'}
              </div>
            </div>

            <div className="w-12 h-12 bg-white p-1 rounded-lg flex items-center justify-center shadow-md">
              <QrCode className="w-full h-full text-black" />
            </div>
          </div>

        </div>

        {/* Demo Disclaimer */}
        <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-300">
          <span className="font-bold text-blue-200">Demonstration Mode:</span> This pass is stored locally in your browser (LocalStorage). Present this screen or print it for entry at Seminar Hall Complex, MMMUT Gorakhpur on November 28, 2026.
        </div>

        {/* Action Buttons with LEGO tactile touch */}
        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="lego-btn lego-btn-dark flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-200"
          >
            <Download className="w-4 h-4" />
            <span>Print Pass</span>
          </button>
          <button
            onClick={onClose}
            className="lego-btn lego-btn-blue px-6 py-2.5 text-sm font-bold text-white shadow-lg"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
