import React from 'react';
import { Mail, ArrowUpRight, MessageSquare, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { OFFICIAL_CONTACT, EVENT_DETAILS } from '../data/eventData';

export default function ContactConnect() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>OFFICIAL CHANNELS & PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Contact & Connect
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Have questions about DevSync '26 or looking to collaborate? Reach out to the organizing team through our official email and verified profiles.
          </p>
        </div>

        {/* 4 Groups Grid (Responsive: 1 col on mobile, 2 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* GROUP 1: Official Email */}
          <div className="group rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
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

            <div className="pt-4 border-t border-white/5 space-y-3">
              <a
                href={OFFICIAL_CONTACT.emailMailto}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d16] border border-white/10 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all group/email"
                title="Compose email to DevSync '26 organizers"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-white font-medium truncate group-hover/email:text-blue-300 transition-colors">
                    {OFFICIAL_CONTACT.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/email:text-blue-400 group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-500 text-center">
                Click to compose in your default email client
              </div>
            </div>
          </div>

          {/* GROUP 2: Official Instagram */}
          <div className="group rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-pink-300 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/20">
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

            <div className="pt-4 border-t border-white/5 space-y-3">
              <a
                href={OFFICIAL_CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d16] border border-white/10 hover:border-pink-500/40 hover:bg-pink-950/20 transition-all group/insta"
                title="Follow DevSync '26 on Instagram"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-white group-hover/insta:text-pink-300 transition-colors">
                      {OFFICIAL_CONTACT.instagram.label}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      {OFFICIAL_CONTACT.instagram.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/insta:text-pink-400 group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-500 text-center">
                Opens in a new browser tab
              </div>
            </div>
          </div>

          {/* GROUP 3: LinkedIn Profiles (Two Individual Links) */}
          <div className="group rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
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

            <div className="pt-4 border-t border-white/5 space-y-3">
              {OFFICIAL_CONTACT.linkedin.map((profile, i) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#090d16] border border-white/10 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all group/link"
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

          {/* GROUP 4: GitHub Profiles (Two Individual Links) */}
          <div className="group rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
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

            <div className="pt-4 border-t border-white/5 space-y-3">
              {OFFICIAL_CONTACT.github.map((profile, i) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#090d16] border border-white/10 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all group/git"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GithubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover/git:text-purple-300 transition-colors">
                        {profile.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate">
                        @{profile.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/git:text-purple-400 group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
