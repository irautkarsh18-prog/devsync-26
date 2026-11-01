import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { GDG_COLORS } from '../data/eventData';

export default function Navbar({ onOpenPass, registeredUser }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about-gdg';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isAboutPage) {
        const sections = ['hero', 'about', 'organiser', 'tracks', 'schedule', 'prizes', 'sponsors', 'venue', 'register', 'faq'];
        const scrollPos = window.scrollY + 140;

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
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutPage]);

  const navLinks = [
    { name: 'Home', href: '/#hero', id: 'hero', isHash: true },
    { name: 'About', href: '/#about', id: 'about', isHash: true },
    { name: 'Tracks', href: '/#tracks', id: 'tracks', isHash: true },
    { name: 'Schedule', href: '/#schedule', id: 'schedule', isHash: true },
    { name: 'Registration', href: '/#register', id: 'register', isHash: true },
    { name: 'FAQ', href: '/#faq', id: 'faq', isHash: true },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isAboutPage) {
      navigate(link.href);
      setTimeout(() => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.getElementById(link.id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (link.id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-blue-950/20 py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & GDG MMMUT Subtitle */}
          <Link 
            to="/" 
            onClick={() => {
              if (!isAboutPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1 transition-transform"
            aria-label="DevSync '26 Homepage by GDG MMMUT"
          >
            {/* Custom SVG Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 p-[1.5px] shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 18 6-6-6-6" />
                  <path d="M8 6 2 12l6 6" />
                  <path d="m14 4-4 16" />
                </svg>
              </div>
              {/* Google quad-color pulse pip */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  DevSync <span className="text-blue-400 text-lg font-mono tracking-normal">'26</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  GDG MMMUT
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide font-sans flex items-center gap-1.5">
                <span>Google Developer Groups MMMUT</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-surface-lighter/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = !isAboutPage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
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

            {/* Dedicated "About GDG MMMUT" Page Link */}
            <Link
              to="/about-gdg"
              className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                isAboutPage
                  ? 'text-white bg-gradient-to-r from-blue-600/30 via-emerald-600/30 to-amber-600/30 border border-blue-500/40 text-blue-300'
                  : 'text-cyan-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
              <span>About GDG MMMUT</span>
            </Link>
          </nav>

          {/* Right CTA and Badges */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View My Pass (if registered) */}
            {registeredUser && (
              <button
                onClick={onOpenPass}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-sm"
                title="View your confirmed ticket pass"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Pass</span>
              </button>
            )}

            <a
              href="/#register"
              onClick={(e) => handleNavClick(e, { href: '/#register', id: 'register' })}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition-all duration-300 transform active:scale-95 border border-blue-400/30"
            >
              <span>Register CTA</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
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
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#090b10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-4">
            
            {/* Organiser Banner */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-r from-blue-950/40 via-surface-lighter to-slate-900 border border-blue-500/30 text-xs text-blue-200">
              <span className="flex h-2 w-2 rounded-full bg-[#4285F4]" />
              <span><strong>Organised by GDG MMMUT</strong> • MMMUT Gorakhpur</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    !isAboutPage && activeSection === link.id
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>

            {/* Dedicated Link in Mobile menu */}
            <Link
              to="/about-gdg"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between p-3.5 rounded-xl border font-semibold text-sm transition-colors ${
                isAboutPage
                  ? 'bg-blue-600/30 text-white border-blue-500'
                  : 'bg-white/5 border-white/10 text-cyan-300 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#4285F4]" />
                <span>About GDG MMMUT</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-2">
              <a
                href="/#register"
                onClick={(e) => handleNavClick(e, { href: '/#register', id: 'register' })}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/30"
              >
                <span>Reserve In-Person Seat (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
