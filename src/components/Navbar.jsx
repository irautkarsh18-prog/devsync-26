import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
          ? 'bg-[#FFF8E7]/95 backdrop-blur-md border-b-4 border-[#E8DCC4] shadow-md py-2.5' 
          : 'bg-[#FFF8E7]/80 backdrop-blur-sm py-4 border-b border-[#E8DCC4]/50'
      }`}
    >
      {/* Top 4-Color LEGO Brick Interlocking Stripe */}
      <div className="absolute top-0 inset-x-0 h-1.5 flex">
        <div className="flex-1 bg-[#006CB7]" />
        <div className="flex-1 bg-[#E53935]" />
        <div className="flex-1 bg-[#FFD500]" />
        <div className="flex-1 bg-[#00852B]" />
      </div>

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
            className="group flex items-center gap-3 focus:outline-none rounded-xl p-1 transition-transform"
            aria-label="DevSync '26 Homepage by GDG MMMUT"
          >
            {/* Custom 3D LEGO-style Stacked Brick Logo (Enlarged 25%) */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white border-2 border-[#E8DCC4] p-1.5 shadow-[0_4px_0_#D5C7AB] group-hover:translate-y-[-1px] transition-all duration-200 shrink-0">
              <div className="grid grid-cols-2 gap-1.5 w-full h-full p-0.5">
                {/* 4 Colored LEGO Studs in Logo */}
                <div className="rounded-full bg-[#006CB7] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
                <div className="rounded-full bg-[#E53935] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
                <div className="rounded-full bg-[#FFD500] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>
                <div className="rounded-full bg-[#00852B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl tracking-tight text-[#252525] group-hover:text-[#006CB7] transition-colors">
                  DevSync <span className="text-[#E53935] text-lg font-mono tracking-normal">'26</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-black bg-[#E53935] text-white shadow-sm">
                  GDG MMMUT
                </span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 tracking-wide font-sans flex items-center gap-1.5">
                <span>Google Developer Groups MMMUT</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border-2 border-[#E8DCC4] shadow-sm">
            {navLinks.map((link) => {
              const isActive = !isAboutPage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold font-mono uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#006CB7] bg-[#F5EBD2] shadow-sm font-black' 
                      : 'text-slate-700 hover:text-[#006CB7] hover:bg-[#FFF8E7]'
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#FFD500] border border-[#D4AF37] shrink-0" />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}

            {/* Dedicated "About GDG MMMUT" Page Link */}
            <Link
              to="/about-gdg"
              className={`relative px-3.5 py-1.5 text-xs font-black font-mono uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                isAboutPage
                  ? 'text-white bg-[#006CB7] shadow-sm'
                  : 'text-[#006CB7] hover:bg-[#F5EBD2]'
              }`}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#E53935]" />
              <span>About GDG MMMUT</span>
            </Link>
          </nav>

          {/* Right CTA and Badges with 3D Brick Depth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View My Pass (if registered) */}
            {registeredUser && (
              <button
                onClick={onOpenPass}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black bg-[#00852B] text-white border-b-4 border-[#00551B] hover:brightness-110 active:translate-y-0.5 transition-all shadow-md"
                title="View your confirmed ticket pass"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Pass</span>
              </button>
            )}

            <a
              href="/#register"
              onClick={(e) => handleNavClick(e, { href: '/#register', id: 'register' })}
              className="lego-btn-red inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-black text-white uppercase tracking-wider shadow-md"
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
                className="p-2 rounded-lg bg-[#00852B] text-white font-black text-xs shadow-sm"
                aria-label="View Pass"
              >
                Pass
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border-2 border-[#E8DCC4] text-[#252525] hover:bg-[#F5EBD2] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#FFF8E7]/98 backdrop-blur-xl border-b-4 border-[#E8DCC4] shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-4">
            
            {/* Organiser Banner */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border-2 border-[#006CB7] text-xs text-[#006CB7] font-bold">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#E53935]" />
              <span><strong>Organised by GDG MMMUT</strong> • MMMUT Gorakhpur</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                    !isAboutPage && activeSection === link.id
                      ? 'bg-[#006CB7] text-white'
                      : 'bg-white text-slate-700 border-2 border-[#E8DCC4] hover:bg-[#F5EBD2]'
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
              className={`flex items-center justify-between p-3.5 rounded-xl border-2 font-black text-xs font-mono uppercase tracking-wider transition-colors ${
                isAboutPage
                  ? 'bg-[#006CB7] text-white border-[#006CB7]'
                  : 'bg-white border-[#E8DCC4] text-[#006CB7] hover:bg-[#F5EBD2]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#E53935]" />
                <span>About GDG MMMUT</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-2">
              <a
                href="/#register"
                onClick={(e) => handleNavClick(e, { href: '/#register', id: 'register' })}
                className="lego-btn-red w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-display font-black text-white uppercase tracking-wider"
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
