export const EVENT_DETAILS = {
  name: "DevSync '26",
  subtitle: "Developer Community Meet",
  organiser: "GDG MMMUT (Google Developer Groups MMMUT)",
  organiserShort: "GDG MMMUT",
  institution: "Madan Mohan Malaviya University of Technology (MMMUT)",
  locationCity: "Gorakhpur, Uttar Pradesh",
  fullLocation: "Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, Uttar Pradesh, India",
  tagline: "In-Person Tech Talks, Live Demos & Campus Networking",
  date: "November 28, 2026",
  isoDate: "2026-11-28",
  registrationDeadline: "2026-11-27T23:59:59+05:30", // IST deadline
  venue: "Seminar Hall Complex / Multi-Purpose Hall, MMMUT Campus",
  format: "100% OFFLINE / IN-PERSON",
  capacity: 150,
  initialRegistered: 118, // 32 seats remaining initially across both categories combined
  entry: "Free",
  benefits: [
    "Participation Certificate",
    "Physical Sticker Pack",
    "Coffee / Snack Box",
    "Exclusive Campus Tech Directory Access"
  ],
  badges: [
    "NOVEMBER 28, 2026",
    "ORGANISED BY GDG MMMUT",
    "100% IN-PERSON",
    "LIMITED TO 150 SEATS",
    "FREE ENTRY"
  ],
  heroHeading: "Where Developers Connect, Create & Collaborate.",
  heroSupportingText: "One campus. One community. Endless possibilities. Organised by GDG MMMUT at Madan Mohan Malaviya University of Technology, Gorakhpur. Join student coders, alumni engineers, and outside university builders for an intensive day of technical talks, live demonstrations, and meaningful peer networking.",
  aboutHeading: "More Than a Meetup. A Developer Experience.",
  aboutDescription: "DevSync '26 is an in-person developer gathering organised by GDG MMMUT, bringing MMMUT students, outside college builders, open-source contributors, and alumni engineers together under one roof. Experience face-to-face peer code reviews, live architecture breakdowns, hands-on workshops, and collaborative discussions.",
};

export const GDG_COLORS = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC05",
  green: "#34A853"
};

export const ABOUT_FEATURES = [
  {
    number: "01",
    title: "Learn Together",
    description: "Explore modern technologies through technical talks and interactive sessions led by experienced engineers and community mentors.",
    icon: "BookOpen",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/40"
  },
  {
    number: "02",
    title: "Build Together",
    description: "Participate in live debugging, code-alongs, and collaborative discussions on real-world systems with fellow campus peers.",
    icon: "Code2",
    gradient: "from-violet-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-violet-500/40"
  },
  {
    number: "03",
    title: "Connect Together",
    description: "Meet fellow developers from MMMUT and visiting universities, alumni engineers, and members of the regional tech community.",
    icon: "Users",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/40"
  }
];

export const TARGET_AUDIENCE = [
  { label: "MMMUT Students (All Years)", category: "Host Campus" },
  { label: "Outside University Builders", category: "Open To All" },
  { label: "Web and App Developers", category: "Engineering" },
  { label: "Competitive Programmers", category: "Algorithms" },
  { label: "Open-Source Enthusiasts", category: "Community" },
  { label: "Technology Hobbyists", category: "Exploration" }
];

export const TRACKS_DATA = [
  {
    id: "frontend",
    number: "TRACK 01",
    title: "Frontend Architecture & UI Systems",
    description: "Explore modern frontend engineering, scalable design systems, component lifecycle optimization, modern CSS techniques, and performance improvements.",
    topics: [
      "Design Systems",
      "Component Architecture",
      "Modern CSS",
      "Bundle Optimization"
    ],
    accent: "blue",
    icon: "Layout",
    color: "text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    glowColor: "rgba(66, 133, 244, 0.25)"
  },
  {
    id: "backend",
    number: "TRACK 02",
    title: "Backend, APIs & Systems Design",
    description: "Understand how scalable applications are designed, built, and maintained using modern backend technologies and infrastructure.",
    topics: [
      "REST & GraphQL APIs",
      "Microservices",
      "Docker",
      "SQL vs NoSQL"
    ],
    accent: "violet",
    icon: "Server",
    color: "text-violet-400",
    badgeBg: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    glowColor: "rgba(139, 92, 246, 0.25)"
  },
  {
    id: "opensource",
    number: "TRACK 03",
    title: "Open Source & Developer Tooling",
    description: "Discover the power of open-source collaboration, Git workflows, CLI development, and productivity tools.",
    topics: [
      "Git & GitHub",
      "First Open-Source Contribution",
      "CLI Tools",
      "Terminal Productivity"
    ],
    accent: "cyan",
    icon: "Terminal",
    color: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    glowColor: "rgba(6, 182, 212, 0.25)"
  }
];

