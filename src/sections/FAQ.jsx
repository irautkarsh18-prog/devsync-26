import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { FAQ_DATA, EVENT_DETAILS, OFFICIAL_CONTACT } from '../data/eventData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/10 via-red-500/5 to-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>COMMUNITY KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto">
            Everything you need to know about DevSync '26, organised by GDG MMMUT at Madan Mohan Malaviya University of Technology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isContactQuestion = item.q.toLowerCase().includes('contact');

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-surface-lighter/90 border-blue-500/40 shadow-xl shadow-blue-950/20'
                    : 'bg-surface-lighter/50 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white pr-4">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-blue-500/20 text-blue-400 rotate-180' : 'bg-white/5 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-300 font-sans leading-relaxed border-t border-white/5 animate-in fade-in duration-200 space-y-3">
                    {isContactQuestion ? (
                      <div>
                        <p>
                          You can contact the DevSync '26 organising team through{' '}
                          <a
                            href={OFFICIAL_CONTACT.emailMailto}
                            className="text-blue-400 hover:text-blue-300 font-mono font-semibold underline underline-offset-2 transition-colors"
                          >
                            {OFFICIAL_CONTACT.email}
                          </a>{' '}
                          or connect with us through our official social media profiles.
                        </p>

                        {/* Quick Interactive Social Badges */}
                        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                          <a
                            href={OFFICIAL_CONTACT.emailMailto}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-medium transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Compose Email</span>
                          </a>

                          <a
                            href={OFFICIAL_CONTACT.instagram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-mono font-medium transition-colors"
                          >
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>Instagram</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <a
                            href={OFFICIAL_CONTACT.linkedin[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono font-medium transition-colors"
                          >
                            <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <a
                            href={OFFICIAL_CONTACT.github[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono font-medium transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400 hover:text-cyan-300 ml-auto"
                          >
                            <span>View All Links</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p>{item.a}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-surface-lighter/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a specific question not listed here?</div>
              <div className="text-xs text-slate-400 font-mono">
                Email us directly at <a href={OFFICIAL_CONTACT.emailMailto} className="text-blue-400 hover:underline">{OFFICIAL_CONTACT.email}</a>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors whitespace-nowrap"
          >
            Contact & Connect Section
          </a>
        </div>

      </div>
    </section>
  );
}
