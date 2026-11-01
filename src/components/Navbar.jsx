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
        const sections = ['hero', 'about', 'organiser', 'tracks', 'schedule', 'prizes', 'sponsors', 'venue', 'register', 'faq', 'contact'];
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
    { name: 'Contact', href: '/#contact', id: 'contact', isHash: true },
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
          ? 'bg-[#0b0e14]/95 backdrop-blur-md border-b-2 border-[#1c2333] shadow-2xl py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top 4-Color LEGO Brick Interlocking Stripe */}
      {isScrolled && (
        <div className="absolute top-0 inset-x-0 h-1.5 flex">
          <div className="flex-1 bg-[#0055bf]" />
          <div className="flex-1 bg-[#e3000b]" />
          <div className="flex-1 bg-[#ffd500]" />
          <div className="flex-1 bg-[#00852b]" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & GDG MMMUT Subtitle with LEGO Brick Icon */}
          <Link 
            to="/" 
            onClick={() => {
              if (!isAboutPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl p-1 transition-transform"
            aria-label="DevSync '26 Homepage by GDG MMMUT"
          >
            {/* Custom 3D LEGO-style Stacked Brick Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#0e131d] border-2 border-[#2b3548] p-1 shadow-[0_4px_0_#070a10] group-hover:translate-y-[-1px] group-hover:shadow-[0_5px_0_#070a10] transition-all duration-200">
              <div className="grid grid-cols-2 gap-1 w-full h-full p-0.5">
                {/* 4 Colored LEGO Studs in Logo */}
                <div className="rounded-full bg-gradient-to-br from-[#3b8bff] to-[#0055bf] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
                <div className="rounded-full bg-gradient-to-br from-[#ff5a62] to-[#e3000b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
                <div className="rounded-full bg-gradient-to-br from-[#ffe566] to-[#ffd500] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                </div>
                <div className="rounded-full bg-gradient-to-br from-[#22c55e] to-[#00852b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#ffd500] transition-colors">
                  DevSync <span className="text-[#ffd500] text-lg font-mono tracking-normal">'26</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#e3000b] text-white border-b-2 border-[#990007] shadow-sm">
                  GDG MMMUT
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide font-sans flex items-center gap-1.5">
                <span>Google Developer Groups MMMUT</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#10141e]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = !isAboutPage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-white bg-white/15 shadow-sm font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#ffd500] shadow-[0_1px_2px_rgba(0,0,0,0.6)] shrink-0" />
                  )}
                  <span>{link.name}</span>
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

          {/* Right CTA and Badges with 3D Brick Depth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View My Pass (if registered) */}
            {registeredUser && (
              <button
                onClick={onOpenPass}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#00852b] text-white border-b-2 border-[#004d19] hover:brightness-110 active:translate-y-0.5 transition-all shadow-md"
                title="View your confirmed ticket pass"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Pass</span>
              </button>
            )}

            <a
              href="/#register"
              onClick={(e) => handleNavClick(e, { href: '/#register', id: 'register' })}
              className="lego-btn-red inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-display font-bold text-white uppercase tracking-wider"
            >
              <span>Reserve Seat</span>
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
                className="lego-btn-red w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-display font-bold text-white uppercase tracking-wider"
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
