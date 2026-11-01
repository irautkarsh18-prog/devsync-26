import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';
import { OFFICIAL_CONTACT } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStud } from './LegoElements';

export default function Footer() {
  const quickLinks = [
    { name: 'About Experience', href: '/#about', id: 'about' },
    { name: 'Organised by GDG', href: '/#organiser', id: 'organiser' },
    { name: 'Technical Tracks', href: '/#tracks', id: 'tracks' },
    { name: 'Event Schedule', href: '/#schedule', id: 'schedule' },
    { name: 'Prizes & Perks', href: '/#prizes', id: 'prizes' },
    { name: 'Campus Logistics', href: '/#venue', id: 'venue' },
    { name: 'Registration (MMMUT & Outside)', href: '/#register', id: 'register' },
    { name: 'Frequently Asked Questions', href: '/#faq', id: 'faq' },
    { name: 'Contact & Connect', href: '/#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const target = document.getElementById(link.id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <footer className="relative bg-[#F5EBD2] border-t-4 border-[#E8DCC4] text-[#252525] font-sans pt-16 pb-12 overflow-hidden">
      
      {/* 4-Color Interlocking LEGO Brick Top Border */}
      <div className="absolute top-0 inset-x-0">
        <LegoGoogleBrickBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b-2 border-[#E8DCC4]">
          
          {/* Col 1: Identity & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#E8DCC4] flex flex-col items-center justify-center p-1.5 shadow-[0_3px_0_#D5C7AB] shrink-0">
                <div className="grid grid-cols-2 gap-1.5 w-full h-full p-0.5">
                  <div className="rounded-full bg-[#006CB7] flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                  <div className="rounded-full bg-[#E53935] flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                  <div className="rounded-full bg-[#FFD500] flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  </div>
                  <div className="rounded-full bg-[#00852B] flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                </div>
              </div>
              <div>
                <span className="font-display font-black text-xl text-[#252525] tracking-tight">
                  DevSync <span className="text-[#006CB7] font-mono">'26</span>
                </span>
                <div className="text-[11px] font-mono text-[#00852B] flex items-center gap-1 font-black">
                  <span>Organised by GDG MMMUT</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-sm font-medium">
              An exclusive in-person developer conference organised by <strong>Google Developer Groups MMMUT</strong> at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. Open to MMMUT students and outside college builders.
            </p>

            <div className="space-y-1 text-xs font-mono text-slate-700 pt-1 font-bold">
              <div className="flex items-center gap-2 text-[#E53935]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Seminar Hall Complex, MMMUT Gorakhpur, UP</span>
              </div>
              <div className="text-slate-600">
                100% In-Person • 150 Combined Seating Cap
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about-gdg"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-[#006CB7] hover:underline transition-colors"
              >
                <span>Read more about GDG MMMUT</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>

          {/* Col 2: Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#252525] font-black flex items-center gap-2">
              <LegoStud color="blue" size="xs" />
              <span>Event Navigation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-bold">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="text-slate-700 hover:text-[#006CB7] transition-colors py-1 truncate"
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/about-gdg"
                className="text-[#E53935] hover:underline transition-colors py-1 font-black truncate flex items-center gap-1"
              >
                <span>About GDG MMMUT</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 3: Official Contact & Social Media Profiles (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#252525] font-black flex items-center gap-2">
              <LegoStud color="yellow" size="xs" />
              <span>Official Contact & Socials</span>
            </div>

            {/* Clickable Email */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block font-black">
                Official Contact Email:
              </span>
              <a
                href={OFFICIAL_CONTACT.emailMailto}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#E53935] hover:underline transition-colors break-all font-bold"
                title="Compose an email to DevSync '26"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{OFFICIAL_CONTACT.email}</span>
              </a>
            </div>

            {/* Official Instagram */}
            <div className="pt-1 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block font-black">
                Official Instagram:
              </span>
              <a
                href={OFFICIAL_CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FFD500]/20 text-[#A06C00] border-2 border-[#FFD500] text-xs font-mono font-bold transition-colors shadow-sm"
                title="Follow us on Instagram (@devsync2026)"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{OFFICIAL_CONTACT.instagram.label} ({OFFICIAL_CONTACT.instagram.handle})</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Profiles */}
            <div className="pt-1 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block font-black">
                LinkedIn Profiles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {OFFICIAL_CONTACT.linkedin.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#006CB7]/10 border-2 border-[#006CB7]/30 text-slate-800 transition-colors shadow-sm"
                    title={`Connect with ${p.name} on LinkedIn`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <LinkedinIcon className="w-3.5 h-3.5 text-[#006CB7] shrink-0" />
                      <span className="truncate font-bold">{p.label}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* GDG Community Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 font-bold">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldAlert className="w-4 h-4 text-[#FF8C00] shrink-0" />
            <span>
              <strong>GDG MMMUT Campus Event:</strong> DevSync '26 is organised by Google Developer Groups MMMUT at Madan Mohan Malaviya University of Technology. Community initiative with free participation.
            </span>
          </div>

          <div className="text-slate-600 shrink-0">
            © 2026 DevSync '26 • GDG MMMUT. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
