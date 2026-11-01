import React from 'react';
import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { OFFICIAL_CONTACT } from '../data/eventData';
import { LegoStudRow, LegoStud } from '../components/LegoElements';

export default function ContactConnect() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F5EBD2] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-sand overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#E53935] border-2 border-[#E53935] mb-4 shadow-sm">
            <LegoStud color="red" size="xs" />
            <MessageSquare className="w-4 h-4 text-[#E53935]" />
            <span>OFFICIAL CHANNELS & PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-4">
            Contact & Connect
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            Have questions about DevSync '26 or looking to collaborate? Reach out to the organizing team through our official email and verified profiles.
          </p>
        </div>

        {/* 3 Groups Grid - Styled as Interlocking LEGO Bricks (Red, Yellow, Blue) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* GROUP 1: Official Email (Red Brick) */}
          <div className="group rounded-3xl bg-white border-4 border-[#E53935] border-b-8 border-b-[#B71C1C] p-7 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="red" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E53935]/15 border-2 border-[#E53935] flex items-center justify-center text-[#E53935] group-hover:scale-105 transition-transform shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E53935] bg-[#E53935]/10 px-2.5 py-1 rounded-md border border-[#E53935]/30 font-black mr-16">
                  Direct Inquiries
                </span>
              </div>

              <h3 className="text-xl font-black font-display text-[#252525] mb-2">
                Official Contact Email
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                For participant inquiries, campus logistics, sponsorship, or general queries regarding DevSync '26.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-[#E8DCC4] space-y-3">
              <a
                href={OFFICIAL_CONTACT.emailMailto}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8E7] border-2 border-[#E53935]/40 border-b-4 border-b-[#B71C1C] hover:bg-[#E53935]/10 active:translate-y-0.5 transition-all group/email"
                title="Compose email to DevSync '26 organizers"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#E53935] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#252525] font-black truncate group-hover/email:text-[#E53935] transition-colors">
                    {OFFICIAL_CONTACT.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/email:text-[#E53935] group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-500 font-bold text-center">
                Click to compose in your default email client
              </div>
            </div>
          </div>

          {/* GROUP 2: Official Instagram (Yellow Brick) */}
          <div className="group rounded-3xl bg-white border-4 border-[#FFD500] border-b-8 border-b-[#D4AF37] p-7 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="yellow" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FFD500]/20 border-2 border-[#FFD500] flex items-center justify-center text-[#A06C00] group-hover:scale-105 transition-transform shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A06C00] bg-[#FFD500]/20 px-2.5 py-1 rounded-md border border-[#FFD500] font-black mr-16">
                  Official Handle
                </span>
              </div>

              <h3 className="text-xl font-black font-display text-[#252525] mb-2">
                Official Instagram
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Follow real-time speaker reveals, campus announcements, event countdowns, and behind-the-scenes stories.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-[#E8DCC4] space-y-3">
              <a
                href={OFFICIAL_CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8E7] border-2 border-[#FFD500] border-b-4 border-b-[#D4AF37] hover:bg-[#FFD500]/15 active:translate-y-0.5 transition-all group/insta"
                title="Follow DevSync '26 on Instagram"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-[#A06C00] shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-black text-[#252525] group-hover/insta:text-[#A06C00] transition-colors">
                      {OFFICIAL_CONTACT.instagram.label}
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 font-bold">
                      {OFFICIAL_CONTACT.instagram.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/insta:text-[#A06C00] group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
              <div className="text-[11px] font-mono text-slate-500 font-bold text-center">
                Opens in a new browser tab
              </div>
            </div>
          </div>

          {/* GROUP 3: LinkedIn Profiles (Blue Brick) */}
          <div className="group rounded-3xl bg-white border-4 border-[#006CB7] border-b-8 border-b-[#004A80] p-7 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <LegoStudRow count={4} color="blue" size="sm" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006CB7]/15 border-2 border-[#006CB7] flex items-center justify-center text-[#006CB7] group-hover:scale-105 transition-transform shadow-sm">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#006CB7] bg-[#006CB7]/15 px-2.5 py-1 rounded-md border border-[#006CB7]/30 font-black mr-16">
                  Professional Network
                </span>
              </div>

              <h3 className="text-xl font-black font-display text-[#252525] mb-2">
                LinkedIn Profiles
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Connect directly with our organizing coordinators and community team members on LinkedIn.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-[#E8DCC4] space-y-3">
              {OFFICIAL_CONTACT.linkedin.map((profile) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FFF8E7] border-2 border-[#006CB7]/30 border-b-4 border-b-[#004A80] hover:bg-[#006CB7]/10 active:translate-y-0.5 transition-all group/link"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <LinkedinIcon className="w-4 h-4 text-[#006CB7] shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-black text-[#252525] group-hover/link:text-[#006CB7] transition-colors">
                        {profile.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 font-bold truncate">
                        {profile.name}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-[#006CB7] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
