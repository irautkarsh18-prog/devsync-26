import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code2, Users, BookOpen, GitBranch, Cpu, Sparkles, MapPin, Calendar, CheckCircle2, Terminal, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';

export default function AboutGDG() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About GDG MMMUT — DevSync '26 Official Organiser";
  }, []);

  const pillars = [
    {
      title: "Interactive Learning & Technical Talks",
      description: "Hands-on workshops, masterclasses, and code-alongs on modern web technologies, cloud architectures, systems engineering, and developer tooling.",
      icon: BookOpen,
      color: "text-[#4285F4]",
      border: "hover:border-[#4285F4]/40"
    },
    {
      title: "Collaborative Building & Live Debugging",
      description: "Peer-driven coding circles where students tackle real-world problems, break down scalable codebases, and learn debugging strategies side-by-side.",
      icon: Code2,
      color: "text-[#34A853]",
      border: "hover:border-[#34A853]/40"
    },
    {
      title: "Open-Source & Git Contribution",
      description: "Demystifying open-source workflows, version control best practices, CLI productivity, and guiding students to make their first production pull requests.",
      icon: GitBranch,
      color: "text-[#FBBC05]",
      border: "hover:border-[#FBBC05]/40"
    },
    {
      title: "Campus & Alumni Networking",
      description: "Connecting first-year coders with final-year mentors, alumni software engineers, and developer peers from across colleges and institutions.",
      icon: Users,
      color: "text-[#EA4335]",
      border: "hover:border-[#EA4335]/40"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#090b10] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
      
      {/* Navigation */}
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          
          {/* Ambient Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-red-500/10 to-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors p-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to DevSync '26 Homepage</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Google Developer Groups Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-surface-lighter/80 border border-white/10 text-slate-200">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              <span className="ml-1 font-semibold">CAMPUS DEVELOPER COMMUNITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-300">GDG MMMUT</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              Google Developer Groups MMMUT is the student developer community chapter based at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. We are the official organizers of <strong>DevSync '26</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/25">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>MMMUT Gorakhpur, Uttar Pradesh</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Peer-Led Developer Chapter</span>
              </div>
            </div>

          </div>

        </div>

        {/* Section 1: What are Google Developer Groups (GDGs)? */}
        <section className="py-16 bg-[#0c101b] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>The Global GDG Ecosystem</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                  What are Google Developer Groups?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  <strong>Google Developer Groups (GDGs)</strong> are community groups for developers interested in learning, building, and collaborating around software engineering technologies. From mobile and web development to cloud infrastructure and open-source software, GDGs bring developers together in cities and campuses across the world.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  GDGs provide an inclusive, vendor-neutral, and community-first environment where students, enthusiasts, and professional engineers share insights, discuss architecture, and help one another grow.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-surface-lighter/60 border border-white/10 p-8 space-y-4">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Core Community Principles
                  </div>
                  <div className="space-y-3 text-sm text-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Community-First:</strong> Organized by developers, for developers, with an open mindset.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Practical Knowledge:</strong> Beyond textbook theory — focusing on shipping functional code and system design.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Open Collaboration:</strong> Welcoming participants of all skill levels, from beginners to experienced coders.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: GDG MMMUT & The Campus Developer Connection */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                Campus Chapter Identity
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                Connecting Developers at MMMUT Gorakhpur
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Madan Mohan Malaviya University of Technology (MMMUT) has a rich heritage of technical innovation. <strong>GDG MMMUT</strong> serves as the heartbeat of modern developer culture on campus, bridging academic coursework with practical engineering skills.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`rounded-3xl bg-surface-lighter/50 border border-white/10 p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 ${pillar.border}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* How Students Can Explore & Connect */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-surface-lighter to-slate-900 border border-blue-500/30 p-8 sm:p-12">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  How Students Engage with GDG MMMUT
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  Whether you are writing your first lines of code in your first year or optimizing scalable production systems in your final year, GDG MMMUT provides an environment to:
                </p>
                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                  <li>Attend peer code reviews and system architecture teardowns.</li>
                  <li>Join collaborative study circles covering Frontend, Backend, Cloud, and Open Source.</li>
                  <li>Network directly with senior student mentors and alumni working in software engineering.</li>
                  <li>Participate in community hackdays and offline campus meetups like DevSync '26.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: DevSync '26 — A Flagship Initiative */}
        <section className="py-20 bg-[#0c101b] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#111827] via-surface-lighter to-[#0a0d16] border border-blue-500/30 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
              
              {/* Highlight Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>FLAGSHIP OFFLINE EVENT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mb-4">
                Introducing DevSync '26
              </h2>

              <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans mb-8 leading-relaxed">
                Organised exclusively by <strong>GDG MMMUT</strong>, DevSync '26 is a 100% in-person developer gathering held at the <strong>Seminar Hall Complex, MMMUT Gorakhpur</strong> on <strong>November 28, 2026</strong>. Bringing MMMUT students and outside university builders together for a full day of technical talks, live demonstrations, and meaningful peer networking.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Prominent Back Button */}
                <Link
                  to="/"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base sm:text-lg group"
                >
                  <span>Explore DevSync '26</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="/#register"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-display font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-base"
                >
                  <span>Go to Seat Reservation</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top smooth button */}
      <BackToTop />

    </div>
  );
}
