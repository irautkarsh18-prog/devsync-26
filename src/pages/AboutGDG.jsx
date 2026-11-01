import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code2, Users, BookOpen, GitBranch, Cpu, Sparkles, MapPin, Calendar, CheckCircle2, Terminal, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { EVENT_DETAILS, GDG_COLORS } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStud, LegoStudRow, FloatingLegoBrick } from '../components/LegoElements';

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
      color: "text-lego-blue",
      studColor: "blue",
      border: "border-blue-500/30 hover:border-blue-400 border-b-4 border-b-blue-700/60",
      iconBg: "bg-blue-500/10 border-blue-500/30"
    },
    {
      title: "Collaborative Building & Live Debugging",
      description: "Peer-driven coding circles where students tackle real-world problems, break down scalable codebases, and learn debugging strategies side-by-side.",
      icon: Code2,
      color: "text-lego-green",
      studColor: "green",
      border: "border-emerald-500/30 hover:border-emerald-400 border-b-4 border-b-emerald-700/60",
      iconBg: "bg-emerald-500/10 border-emerald-500/30"
    },
    {
      title: "Open-Source & Git Contribution",
      description: "Demystifying open-source workflows, version control best practices, CLI productivity, and guiding students to make their first production pull requests.",
      icon: GitBranch,
      color: "text-lego-yellow",
      studColor: "yellow",
      border: "border-amber-500/30 hover:border-amber-400 border-b-4 border-b-amber-700/60",
      iconBg: "bg-amber-500/10 border-amber-500/30"
    },
    {
      title: "Campus & Alumni Networking",
      description: "Connecting first-year coders with final-year mentors, alumni software engineers, and developer peers from across colleges and institutions.",
      icon: Users,
      color: "text-lego-red",
      studColor: "red",
      border: "border-red-500/30 hover:border-red-400 border-b-4 border-b-red-700/60",
      iconBg: "bg-red-500/10 border-red-500/30"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 font-sans selection:bg-lego-blue/30 selection:text-white lego-baseplate-pattern">
      
      {/* Navigation */}
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          
          {/* Ambient Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-lego-blue/15 via-lego-red/10 to-lego-yellow/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Floating LEGO bricks */}
          <FloatingLegoBrick color="blue" size={34} className="top-10 left-[8%] hidden md:block" rotation={25} />
          <FloatingLegoBrick color="yellow" size={28} className="top-24 right-[10%] hidden md:block" rotation={-15} />

          {/* Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-xl bg-[#121622] border border-white/10 hover:border-white/20"
            >
              <ArrowLeft className="w-4 h-4 text-lego-yellow" />
              <span>Back to DevSync '26 Homepage</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Google Developer Groups Badge with 4 LEGO Studs */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#141824] border-2 border-white/10 text-slate-200 shadow-lg">
              <LegoStud color="blue" size="sm" />
              <LegoStud color="red" size="sm" />
              <LegoStud color="yellow" size="sm" />
              <LegoStud color="green" size="sm" />
              <span className="ml-1 uppercase tracking-wider text-amber-300">CAMPUS DEVELOPER COMMUNITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lego-blue via-lego-green to-lego-yellow">GDG MMMUT</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              Google Developer Groups MMMUT is the student developer community chapter based at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. We are the official organizers of <strong>DevSync '26</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#121622] text-lego-blue border border-blue-500/30 border-b-2 border-b-blue-900/60 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-lego-blue" />
                <span>MMMUT Gorakhpur, Uttar Pradesh</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#121622] text-lego-green border border-emerald-500/30 border-b-2 border-b-emerald-900/60 shadow-sm">
                <Users className="w-3.5 h-3.5 text-lego-green" />
                <span>Peer-Led Developer Chapter</span>
              </div>
            </div>

          </div>

        </div>

        {/* Section 1: What are Google Developer Groups (GDGs)? */}
        <section className="py-16 bg-[#0a0c13] border-y-4 border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lego-blue font-bold">
                  <Terminal className="w-4 h-4 text-lego-yellow" />
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
                <div className="rounded-2xl bg-[#121624] border-2 border-white/15 border-b-4 border-b-black/60 p-8 space-y-5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-3 right-4">
                    <LegoStudRow count={4} color="blue" size="sm" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    Core Community Principles
                  </div>
                  <div className="space-y-3.5 text-sm text-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-lego-blue border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Community-First:</strong> Organized by developers, for developers, with an open mindset.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-lego-green border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Practical Knowledge:</strong> Beyond textbook theory — focusing on shipping functional code and system design.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-lego-yellow border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
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
              <span className="text-xs font-mono uppercase tracking-wider text-lego-green font-bold block">
                Campus Chapter Identity
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                Connecting Developers at MMMUT Gorakhpur
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Madan Mohan Malaviya University of Technology (MMMUT) has a rich heritage of technical innovation. <strong>GDG MMMUT</strong> serves as the heartbeat of modern developer culture on campus, bridging academic coursework with practical engineering skills.
              </p>
            </div>

            {/* 4 Core Pillars Grid - Assembled 4 LEGO Bricks (Blue, Green, Yellow, Red) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`rounded-2xl bg-[#121522] border-2 p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden ${pillar.border}`}
                  >
                    <div className="absolute top-4 right-4">
                      <LegoStudRow count={3} color={pillar.studColor} size="sm" />
                    </div>
                    <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center shadow-inner ${pillar.iconBg} ${pillar.color}`}>
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
            <div className="rounded-3xl bg-gradient-to-r from-[#141b2e] via-[#101422] to-[#0d0f18] border-2 border-white/15 border-b-6 border-b-black/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0">
                <LegoGoogleBrickBar />
              </div>
              <div className="max-w-3xl space-y-4 mt-2">
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
        <section className="py-20 bg-[#0a0c13] border-t-4 border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#141828] via-[#10131e] to-[#0a0d16] border-2 border-white/15 border-b-6 border-b-black/80 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
              
              {/* Top LEGO Brick Bar */}
              <div className="absolute top-0 inset-x-0">
                <LegoGoogleBrickBar />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#1c2236] text-amber-300 border border-white/10 shadow-md mb-6 mt-4">
                <LegoStud color="yellow" size="sm" />
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>FLAGSHIP OFFLINE EVENT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mb-4">
                Introducing DevSync '26
              </h2>

              <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans mb-8 leading-relaxed">
                Organised exclusively by <strong>GDG MMMUT</strong>, DevSync '26 is a 100% in-person developer gathering held at the <strong>Seminar Hall Complex, MMMUT Gorakhpur</strong> on <strong>November 28, 2026</strong>. Bringing MMMUT students and outside university builders together for a full day of technical talks, live demonstrations, and meaningful peer networking.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Prominent Back Button with tactile LEGO styling */}
                <Link
                  to="/"
                  className="lego-btn lego-btn-blue inline-flex items-center gap-2.5 px-8 py-3.5 font-display font-bold text-white text-base sm:text-lg group shadow-xl"
                >
                  <span>Explore DevSync '26</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="/#register"
                  className="lego-btn lego-btn-dark inline-flex items-center gap-2 px-6 py-3.5 font-display font-semibold text-slate-200 text-base shadow-lg"
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
