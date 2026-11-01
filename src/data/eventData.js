export const EVENT_DETAILS = {
  name: "DevSync '26",
  subtitle: "Developer Community Meet",
  tagline: "In-Person Tech Talks, Live Demos & Campus Networking.",
  date: "November 28, 2026",
  isoDate: "2026-11-28",
  registrationDeadline: "2026-11-27T23:59:59+05:30", // IST deadline
  venue: "Seminar Hall Complex / Multi-Purpose Hall, Campus",
  format: "100% OFFLINE / IN-PERSON",
  capacity: 150,
  initialRegistered: 118, // 32 seats remaining initially for realistic demonstration
  entry: "Free",
  benefits: ["High-tea", "Refreshments", "Developer Swag Kit"],
  badges: [
    "NOVEMBER 28, 2026",
    "100% IN-PERSON",
    "LIMITED TO 150 SEATS",
    "FREE ENTRY"
  ],
  heroHeading: "Where Developers Connect, Create & Collaborate.",
  heroSupportingText: "One campus. One community. Endless possibilities. Join developers, builders, and tech enthusiasts for a full day of technical talks, live demonstrations, collaborative learning, and meaningful networking.",
  aboutHeading: "More Than a Meetup. A Developer Experience.",
  aboutDescription: "DevSync '26 is a full-day, in-person developer gathering bringing student coders, open-source contributors, and alumni engineers together under one roof. Experience face-to-face peer code reviews, live architecture breakdowns, technical discussions, and campus networking. Learn from experienced developers, exchange ideas, and connect with people who share your passion for technology.",
};

export const ABOUT_FEATURES = [
  {
    number: "01",
    title: "Learn Together",
    description: "Explore modern technologies through technical talks and interactive sessions led by experienced engineers.",
    icon: "BookOpen",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/40"
  },
  {
    number: "02",
    title: "Build Together",
    description: "Participate in live debugging, code-alongs, and collaborative discussions on real-world systems.",
    icon: "Code2",
    gradient: "from-violet-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-violet-500/40"
  },
  {
    number: "03",
    title: "Connect Together",
    description: "Meet fellow developers, alumni engineers, and members of the campus tech community face-to-face.",
    icon: "Users",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/40"
  }
];

export const TARGET_AUDIENCE = [
  { label: "First-year to final-year students", category: "Academic" },
  { label: "Web and app developers", category: "Engineering" },
  { label: "Competitive programmers", category: "Algorithms" },
  { label: "Open-source enthusiasts", category: "Community" },
  { label: "Technology hobbyists", category: "Exploration" }
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
    glowColor: "rgba(59, 130, 246, 0.25)"
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
    location: "Seminar Hall Complex",
    type: "Keynote Talk",
    icon: "Presentation",
    highlight: true
  },
  {
    time: "11:45 AM – 01:15 PM",
    timeTag: "Midday",
    title: "Interactive Code-along / Live Debugging",
    subtitle: "Learn through practical demonstrations.",
    location: "Tech Labs / Seminar Hall",
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
    location: "Multi-Purpose Hall Stage",
    type: "Open Mic & Talks",
    icon: "Zap",
    highlight: true
  },
  {
    time: "03:45 PM – 04:30 PM",
    timeTag: "Wrap-up",
    title: "Peer Review Mixer, Quiz Awards & Wrap-Up",
    subtitle: "Collaborate, celebrate, and connect.",
    location: "Seminar Hall Complex",
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
    description: "Every confirmed participant receives the complete DevSync '26 welcome package upon in-person check-in.",
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
  date: "November 28, 2026",
  timing: "09:30 AM – 04:30 PM IST",
  venue: "Seminar Hall Complex / Multi-Purpose Hall, Campus",
  format: "In-Person Only",
  entry: "Campus Main Gate",
  landmark: "Main Academic Block",
  capacity: "Strict limit: 150 Seats",
  notes: [
    "Security check-in requires your DevSync '26 digital pass or college ID.",
    "Provisional campus placeholders shown. Detailed gate instructions will be sent to registered attendees.",
    "100% Offline event. There is no virtual stream or remote attendance option."
  ],
  checkpoints: [
    { name: "Campus Main Gate", desc: "Entry point & ID verification checkpoint", time: "09:00 AM onwards" },
    { name: "Academic Block Quad", desc: "Wayfinding signage to Hall Complex", time: "Follow blue banners" },
    { name: "Seminar Hall Complex", desc: "Check-in desk, swag kit collection & talks", time: "09:30 AM prompt" },
    { name: "Multi-Purpose Hall", desc: "Lightning talks & collaborative mixer area", time: "02:15 PM" }
  ]
};

export const FAQ_DATA = [
  {
    q: "Is there any registration fee for DevSync '26?",
    a: "No! DevSync '26 is 100% free to attend for selected campus developers and students. However, capacity is strictly capped at 150 seats."
  },
  {
    q: "Can I attend virtually or watch a livestream?",
    a: "No. DevSync '26 is an exclusively in-person offline developer gathering designed around face-to-face peer reviews, code-alongs, and campus networking. There is no virtual attendance or online broadcast."
  },
  {
    q: "What should I bring along?",
    a: "Bring your laptop, charger, college ID, and enthusiasm to build and learn! High-tea, refreshments, notebooks, and swag will be provided."
  },
  {
    q: "How will I know if my seat is confirmed?",
    a: "Upon completing the registration form on this portal, you immediately receive your unique DevSync '26 Attendee Pass with your badge ID."
  }
];

