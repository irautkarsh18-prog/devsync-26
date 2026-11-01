import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { FAQ_DATA, OFFICIAL_CONTACT } from '../data/eventData';
import { LegoStud } from '../components/LegoElements';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const studColors = ['blue', 'yellow', 'red', 'green'];

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-pattern">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#006CB7] border-2 border-[#006CB7] mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#006CB7]" />
            <span>COMMUNITY KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-sans max-w-2xl mx-auto">
            Everything you need to know about DevSync '26, organised by GDG MMMUT at Madan Mohan Malaviya University of Technology.
          </p>
        </div>

        {/* FAQ Accordion List styled as LEGO Brick Containers */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isContactQuestion = item.q.toLowerCase().includes('contact');
            const color = studColors[idx % studColors.length];

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden shadow-md border-4 ${
                  isOpen
                    ? 'bg-white border-[#006CB7] border-b-8 border-b-[#004A80]'
                    : 'bg-white border-[#E8DCC4] border-b-6 border-b-[#D5C7AB] hover:border-[#FFD500]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <LegoStud color={color} size="sm" />
                    <span className="font-display font-black text-base sm:text-lg text-[#252525]">
                      {item.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FFD500] text-[#252525] rotate-180 font-bold shadow-md' : 'bg-[#FFF8E7] text-slate-500 border border-[#E8DCC4]'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-700 font-sans leading-relaxed border-t-2 border-[#E8DCC4] animate-in fade-in duration-200 space-y-3 bg-[#FFFDF5]">
                    {isContactQuestion ? (
                      <div>
                        <p>
                          You can contact the DevSync '26 organising team through{' '}
                          <a
                            href={OFFICIAL_CONTACT.emailMailto}
                            className="text-[#006CB7] hover:underline font-mono font-bold"
                          >
                            {OFFICIAL_CONTACT.email}
                          </a>{' '}
                          or connect with us through our official social media profiles.
                        </p>

                        {/* Quick Interactive Social Badges */}
                        <div className="mt-4 pt-3 border-t-2 border-[#E8DCC4] flex flex-wrap items-center gap-2">
                          <a
                            href={OFFICIAL_CONTACT.emailMailto}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E53935]/10 hover:bg-[#E53935]/20 text-[#E53935] border border-[#E53935]/30 text-xs font-mono font-bold transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Compose Email</span>
                          </a>

                          <a
                            href={OFFICIAL_CONTACT.instagram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFD500]/20 hover:bg-[#FFD500]/30 text-[#A06C00] border border-[#FFD500] text-xs font-mono font-bold transition-colors"
                          >
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>Instagram</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <a
                            href={OFFICIAL_CONTACT.linkedin[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#006CB7]/10 hover:bg-[#006CB7]/20 text-[#006CB7] border border-[#006CB7]/30 text-xs font-mono font-bold transition-colors"
                          >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-[#006CB7] hover:underline font-bold ml-auto"
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

        {/* Bottom Help Prompt styled as LEGO Plate */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border-4 border-[#E8DCC4] border-b-8 border-b-[#D5C7AB] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#006CB7]/15 border border-[#006CB7]/30 flex items-center justify-center text-[#006CB7] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-[#252525]">Have a specific question not listed here?</div>
              <div className="text-xs text-slate-600 font-mono mt-0.5 font-bold">
                Email us directly at <a href={OFFICIAL_CONTACT.emailMailto} className="text-[#006CB7] hover:underline">{OFFICIAL_CONTACT.email}</a>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="lego-btn-blue px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white uppercase tracking-wider whitespace-nowrap shadow-md"
          >
            Contact & Connect Section
          </a>
        </div>

      </div>
    </section>
  );
}
