import React from 'react';

/**
 * Realistic circular LEGO stud with highlight, rim shadow, and embossed center ring
 */
export function LegoStud({ color = 'blue', size = 'md', className = '' }) {
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const colorStyles = {
    red: {
      bg: 'bg-gradient-to-br from-[#ff5a62] via-[#e3000b] to-[#a80007]',
      ring: 'ring-1 ring-[#ff7a80]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]',
      dot: 'bg-[#ff7a80]/40 shadow-inner',
    },
    blue: {
      bg: 'bg-gradient-to-br from-[#3b8bff] via-[#0055bf] to-[#003882]',
      ring: 'ring-1 ring-[#60a5fa]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]',
      dot: 'bg-[#93c5fd]/40 shadow-inner',
    },
    yellow: {
      bg: 'bg-gradient-to-br from-[#ffe566] via-[#ffd500] to-[#b89900]',
      ring: 'ring-1 ring-[#fff099]/70',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)]',
      dot: 'bg-[#fff5b3]/50 shadow-inner',
    },
    green: {
      bg: 'bg-gradient-to-br from-[#22c55e] via-[#00852b] to-[#00521b]',
      ring: 'ring-1 ring-[#4ade80]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]',
      dot: 'bg-[#86efac]/40 shadow-inner',
    },
    orange: {
      bg: 'bg-gradient-to-br from-[#ffa14d] via-[#ff7e14] to-[#b35200]',
      ring: 'ring-1 ring-[#ffbe80]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]',
      dot: 'bg-[#ffd2a6]/40 shadow-inner',
    },
    white: {
      bg: 'bg-gradient-to-br from-[#ffffff] via-[#e2e8f0] to-[#94a3b8]',
      ring: 'ring-1 ring-white/80',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.9)]',
      dot: 'bg-white/70 shadow-inner',
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0f172a]',
      ring: 'ring-1 ring-slate-400/30',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)]',
      dot: 'bg-slate-400/20 shadow-inner',
    },
    purple: {
      bg: 'bg-gradient-to-br from-[#c084fc] via-[#9333ea] to-[#6b21a8]',
      ring: 'ring-1 ring-purple-400/50',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.5)]',
      dot: 'bg-purple-300/40 shadow-inner',
    },
  };

  const scheme = colorStyles[color] || colorStyles.blue;
  const s = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 transition-transform ${s} ${scheme.bg} ${scheme.ring} ${scheme.shadow} ${className}`}
    >
      {/* Embossed inner core */}
      <div className={`w-[45%] h-[45%] rounded-full ${scheme.dot}`} />
    </div>
  );
}

/**
 * A horizontal row of evenly spaced LEGO studs
 */
export function LegoStudRow({ count = 6, color = 'blue', size = 'sm', className = '' }) {
  const studs = Array.from({ length: count });
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 ${className}`}>
      {studs.map((_, i) => (
        <LegoStud key={i} color={color} size={size} />
      ))}
    </div>
  );
}

/**
 * 4-Color Google Developer Groups Brick Header Strip (Blue, Red, Yellow, Green)
 */
export function LegoGoogleBrickBar({ className = '' }) {
  return (
    <div className={`relative flex h-3.5 w-full overflow-hidden rounded-t-xl border-b border-black/30 shadow-md ${className}`}>
      {/* 4 Interlocking Bricks with top studs */}
      <div className="flex-1 bg-[#0055bf] flex items-center justify-center gap-1.5 border-r border-[#003882]">
        <div className="w-2 h-2 rounded-full bg-[#3b8bff] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]" />
        <div className="w-2 h-2 rounded-full bg-[#3b8bff] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#e3000b] flex items-center justify-center gap-1.5 border-r border-[#9e0007]">
        <div className="w-2 h-2 rounded-full bg-[#ff5a62] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]" />
        <div className="w-2 h-2 rounded-full bg-[#ff5a62] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#ffd500] flex items-center justify-center gap-1.5 border-r border-[#b89900]">
        <div className="w-2 h-2 rounded-full bg-[#ffe566] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />
        <div className="w-2 h-2 rounded-full bg-[#ffe566] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#00852b] flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]" />
        <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] hidden sm:block" />
      </div>
    </div>
  );
}

/**
 * 3D Isometric / Orthographic LEGO Brick SVG
 */
export function LegoBrickGraphic({ color = 'red', width = 64, height = 48, className = '' }) {
  const palettes = {
    red: { top: '#ff4d55', front: '#e3000b', side: '#a80007', stud: '#ff7077', studSide: '#d4000a' },
    blue: { top: '#2e80ff', front: '#0055bf', side: '#003a85', stud: '#5296ff', studSide: '#0047a3' },
    yellow: { top: '#ffe14d', front: '#ffd500', side: '#b89900', stud: '#ffeb80', studSide: '#deb500' },
    green: { top: '#10b542', front: '#00852b', side: '#00571c', stud: '#2ed960', studSide: '#006e24' },
    orange: { top: '#ffa14d', front: '#ff7e14', side: '#b35200', stud: '#ffb36e', studSide: '#db690a' },
  };

  const p = palettes[color] || palettes.red;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-lg ${className}`}
    >
      {/* Front Face */}
      <polygon points="10,40 50,60 50,75 10,55" fill={p.front} />
      {/* Side Face */}
      <polygon points="50,60 90,40 90,55 50,75" fill={p.side} />
      {/* Top Face */}
      <polygon points="50,25 90,40 50,60 10,40" fill={p.top} />
      
      {/* Left Stud Cylinder */}
      <ellipse cx="35" cy="40" rx="9" ry="5" fill={p.studSide} />
      <ellipse cx="35" cy="36" rx="9" ry="4.5" fill={p.stud} />

      {/* Right Stud Cylinder */}
      <ellipse cx="65" cy="40" rx="9" ry="5" fill={p.studSide} />
      <ellipse cx="65" cy="36" rx="9" ry="4.5" fill={p.stud} />
    </svg>
  );
}

/**
 * Floating decorative LEGO brick with subtle rotation
 */
export function FloatingLegoBrick({ color = 'blue', size = 52, rotation = 12, className = '' }) {
  return (
    <div
      className={`pointer-events-none select-none transition-transform duration-700 hover:rotate-6 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <LegoBrickGraphic color={color} width={size} height={size * 0.8} />
    </div>
  );
}