export const SCHEDULE_DATA = [
  {
    time: "09:30 AM – 10:15 AM",
    timeTag: "Morning",
    title: "Check-in, Breakfast & Kit Distribution",
    subtitle: "Stickers, notebooks, and ID badges.",
    location: "Main Lobby & Registration Desk",
    type: "Check-in & Swag",
    icon: "Coffee",
    highlight: false
  },
  {
    time: "10:15 AM – 11:30 AM",
    timeTag: "Morning",
    title: "Keynote & Speaker Session",
    subtitle: "From College Projects to Scalable Codebases.",
    location: "Seminar Hall Complex, MMMUT",
    type: "Keynote Talk",
    icon: "Presentation",
    highlight: true
  },
  {
    time: "11:45 AM – 01:15 PM",
    timeTag: "Midday",
    title: "Interactive Code-along / Live Debugging",
    subtitle: "Learn through practical demonstrations.",
    location: "Seminar Hall Complex, MMMUT",
    type: "Hands-on Workshop",
    icon: "Code2",
    highlight: false
  },
  {
    time: "01:15 PM – 02:15 PM",
    timeTag: "Lunch",
    title: "Networking Lunch & Community Hangout",
    subtitle: "Meet developers and exchange ideas.",
    location: "Campus Courtyard & Dining Lounge",
    type: "Networking",
    icon: "Utensils",
    highlight: false
  },
  {
    time: "02:15 PM – 03:45 PM",
    timeTag: "Afternoon",
    title: "Offline Lightning Talks",
    subtitle: "Five-minute open-mic technical presentations.",
    location: "Multi-Purpose Hall Stage, MMMUT",
    type: "Open Mic & Talks",
    icon: "Zap",
    highlight: true
  },
  {
    time: "03:45 PM – 04:30 PM",
    timeTag: "Wrap-up",
    title: "Peer Review Mixer, Quiz Awards & Wrap-Up",
    subtitle: "Collaborate, celebrate, and connect.",
    location: "Seminar Hall Complex, MMMUT",
    type: "Closing & Awards",
    icon: "Trophy",
    highlight: false
  }
];

export const PRIZES_DATA = [
  {
    id: "lightning-talk",
    title: "BEST LIGHTNING TALK",
    category: "Speaker Award",
    badge: "Champion",
    description: "Awarded to the most insightful, engaging, and well-articulated 5-minute technical presentation.",
    rewards: [
      "Mechanical Keyboard",
      "Custom Trophy",
      "Cloud Platform Credits"
    ],
    highlight: true,
    accentBorder: "border-amber-500/40",
    gradient: "from-amber-500/10 via-slate-900 to-slate-950",
    iconColor: "text-amber-400"
  },
  {
    id: "trivia-winner",
    title: "TECH TRIVIA / LIVE CODING WINNER",
    category: "Competition Award",
    badge: "Top Performer",
    description: "Awarded to the top problem-solvers in our rapid live-coding challenge and tech trivia face-off.",
    rewards: [
      "Developer Swag Bundle",
      "Hoodie",
      "Tech Pack",
      "Fast-track club core-team interview opportunity"
    ],
    highlight: true,
    accentBorder: "border-blue-500/40",
    gradient: "from-blue-500/10 via-slate-900 to-slate-950",
    iconColor: "text-blue-400"
  },
  {
    id: "every-attendee",
    title: "EVERY REGISTERED ATTENDEE",
    category: "Participation Kit",
    badge: "All Attendees",
    description: "Every confirmed participant receives the complete DevSync '26 welcome package upon in-person check-in at MMMUT.",
    rewards: [
      "Certificate of Participation",
      "Physical Laptop Sticker Pack",
      "Coffee & Snack Box",
      "Exclusive Campus Tech Directory Access"
    ],
    highlight: false,
    accentBorder: "border-white/10",
    gradient: "from-slate-800/40 via-slate-900 to-slate-950",
    iconColor: "text-slate-300"
  }
];

export const SPONSORS_DATA = [
  {
    name: "ByteForge Labs",
    role: "Fictional Lead Tech Sponsor",
    tag: "Lead Partner",
    description: "Powering developer tooling and infrastructure research for campus communities.",
    logoText: "BYTEFORGE",
    logoSub: "LABS // CORE",
    accent: "border-blue-500/30 text-blue-400"
  },
  {
    name: "CampusBrew Co.",
    role: "Fictional Refreshments Partner",
    tag: "Refreshment Partner",
    description: "Fueling productive debugging sessions with artisan roasts, brews, and high-tea snacks.",
    logoText: "CAMPUS.BREW",
    logoSub: "CRAFT CAFFEINE",
    accent: "border-amber-500/30 text-amber-400"
  },
  {
    name: "OpenStack Network",
    role: "Fictional Community & Swag Partner",
    tag: "Community Partner",
    description: "Championing student open-source ecosystems, badges, and high-quality physical merchandise.",
    logoText: "OPENSTACK",
    logoSub: "COMMUNITY NET",
    accent: "border-purple-500/30 text-purple-400"
  }
];

