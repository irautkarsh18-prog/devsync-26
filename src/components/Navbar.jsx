import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenPass, registeredUser }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'tracks', 'schedule', 'prizes', 'sponsors', 'venue', 'register'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tracks', href: '#tracks', id: 'tracks' },
    { name: 'Schedule', href: '#schedule', id: 'schedule' },
    { name: 'Prizes', href: '#prizes', id: 'prizes' },
    { name: 'Sponsors', href: '#sponsors', id: 'sponsors' },
    { name: 'Venue', href: '#venue', id: 'venue' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-blue-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1 transition-transform"
            aria-label="DevSync '26 Homepage"
          >
            {/* Custom SVG Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1.5px] shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 18 6-6-6-6" />
                  <path d="M8 6 2 12l6 6" />
                  <path d="m14 4-4 16" />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  DevSync <span className="text-blue-400 text-lg font-mono tracking-normal">'26</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Campus
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide font-sans">
                Developer Community Meet
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-lighter/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-white bg-white/10 shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA and Badges */}
          <div className="hidden sm:flex items-center gap-3">
            {registeredUser && (
              <button
                onClick={onOpenPass}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-sm shadow-emerald-950"
                title="View your confirmed ticket pass"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Pass</span>
              </button>
            )}

            <a
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition-all duration-300 transform active:scale-95 border border-blue-400/30"
            >
              <span>Register CTA</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            {registeredUser && (
              <button
                onClick={onOpenPass}
                className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
                aria-label="View Pass"
              >
                Pass
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#090b10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-4">
            
            {/* Event Format Alert */}
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong>100% In-Person:</strong> Seminar Hall Complex, Campus</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, '#register')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/30"
              >
                <span>Reserve Your Seat (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

