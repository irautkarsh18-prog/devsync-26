import React from 'react';
import { X, Download, Share2, CheckCircle, MapPin, Calendar, QrCode, Sparkles, User, Hash, Cpu, GraduationCap, Building2 } from 'lucide-react';

export default function TicketModal({ isOpen, onClose, attendee }) {
  if (!isOpen || !attendee) return null;

  const handlePrint = () => {
    window.print();
  };

  const isMmmut = attendee.category === 'MMMUT Student' || !attendee.collegeName;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-[#0c101d] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/60 overflow-hidden text-slate-100 max-h-[92vh] overflow-y-auto">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close pass dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
            <CheckCircle className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Registration Confirmed • In-Person Pass
          </span>
        </div>

        {/* Physical Badge Layout */}
        <div className="relative bg-gradient-to-b from-[#111827] to-[#0b0f19] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-inner overflow-hidden">
          
          {/* Lanyard punch hole aesthetic */}
          <div className="w-16 h-3 bg-[#090b10] border border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-1 bg-white/20 rounded-full" />
          </div>

          {/* Badge Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xl font-extrabold font-display tracking-tight text-white flex items-center gap-2">
                DevSync <span className="text-blue-400 font-mono">'26</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 mt-0.5">
                <span className="font-semibold text-emerald-400">GDG MMMUT</span>
                <span>•</span>
                <span>OFFLINE PASS</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block">SEAT ID</span>
              <span className="text-sm font-mono font-bold text-amber-300">
                {attendee.seatNumber || '#DS-0119'}
              </span>
            </div>
          </div>

          {/* Category Chip */}
          <div className="pt-3 pb-2 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wide border ${
              isMmmut 
                ? 'bg-blue-500/15 text-blue-300 border-blue-500/30' 
                : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
            }`}>
              {isMmmut ? <GraduationCap className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
              <span>{attendee.category || 'MMMUT Student'}</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {attendee.foodPreference || 'Veg'}
            </span>
          </div>

          {/* Attendee Details */}
          <div className="py-3 space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Attendee Name</div>
              <div className="text-lg font-bold text-white tracking-wide">{attendee.fullName}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Roll / Student ID</div>
                <div className="text-sm font-mono text-slate-200">{attendee.rollNumber || attendee.mmmutRollNumber || attendee.universityRollNumber}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Institution</div>
                <div className="text-xs text-slate-200 truncate" title={attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}>
                  {attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Branch & Year</div>
              <div className="text-xs text-slate-300 truncate">
                {attendee.branchYear || attendee.branch}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Registered Track</div>
              <div className="text-xs font-semibold text-blue-400 truncate" title={attendee.track}>
                {attendee.track}
              </div>
            </div>
          </div>

          {/* Venue & Date Footer */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Nov 28, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">MMMUT Campus, Gorakhpur</span>
            </div>
          </div>

          {/* Barcode & Simulated QR representation */}
          <div className="mt-4 pt-3 border-t border-dashed border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              {/* CSS Barcode simulation */}
              <div className="flex items-center gap-[2px] h-7 opacity-80">
                {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 1, 4, 2, 6, 3, 1, 4, 5, 2].map((height, i) => (
                  <div
                    key={i}
                    className="w-[2px] bg-slate-300"
                    style={{ height: `${height * 4 + 4}px` }}
                  />
                ))}
              </div>
              <div className="text-[9px] font-mono text-slate-500 tracking-widest">
                DS26-GDG-{attendee.rollNumber?.replace(/\W/g, '').toUpperCase() || 'PASS'}
              </div>
            </div>

            <div className="w-12 h-12 bg-white p-1 rounded flex items-center justify-center">
              <QrCode className="w-full h-full text-black" />
            </div>
          </div>

        </div>

        {/* Demo Disclaimer */}
        <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
          <span className="font-semibold text-blue-200">Demonstration Mode:</span> This pass is stored locally in your browser (LocalStorage). Present this screen or print it for entry at Seminar Hall Complex, MMMUT Gorakhpur on November 28, 2026.
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Print Pass</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