export const VENUE_DATA = {
  event: "DevSync '26",
  organiser: "GDG MMMUT",
  institution: "Madan Mohan Malaviya University of Technology (MMMUT)",
  city: "Gorakhpur, Uttar Pradesh",
  date: "November 28, 2026",
  timing: "09:30 AM – 04:30 PM IST",
  venue: "Seminar Hall Complex / Multi-Purpose Hall, MMMUT Campus",
  format: "In-Person Only",
  entry: "Campus Main Gate, MMMUT",
  landmark: "Main Academic Block / ITRC Building, MMMUT Gorakhpur",
  capacity: "Strict limit: 150 Seats (Combined across all categories)",
  notes: [
    "Security check-in requires your DevSync '26 digital pass and college/university photo ID card.",
    "Provisional campus placeholders shown. Detailed gate instructions will be sent to registered attendees.",
    "100% Offline event. There is no virtual stream or remote attendance option."
  ],
  checkpoints: [
    { name: "MMMUT Main Gate", desc: "Entry point & ID verification checkpoint for all delegates", time: "09:00 AM onwards" },
    { name: "Academic Quadrangle", desc: "Wayfinding signage to Seminar Hall Complex", time: "Follow GDG banners" },
    { name: "Seminar Hall Complex", desc: "Check-in desk, swag kit collection & morning talks", time: "09:30 AM prompt" },
    { name: "Multi-Purpose Hall", desc: "Lightning talks & collaborative mixer area", time: "02:15 PM" }
  ]
};

export const FAQ_DATA = [
  {
    q: "What is DevSync '26?",
    a: "DevSync '26 is an intensive full-day, 100% in-person developer conference featuring technical talks, architecture breakdowns, live debugging code-alongs, and campus networking. It is designed to bridge the gap between classroom theory and real-world software engineering."
  },
  {
    q: "Who is organising DevSync '26?",
    a: "DevSync '26 is organised by GDG MMMUT (Google Developer Groups MMMUT) — the active developer community chapter based at Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh."
  },
  {
    q: "Can students from other colleges attend?",
    a: "Yes, absolutely! DevSync '26 warmly welcomes both MMMUT students and students from other colleges and universities across the region. We have provided dedicated registration categories for both groups."
  },
  {
    q: "Is the event online or offline?",
    a: "The event is 100% OFFLINE / IN-PERSON. All talks, workshops, open mics, meals, and networking mixers take place physically at the MMMUT campus in Gorakhpur. There is no virtual stream or remote attendance option."
  },
  {
    q: "Is registration free?",
    a: "Yes! Registration for DevSync '26 is completely free for all selected participants from both MMMUT and outside universities. However, seating is strictly capped at 150 seats total."
  },
  {
    q: "Where will the event take place?",
    a: "The event will take place at the Seminar Hall Complex / Multi-Purpose Hall, Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, Uttar Pradesh, India."
  },
  {
    q: "What is the registration deadline?",
    a: "The registration window officially closes on November 27, 2026, at 11:59 PM IST (or earlier if all 150 physical seats are filled)."
  },
  {
    q: "How many participants can attend?",
    a: "The event has a strict maximum capacity of 150 participants combined across both MMMUT and outside college categories to ensure a safe, high-engagement physical experience."
  },
  {
    q: "Will participants receive certificates?",
    a: "Yes! Every registered attendee who checks in at the venue will receive an official Certificate of Participation, a physical laptop sticker pack, a coffee/snack box, and exclusive campus tech directory access."
  },
  {
    q: "What should I bring to the event?",
    a: "Please bring your laptop, charger, college/university photo ID card, and your digital or printed DevSync '26 Attendee Pass. High-tea, lunch, notebooks, and badges will be provided."
  },
  {
    q: "Can I choose my preferred technical track?",
    a: "Yes. When registering, you can select your track of interest: Frontend Architecture & UI Systems, Backend, APIs & Systems Design, or Open Source & Developer Tooling."
  },
  {
    q: "How can I contact the organisers?",
    a: "You can reach out to the GDG MMMUT organising team at contact@gdgmmmut.example.com or visit our campus community hub at MMMUT Gorakhpur. (Contact details are provisional community placeholders)."
  }
];
