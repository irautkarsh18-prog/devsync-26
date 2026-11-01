import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code2, Users, BookOpen, GitBranch, Sparkles, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
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
      color: "text-[#006CB7]",
      studColor: "blue",
      border: "border-[#006CB7] border-b-8 border-b-[#004A80]",
      iconBg: "bg-[#006CB7]/15 border-[#006CB7]"
    },
    {
      title: "Collaborative Building & Live Debugging",
      description: "Peer-driven coding circles where students tackle real-world problems, break down scalable codebases, and learn debugging strategies side-by-side.",
      icon: Code2,
      color: "text-[#00852B]",
      studColor: "green",
      border: "border-[#00852B] border-b-8 border-b-[#00551B]",
      iconBg: "bg-[#00852B]/15 border-[#00852B]"
    },
    {
      title: "Open-Source & Git Contribution",
      description: "Demystifying open-source workflows, version control best practices, CLI productivity, and guiding students to make their first production pull requests.",
      icon: GitBranch,
      color: "text-[#FF8C00]",
      studColor: "yellow",
      border: "border-[#FFD500] border-b-8 border-b-[#D4AF37]",
      iconBg: "bg-[#FFD500]/20 border-[#FFD500]"
    },
    {
      title: "Campus & Alumni Networking",
      description: "Connecting first-year coders with final-year mentors, alumni software engineers, and developer peers from across colleges and institutions.",
      icon: Users,
      color: "text-[#E53935]",
      studColor: "red",
      border: "border-[#E53935] border-b-8 border-b-[#B71C1C]",
      iconBg: "bg-[#E53935]/15 border-[#E53935]"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFF8E7] text-[#252525] font-sans selection:bg-[#FFD500]/40 selection:text-[#252525] lego-baseplate-pattern">
      
      {/* Navigation */}
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          
          {/* Floating LEGO bricks */}
          <FloatingLegoBrick color="blue" size={34} className="top-10 left-[8%] hidden md:block" rotation={25} />
          <FloatingLegoBrick color="yellow" size={28} className="top-24 right-[10%] hidden md:block" rotation={-15} />

          {/* Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-black text-[#252525] hover:text-[#006CB7] transition-colors px-4 py-2 rounded-xl bg-white border-2 border-[#E8DCC4] shadow-sm hover:bg-[#F5EBD2]"
            >
              <ArrowLeft className="w-4 h-4 text-[#006CB7]" />
              <span>Back to DevSync '26 Homepage</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Google Developer Groups Badge with 4 LEGO Studs */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-black bg-white border-2 border-[#E8DCC4] text-[#252525] shadow-sm">
              <LegoStud color="blue" size="xs" />
              <LegoStud color="red" size="xs" />
              <LegoStud color="yellow" size="xs" />
              <LegoStud color="green" size="xs" />
              <span className="ml-1 uppercase tracking-wider text-[#006CB7]">CAMPUS DEVELOPER COMMUNITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#252525] leading-tight">
              About <span className="text-[#006CB7]">GDG MMMUT</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 font-sans leading-relaxed max-w-3xl mx-auto font-medium">
              Google Developer Groups MMMUT is the student developer community chapter based at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. We are the official organizers of <strong>DevSync '26</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-black bg-white text-[#006CB7] border-2 border-[#006CB7] shadow-sm">
                <MapPin className="w-4 h-4 text-[#006CB7]" />
                <span>MMMUT Gorakhpur, Uttar Pradesh</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-black bg-white text-[#00852B] border-2 border-[#00852B] shadow-sm">
                <Users className="w-4 h-4 text-[#00852B]" />
                <span>Peer-Led Developer Chapter</span>
              </div>
            </div>

          </div>

        </div>

        {/* Section 1: What are Google Developer Groups (GDGs)? */}
        <section className="py-16 bg-[#F5EBD2] border-y-4 border-[#E8DCC4] lego-baseplate-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#006CB7] font-black">
                  <Terminal className="w-4 h-4 text-[#FF8C00]" />
                  <span>The Global GDG Ecosystem</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-display text-[#252525]">
                  What are Google Developer Groups?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                  <strong>Google Developer Groups (GDGs)</strong> are community groups for developers interested in learning, building, and collaborating around software engineering technologies. From mobile and web development to cloud infrastructure and open-source software, GDGs bring developers together in cities and campuses across the world.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                  GDGs provide an inclusive, vendor-neutral, and community-first environment where students, enthusiasts, and professional engineers share insights, discuss architecture, and help one another grow.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-white border-4 border-[#006CB7] border-b-8 border-b-[#004A80] p-8 space-y-5 shadow-xl relative overflow-hidden">
                  <div className="absolute top-3 right-4">
                    <LegoStudRow count={4} color="blue" size="xs" />
                  </div>
                  <div className="text-xs font-mono text-[#006CB7] uppercase tracking-wider font-black">
                    Core Community Principles
                  </div>
                  <div className="space-y-3.5 text-sm text-slate-800">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#006CB7]/15 text-[#006CB7] border border-[#006CB7]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Community-First:</strong> Organized by developers, for developers, with an open mindset.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#00852B]/15 text-[#00852B] border border-[#00852B]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Practical Knowledge:</strong> Beyond textbook theory — focusing on shipping functional code and system design.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FFD500]/25 text-[#A06C00] border border-[#FFD500] flex items-center justify-center shrink-0 mt-0.5">
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
        <section className="py-20 bg-[#FFF8E7] lego-baseplate-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00852B] font-black block">
                Campus Chapter Identity
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-[#252525]">
                Connecting Developers at MMMUT Gorakhpur
              </h2>
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed font-medium">
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
                    className={`rounded-3xl bg-white border-4 p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden ${pillar.border}`}
                  >
                    <div className="absolute top-4 right-4">
                      <LegoStudRow count={3} color={pillar.studColor} size="xs" />
                    </div>
                    <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-sm ${pillar.iconBg} ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black font-display text-[#252525]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* How Students Can Explore & Connect */}
            <div className="rounded-3xl bg-white border-4 border-[#E8DCC4] border-b-8 border-b-[#D5C7AB] p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0">
                <LegoGoogleBrickBar />
              </div>
              <div className="max-w-3xl space-y-4 mt-2">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-[#252525]">
                  How Students Engage with GDG MMMUT
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                  Whether you are writing your first lines of code in your first year or optimizing scalable production systems in your final year, GDG MMMUT provides an environment to:
                </p>
                <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside font-medium">
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
        <section className="py-20 bg-[#F5EBD2] border-t-4 border-[#E8DCC4] lego-baseplate-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-white border-4 border-[#E53935] border-b-8 border-b-[#B71C1C] p-8 sm:p-14 text-center shadow-xl overflow-hidden">
              
              {/* Top LEGO Brick Bar */}
              <div className="absolute top-0 inset-x-0">
                <LegoGoogleBrickBar />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-[#FFF8E7] text-[#E53935] border-2 border-[#E53935] shadow-sm mb-6 mt-4">
                <LegoStud color="yellow" size="xs" />
                <Sparkles className="w-4 h-4 text-[#FF8C00]" />
                <span>FLAGSHIP OFFLINE EVENT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display text-[#252525] mb-4">
                Introducing DevSync '26
              </h2>

              <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-sans mb-8 leading-relaxed font-medium">
                Organised exclusively by <strong>GDG MMMUT</strong>, DevSync '26 is a 100% in-person developer gathering held at the <strong>Seminar Hall Complex, MMMUT Gorakhpur</strong> on <strong>November 28, 2026</strong>. Bringing MMMUT students and outside university builders together for a full day of technical talks, live demonstrations, and meaningful peer networking.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Prominent Back Button with tactile LEGO styling */}
                <Link
                  to="/"
                  className="lego-btn lego-btn-blue inline-flex items-center gap-2.5 px-8 py-3.5 font-display font-black text-white text-base sm:text-lg shadow-xl"
                >
                  <span>Explore DevSync '26</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="/#register"
                  className="lego-btn lego-btn-red inline-flex items-center gap-2 px-6 py-3.5 font-display font-black text-white text-base shadow-lg"
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
