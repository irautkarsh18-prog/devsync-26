# DevSync '26 — Premium Developer Conference Website

> **Tagline:** In-Person Tech Talks, Live Demos & Campus Networking.  
> **Date:** November 28, 2026  
> **Venue:** Seminar Hall Complex / Multi-Purpose Hall, Campus  
> **Format:** 100% OFFLINE / IN-PERSON (Strictly no virtual attendance)  
> **Capacity:** Limited to 150 Seats (Free Entry)  

---

## 🚀 Overview

**DevSync '26** is a complete, visually exceptional, fully responsive web application for a premier in-person campus developer gathering. Built with modern digital product agency aesthetics, it delivers high-performance interactions, an offline-first event manifesto, interactive terminal simulations, live IST countdown math, dynamic seat availability tracking, and a client-side LocalStorage registration flow that produces a personalized **DevSync '26 Delegate Pass** with QR/barcode representation.

---

## ✨ Features & Architecture

### 1. Navigation Bar
- Sticky positioning with dynamic backdrop blur (`backdrop-blur-md`).
- Active section highlighting based on real-time scroll position.
- Custom SVG logo for DevSync '26 with glowing sync node and pulse animation.
- Mobile responsive slide-down drawer with touch-friendly navigation and in-person venue reminder.
- Direct "My Pass" quick-access button when a user has a registered seat in LocalStorage.

### 2. Hero Section
- **Headline:** *"Where Developers Connect, Create & Collaborate."*
- **Supporting Description:** *"One campus. One community. Endless possibilities. Join developers, builders, and tech enthusiasts for a full day of technical talks, live demonstrations, collaborative learning, and meaningful networking."*
- **Badges:** `NOVEMBER 28, 2026` • `100% IN-PERSON` • `LIMITED TO 150 SEATS` • `FREE ENTRY`.
- **Hero Visual:** Interactive floating IDE code terminal with multi-tab workspace (`devsync.config.ts`, `campus_mesh.rs`, `sessions.json`), live compiler simulator, and floating status chips.
- **Dynamic Seat Gauge:** Live progress bar displaying current registered count vs strict 150 physical capacity.
- **Live Countdown Timer:**
  - Synchronized to the IST registration deadline: **November 27, 2026, 11:59 PM IST**.
  - Displays Days, Hours, Minutes, and Seconds with second-by-second live calculation.
  - Automatically handles post-deadline status.

### 3. About the Event
- **Heading:** *"More Than a Meetup. A Developer Experience."*
- Comprehensive overview of the in-person gathering.
- Three feature cards:
  - `01 – Learn Together`
  - `02 – Build Together`
  - `03 – Connect Together`
- Target audience interactive badge directory: First-to-final-year students, Web/App developers, Competitive programmers, Open-source contributors, and Tech hobbyists.

### 4. Technical Tracks
- **Track 01: Frontend Architecture & UI Systems** (Design Systems, Component Architecture, Modern CSS, Bundle Optimization).
- **Track 02: Backend, APIs & Systems Design** (REST & GraphQL APIs, Microservices, Docker, SQL vs NoSQL).
- **Track 03: Open Source & Developer Tooling** (Git & GitHub, First Open-Source Contribution, CLI Tools, Terminal Productivity).
- Interactive "Choose this track" trigger that auto-scrolls and populates the registration form.

### 5. Event Schedule
- **Heading:** *"One Day. Countless Ideas."*
- Six exact sessions with time indicators, physical room indicators, and interactive category filters (`All`, `Morning`, `Midday`, `Lunch`, `Afternoon`, `Wrap-up`):
  - `09:30 AM – 10:15 AM`: Check-in, Breakfast & Kit Distribution
  - `10:15 AM – 11:30 AM`: Keynote & Speaker Session (*From College Projects to Scalable Codebases*)
  - `11:45 AM – 01:15 PM`: Interactive Code-along / Live Debugging
  - `01:15 PM – 02:15 PM`: Networking Lunch & Community Hangout
  - `02:15 PM – 03:45 PM`: Offline Lightning Talks (5-minute open-mic)
  - `03:45 PM – 04:30 PM`: Peer Review Mixer, Quiz Awards & Wrap-Up

### 6. Prizes & Perks
- **Heading:** *"Good Ideas Deserve Great Rewards."*
- Highlighted reward cards:
  - **Best Lightning Talk:** Mechanical Keyboard, Custom Trophy, Cloud Platform Credits.
  - **Tech Trivia / Live Coding Winner:** Developer Swag Bundle, Hoodie, Tech Pack, Fast-track club core-team interview opportunity.
  - **Every Registered Attendee:** Certificate of Participation, Physical Laptop Sticker Pack, Coffee & Snack Box, Exclusive Campus Tech Directory Access.

### 7. Sponsors & Community
- **Heading:** *"Powered by Community & Innovation."*
- Distinctive custom logos and badges for fictional partners:
  - `ByteForge Labs` (Fictional Lead Tech Sponsor)
  - `CampusBrew Co.` (Fictional Refreshments Partner)
  - `OpenStack Network` (Fictional Community & Swag Partner)
- Prominent disclaimers clearly marking all entities as fictional demonstration placeholders.

### 8. Campus Logistics & Venue Information
- **Heading:** *"Meet Us on Campus."*
- Venue: Seminar Hall Complex / Multi-Purpose Hall.
- Designated Entry: Campus Main Gate.
- Landmark: Main Academic Block.
- Interactive custom SVG Campus Schematic with wayfinding nodes, entry gates, and check-in timeline.

### 9. Registration Engine & Digital Pass Generator
- Accessible, validated form with real-time feedback:
  - Full Name (length check)
  - College Roll Number (format validation)
  - Branch / Academic Year
  - GitHub or Portfolio URL (regex validation)
  - Food Preference (Vegetarian / Jain)
  - Track of Interest
  - Required in-person attendance consent checkbox
- Duplicate prevention using stored Roll Numbers and URLs.
- Capacity enforcement (halts at 150 registrations).
- Confetti celebration burst upon successful confirmation.
- Generates a printable **DevSync '26 Delegate Pass** with holographic sheen, custom seat ID (`#DS-0119`), barcode, and QR code placeholder.
- Back-to-top floating progress button.

---

## 🛠️ Tech Stack

- **Framework:** React 18 (Vite 6)
- **Styling:** Tailwind CSS with custom midnight color tokens & glassmorphism
- **Typography:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code & Stats)
- **Icons:** Lucide React & Handcrafted SVGs
- **Celebration FX:** canvas-confetti
- **Storage:** Browser LocalStorage (with architecture prepared for REST / Supabase API swap)

---

## 💻 Running the Project Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔒 Verification & Compliance Notes

1. **In-Person Only:** The website explicitly states across all sections that DevSync '26 is 100% offline at the physical campus venue with no virtual attendance.
2. **Accurate Countdown:** Time difference calculations use IST (`GMT+5:30`) targeting November 27, 2026, 23:59:59 IST.
3. **Honest Demonstration Mode:** Clear badges notify the user that data is saved in LocalStorage and partners/venue landmarks are fictional placeholders.

