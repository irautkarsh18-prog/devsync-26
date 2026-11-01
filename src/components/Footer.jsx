import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { EVENT_DETAILS, OFFICIAL_CONTACT } from '../data/eventData';
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
    <footer className="relative bg-[#06070b] border-t-4 border-white/10 text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      
      {/* 4-Color Interlocking LEGO Brick Top Border */}
      <div className="absolute top-0 inset-x-0">
        <LegoGoogleBrickBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e121e] border-2 border-lego-blue flex flex-col items-center justify-center p-1 shadow-md">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-lego-blue" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lego-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lego-yellow" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lego-green" />
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  DevSync <span className="text-lego-blue font-mono">'26</span>
                </span>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                  <span>Organised by GDG MMMUT</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An exclusive in-person developer conference organised by <strong>Google Developer Groups MMMUT</strong> at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. Open to MMMUT students and outside college builders.
            </p>

            <div className="space-y-1 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-2 text-lego-yellow">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Seminar Hall Complex, MMMUT Gorakhpur, UP</span>
              </div>
              <div className="text-slate-500">
                100% In-Person • 150 Combined Seating Cap
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about-gdg"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-lego-blue hover:text-blue-300 transition-colors"
              >
                <span>Read more about GDG MMMUT</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>

          {/* Col 2: Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
              <LegoStud color="blue" size="sm" />
              <span>Event Navigation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="hover:text-blue-400 transition-colors py-1 truncate"
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/about-gdg"
                className="text-amber-400 hover:text-amber-300 transition-colors py-1 font-semibold truncate flex items-center gap-1"
              >
                <span>About GDG MMMUT</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 3: Official Contact & Social Media Profiles (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
              <LegoStud color="yellow" size="sm" />
              <span>Official Contact & Socials</span>
            </div>

            {/* Clickable Email */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Official Contact Email:
              </span>
              <a
                href={OFFICIAL_CONTACT.emailMailto}
                className="inline-flex items-center gap-2 text-xs font-mono text-red-400 hover:text-red-300 hover:underline transition-colors break-all"
                title="Compose an email to DevSync '26"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{OFFICIAL_CONTACT.email}</span>
              </a>
            </div>

            {/* Official Instagram */}
            <div className="pt-1 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Official Instagram:
              </span>
              <a
                href={OFFICIAL_CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium transition-colors"
                title="Follow us on Instagram (@devsync2026)"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{OFFICIAL_CONTACT.instagram.label} ({OFFICIAL_CONTACT.instagram.handle})</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Profiles */}
            <div className="pt-1 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                LinkedIn Profiles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {OFFICIAL_CONTACT.linkedin.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-[#111420] hover:bg-[#161a29] border border-blue-500/20 text-slate-300 hover:text-white transition-colors"
                    title={`Connect with ${p.name} on LinkedIn`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{p.label}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 shrink-0 ml-1" />
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub Profiles */}
            <div className="pt-1 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                GitHub Profiles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {OFFICIAL_CONTACT.github.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-[#111420] hover:bg-[#161a29] border border-emerald-500/20 text-slate-300 hover:text-white transition-colors"
                    title={`View @${p.handle} on GitHub`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <GithubIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{p.label}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 shrink-0 ml-1" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* GDG Community Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-400/80 shrink-0" />
            <span>
              <strong>GDG MMMUT Campus Event:</strong> DevSync '26 is organised by Google Developer Groups MMMUT at Madan Mohan Malaviya University of Technology. Community initiative with free participation.
            </span>
          </div>

          <div className="text-slate-500 shrink-0">
            © 2026 DevSync '26 • GDG MMMUT. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