/**
 * Miniature LEGO Minifigure Developer Mascot SVG
 */
export function LegoMinifigDeveloperGraphic({ width = 72, height = 90, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-2xl select-none ${className}`}
    >
      {/* Top Head Stud */}
      <ellipse cx="50" cy="12" rx="10" ry="4" fill="#deb500" />
      <rect x="40" y="8" width="20" height="5" fill="#ffd500" rx="1" />
      <ellipse cx="50" cy="8" rx="10" ry="3.5" fill="#ffeb80" />

      {/* Minifig Head */}
      <rect x="34" y="13" width="32" height="26" rx="6" fill="#ffd500" stroke="#deb500" strokeWidth="1" />
      <ellipse cx="50" cy="38" rx="14" ry="4" fill="#deb500" />

      {/* Developer Glasses */}
      <rect x="38" y="21" width="10" height="7" rx="2" fill="#1e293b" stroke="#0055bf" strokeWidth="1.5" />
      <rect x="52" y="21" width="10" height="7" rx="2" fill="#1e293b" stroke="#0055bf" strokeWidth="1.5" />
      <line x1="48" y1="24" x2="52" y2="24" stroke="#0055bf" strokeWidth="1.5" />

      {/* Eyes through glasses */}
      <circle cx="43" cy="24.5" r="1.5" fill="#ffffff" />
      <circle cx="57" cy="24.5" r="1.5" fill="#ffffff" />

      {/* Smirk / Smile */}
      <path d="M44 32 Q50 36 56 32" stroke="#8c6d00" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Torso / Hoodie */}
      <path d="M30 42 L70 42 L76 78 L24 78 Z" fill="#0b1329" stroke="#1d284a" strokeWidth="1.5" />
      
      {/* Hoodie GDG Brackets Logo */}
      <path d="M43 54 L38 58 L43 62" stroke="#3b8bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M57 54 L62 58 L57 62" stroke="#ff5a62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="51" y1="52" x2="49" y2="64" stroke="#ffd500" strokeWidth="1.5" strokeLinecap="round" />

      {/* Arms */}
      <path d="M30 42 L18 64 L24 68 L34 48 Z" fill="#0055bf" />
      <path d="M70 42 L82 64 L76 68 L66 48 Z" fill="#0055bf" />

      {/* Yellow Hands / Claws */}
      <path d="M16 63 C12 66 12 73 17 76 C20 78 24 74 22 70" stroke="#ffd500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M84 63 C88 66 88 73 83 76 C80 78 76 74 78 70" stroke="#ffd500" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Belt / Waist */}
      <rect x="25" y="78" width="50" height="7" fill="#1e293b" />
      
      {/* Legs */}
      <rect x="25" y="85" width="23" height="28" rx="2" fill="#111827" />
      <rect x="52" y="85" width="23" height="28" rx="2" fill="#111827" />
      <line x1="49" y1="85" x2="51" y2="113" stroke="#000000" strokeWidth="2" />

      {/* Feet Toe studs */}
      <rect x="23" y="108" width="25" height="5" rx="1" fill="#0055bf" />
      <rect x="52" y="108" width="25" height="5" rx="1" fill="#0055bf" />
    </svg>
  );
}

/**
 * 3D Golden LEGO Trophy Cup Graphic for Prizes
 */
export function LegoTrophyGraphic({ width = 56, height = 56, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-lg ${className}`}
    >
      {/* Baseplate Pedestal */}
      <rect x="24" y="66" width="32" height="8" rx="2" fill="#b89900" />
      <rect x="26" y="64" width="28" height="4" rx="1" fill="#ffd500" />
      <rect x="35" y="52" width="10" height="13" fill="#e6c200" />

      {/* Trophy Body */}
      <path d="M26 18 L54 18 C54 36 46 52 40 52 C34 52 26 36 26 18 Z" fill="#ffd500" stroke="#b89900" strokeWidth="1.5" />
      <ellipse cx="40" cy="18" rx="14" ry="4" fill="#fff099" />

      {/* Handles */}
      <path d="M26 22 C16 22 14 34 22 40 C26 42 28 38 28 38" stroke="#ffd500" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M54 22 C64 22 66 34 58 40 C54 42 52 38 52 38" stroke="#ffd500" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Embossed Star */}
      <polygon points="40,28 42,33 47,33 43,36 45,41 40,38 35,41 37,36 33,33 38,33" fill="#ffffff" />
    </svg>
  );
}

