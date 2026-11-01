import React from 'react';
import { Terminal, Mail, MapPin, Heart, ShieldAlert } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export default function Footer() {
  const quickLinks = [
    { name: 'About Experience', href: '#about' },
    { name: 'Technical Tracks', href: '#tracks' },
    { name: 'Event Schedule', href: '#schedule' },
    { name: 'Prizes & Perks', href: '#prizes' },
    { name: 'Sponsors & Community', href: '#sponsors' },
    { name: 'Campus Venue', href: '#venue' },
    { name: 'Reserve Seat', href: '#register' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#06080d] border-t border-white/10 text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Identity & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1.5px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 18 6-6-6-6" />
                    <path d="M8 6 2 12l6 6" />
                    <path d="m14 4-4 16" />
                  </svg>
                </div>
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                DevSync <span className="text-blue-400 font-mono">'26</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An exclusive in-person developer community gathering held on campus at the Seminar Hall Complex. Focused on practical engineering, peer code review, and genuine student networking.
            </p>

            <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>100% In-Person • Seminar Hall Complex</span>
            </div>

          </div>

          {/* Col 2: Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Event Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="hover:text-blue-400 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Community Channels
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@sample-devsync.internal</span>
              </div>
              <div className="text-[11px] text-slate-500 italic">
                (Sample email placeholder)
              </div>
            </div>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-2.5 pt-2">
              <span 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-default"
                title="GitHub Community (Sample Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <span 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-default"
                title="LinkedIn Community (Sample Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </span>
              <span 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-default"
                title="Instagram Community (Sample Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </span>
            </div>
          </div>

        </div>

        {/* Fictional Event Notice & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-400/80 shrink-0" />
            <span>
              <strong>Fictional Demonstration Event:</strong> DevSync '26 is created as a concept showcase. No real event sponsorship or ticket billing is processed.
            </span>
          </div>

          <div className="text-slate-500 shrink-0">
            © 2026 DevSync '26. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
