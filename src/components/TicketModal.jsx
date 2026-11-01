import React from 'react';
import { X, Download, MapPin, Calendar, QrCode, GraduationCap, Building2 } from 'lucide-react';
import { LegoGoogleBrickBar, LegoStud, LegoStudRow } from './LegoElements';

export default function TicketModal({ isOpen, onClose, attendee }) {
  if (!isOpen || !attendee) return null;

  const handlePrint = () => {
    window.print();
  };

  const isMmmut = attendee.category === 'MMMUT Student' || !attendee.collegeName;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-[#FFF8E7] border-4 border-[#006CB7] border-b-8 border-b-[#004A80] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-[#252525] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white hover:bg-[#F5EBD2] text-slate-700 hover:text-[#252525] transition-colors border-2 border-[#E8DCC4]"
          aria-label="Close pass dialog"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <LegoStud color="green" size="xs" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#00852B] font-black">
            Registration Confirmed • LEGO In-Person Pass
          </span>
        </div>

        {/* Physical LEGO Collector Badge Layout */}
        <div className="relative bg-white border-2 border-[#E8DCC4] border-b-4 border-b-[#D5C7AB] rounded-2xl p-5 sm:p-6 shadow-md overflow-hidden">
          
          {/* Top interlocking LEGO brick bar */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Lanyard punch hole & Stud Row aesthetic */}
          <div className="mt-3 mb-4 flex items-center justify-between">
            <div className="w-16 h-3 bg-[#F5EBD2] border-2 border-[#E8DCC4] rounded-full flex items-center justify-center">
              <div className="w-8 h-1 bg-[#D5C7AB] rounded-full" />
            </div>
            <LegoStudRow count={4} color="blue" size="xs" />
          </div>

          {/* Badge Header */}
          <div className="flex items-center justify-between border-b-2 border-[#E8DCC4] pb-4">
            <div>
              <div className="text-xl font-black font-display tracking-tight text-[#252525] flex items-center gap-2">
                DevSync <span className="text-[#006CB7] font-mono">'26</span>
              </div>
              <div className="text-[11px] font-mono text-slate-600 flex items-center gap-1.5 mt-0.5">
                <span className="font-black text-[#00852B]">GDG MMMUT</span>
                <span>•</span>
                <span className="font-bold">COLLECTOR PASS</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-500 block font-bold">SEAT ID</span>
              <span className="text-sm font-mono font-black text-[#006CB7] px-2 py-0.5 rounded bg-[#FFF8E7] border-2 border-[#006CB7]/40">
                {attendee.seatNumber || '#DS-0119'}
              </span>
            </div>
          </div>

          {/* Category Chip */}
          <div className="pt-3 pb-2 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-black uppercase tracking-wide border-2 ${
              isMmmut 
                ? 'bg-[#006CB7]/10 text-[#006CB7] border-[#006CB7]' 
                : 'bg-[#00852B]/10 text-[#00852B] border-[#00852B]'
            }`}>
              {isMmmut ? <GraduationCap className="w-3.5 h-3.5 text-[#006CB7]" /> : <Building2 className="w-3.5 h-3.5 text-[#00852B]" />}
              <span>{attendee.category || 'MMMUT Student'}</span>
            </span>
            <span className="text-[10px] font-mono font-bold text-slate-700 px-2.5 py-1 rounded bg-[#FFF8E7] border border-[#E8DCC4]">
              Diet: {attendee.foodPreference || 'Vegetarian'}
            </span>
          </div>

          {/* Attendee Details */}
          <div className="py-3 space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Attendee Name</div>
              <div className="text-lg font-black text-[#252525] tracking-wide">{attendee.fullName}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Roll / Student ID</div>
                <div className="text-sm font-mono font-black text-[#252525]">{attendee.rollNumber || attendee.mmmutRollNumber || attendee.universityRollNumber}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Institution</div>
                <div className="text-xs font-bold text-slate-700 truncate" title={attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}>
                  {attendee.institution || attendee.collegeName || 'MMMUT Gorakhpur'}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Branch & Year</div>
              <div className="text-xs font-bold text-slate-700 truncate">
                {attendee.branchYear || attendee.branch}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Registered Track</div>
              <div className="text-xs font-black text-[#006CB7] truncate" title={attendee.track}>
                {attendee.track}
              </div>
            </div>
          </div>

          {/* Venue & Date Footer */}
          <div className="pt-3 border-t-2 border-[#E8DCC4] grid grid-cols-2 gap-2 text-xs text-slate-700 font-bold">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#006CB7] shrink-0" />
              <span>Nov 28, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
              <span className="truncate">MMMUT Campus, Gorakhpur</span>
            </div>
          </div>

          {/* Barcode & Simulated QR representation */}
          <div className="mt-4 pt-3 border-t-2 border-dashed border-[#E8DCC4] flex items-center justify-between">
            <div className="space-y-1">
              {/* CSS Barcode simulation */}
              <div className="flex items-center gap-[2px] h-7 opacity-80">
                {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 1, 4, 2, 6, 3, 1, 4, 5, 2].map((height, i) => (
                  <div
                    key={i}
                    className="w-[2px] bg-[#252525]"
                    style={{ height: `${height * 4 + 4}px` }}
                  />
                ))}
              </div>
              <div className="text-[9px] font-mono text-slate-500 tracking-widest font-bold">
                DS26-GDG-{attendee.rollNumber?.replace(/\W/g, '').toUpperCase() || 'PASS'}
              </div>
            </div>

            <div className="w-12 h-12 bg-[#FFF8E7] p-1 rounded-lg flex items-center justify-center border-2 border-[#E8DCC4] shadow-sm">
              <QrCode className="w-full h-full text-[#252525]" />
            </div>
          </div>

        </div>

        {/* Demo Disclaimer */}
        <div className="mt-4 p-3 rounded-xl bg-white border-2 border-[#FFD500] text-xs text-slate-800">
          <span className="font-black text-[#252525]">Demonstration Mode:</span> This pass is stored locally in your browser (LocalStorage). Present this screen or print it for entry at Seminar Hall Complex, MMMUT Gorakhpur on November 28, 2026.
        </div>

        {/* Action Buttons with LEGO tactile touch */}
        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider bg-white border-2 border-[#E8DCC4] hover:bg-[#F5EBD2] text-[#252525] shadow-sm"
          >
            <Download className="w-4 h-4 text-[#006CB7]" />
            <span>Print Pass</span>
          </button>
          <button
            onClick={onClose}
            className="lego-btn-blue px-6 py-2.5 text-xs font-mono font-black uppercase tracking-wider text-white shadow-lg"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
