import React from 'react';
import { Mail, ArrowUpRight, MessageSquare, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { OFFICIAL_CONTACT, EVENT_DETAILS } from '../data/eventData';
import { LegoStudRow, LegoStud, LegoBrickGraphic } from '../components/LegoElements';

export default function ContactConnect() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#08090d] lego-baseplate-pattern border-t-4 border-white/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-red-600/10 to-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#141824] text-amber-300 border border-white/10 shadow-md mb-4">
            <LegoStud color="yellow" size="sm" />
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>OFFICIAL CHANNELS & PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Contact & Connect
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Have questions about DevSync '26 or looking to collaborate? Reach out to the organizing team through our official email and verified profiles.
          </p>
        </div>

        {/* 4 Groups Grid - Styled as 4 Interlocking LEGO Bricks (Red, Yellow, Blue, Green) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* GROUP 1: Official Email (Red Brick) */}
          <div className="group rounded-2xl bg-[#13151f] border border-red-500/30 border-b-4 border-b-red-600/70 p-7 flex flex-col justify-between hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="red" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-300 bg-red-500/15 px-2.5 py-1 rounded-md border border-red-500/30 font-semibold mr-16">
                  Direct Inquiries
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Official Contact Email
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                For participant inquiries, campus logistics, sponsorship, or general queries regarding DevSync '26.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={OFFICIAL_CONTACT.emailMailto}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#090b12] border border-red-500/20 border-b-2 border-b-red-900/60 hover:border-red-500/50 hover:bg-red-950/20 active:translate-y-0.5 transition-all group/email"
                title="Compose email to DevSync '26 organizers"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-white font-medium truncate group-hover/email:text-red-300 transition-colors">
                    {OFFICIAL_CONTACT.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/email:text-red-400 group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-400 text-center">
                Click to compose in your default email client
              </div>
            </div>
          </div>

          {/* GROUP 2: Official Instagram (Yellow Brick) */}
          <div className="group rounded-2xl bg-[#13151f] border border-amber-500/30 border-b-4 border-b-amber-500/70 p-7 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="yellow" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-inner">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md border border-amber-500/30 font-semibold mr-16">
                  Official Handle
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Official Instagram
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Follow real-time speaker reveals, campus announcements, event countdowns, and behind-the-scenes stories.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={OFFICIAL_CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#090b12] border border-amber-500/20 border-b-2 border-b-amber-900/60 hover:border-amber-500/50 hover:bg-amber-950/20 active:translate-y-0.5 transition-all group/insta"
                title="Follow DevSync '26 on Instagram"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-white group-hover/insta:text-amber-300 transition-colors">
                      {OFFICIAL_CONTACT.instagram.label}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      {OFFICIAL_CONTACT.instagram.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/insta:text-amber-400 group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-400 text-center">
                Opens in a new browser tab
              </div>
            </div>
          </div>

          {/* GROUP 3: LinkedIn Profiles (Blue Brick) */}
          <div className="group rounded-2xl bg-[#13151f] border border-blue-500/30 border-b-4 border-b-blue-600/70 p-7 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="blue" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shadow-inner">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-500/30 font-semibold mr-16">
                  Professional Network
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                LinkedIn Profiles
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Connect directly with our organizing coordinators and community team members on LinkedIn.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              {OFFICIAL_CONTACT.linkedin.map((profile, i) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#090b12] border border-blue-500/20 border-b-2 border-b-blue-900/60 hover:border-blue-500/50 hover:bg-blue-950/20 active:translate-y-0.5 transition-all group/link"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover/link:text-blue-300 transition-colors">
                        {profile.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate">
                        {profile.name}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

          {/* GROUP 4: GitHub Profiles (Green Brick) */}
          <div className="group rounded-2xl bg-[#13151f] border border-emerald-500/30 border-b-4 border-b-emerald-600/70 p-7 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="green" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-inner">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30 font-semibold mr-16">
                  Open Source
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                GitHub Profiles
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Explore individual developer contributions, open-source repositories, and code portfolios.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              {OFFICIAL_CONTACT.github.map((profile, i) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#090b12] border border-emerald-500/20 border-b-2 border-b-emerald-900/60 hover:border-emerald-500/50 hover:bg-emerald-950/20 active:translate-y-0.5 transition-all group/git"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GithubIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover/git:text-emerald-300 transition-colors">
                        {profile.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate">
                        @{profile.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/git:text-emerald-400 group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
