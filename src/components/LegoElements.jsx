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
      bg: 'bg-gradient-to-br from-[#EF5350] via-[#E53935] to-[#B71C1C]',
      ring: 'ring-1 ring-[#FF8A80]/60',
      shadow: 'shadow-[0_2px_4px_rgba(183,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]',
      dot: 'bg-[#FF8A80]/50 shadow-inner',
    },
    blue: {
      bg: 'bg-gradient-to-br from-[#42A5F5] via-[#006CB7] to-[#004B80]',
      ring: 'ring-1 ring-[#90CAF9]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,75,128,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]',
      dot: 'bg-[#BBDEFB]/50 shadow-inner',
    },
    yellow: {
      bg: 'bg-gradient-to-br from-[#FFF59D] via-[#FFD500] to-[#C6A700]',
      ring: 'ring-1 ring-[#FFF9C4]/70',
      shadow: 'shadow-[0_2px_4px_rgba(198,167,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.8)]',
      dot: 'bg-[#FFFDE7]/60 shadow-inner',
    },
    green: {
      bg: 'bg-gradient-to-br from-[#66BB6A] via-[#00852B] to-[#00581C]',
      ring: 'ring-1 ring-[#A5D6A7]/60',
      shadow: 'shadow-[0_2px_4px_rgba(0,88,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]',
      dot: 'bg-[#C8E6C9]/50 shadow-inner',
    },
    orange: {
      bg: 'bg-gradient-to-br from-[#FFA726] via-[#FF8C00] to-[#E65100]',
      ring: 'ring-1 ring-[#FFCC80]/60',
      shadow: 'shadow-[0_2px_4px_rgba(230,81,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]',
      dot: 'bg-[#FFE0B2]/50 shadow-inner',
    },
    white: {
      bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F5EBD2] to-[#E0D4B8]',
      ring: 'ring-1 ring-white/90',
      shadow: 'shadow-[0_2px_4px_rgba(100,80,50,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)]',
      dot: 'bg-white/80 shadow-inner',
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#4B5563] via-[#252525] to-[#111827]',
      ring: 'ring-1 ring-slate-400/30',
      shadow: 'shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)]',
      dot: 'bg-slate-400/30 shadow-inner',
    },
  };

  const scheme = colorStyles[color] || colorStyles.blue;

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 ${sizeMap[size] || sizeMap.md} ${scheme.bg} ${scheme.ring} ${scheme.shadow} ${className}`}
    >
      <div className={`w-1/2 h-1/2 rounded-full border border-black/15 ${scheme.dot}`} />
    </div>
  );
}

/**
 * Row of multiple studs across a brick plate edge
 */
export function LegoStudRow({ count = 4, color = 'blue', size = 'sm', className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <LegoStud key={i} color={color} size={size} />
      ))}
    </div>
  );
}

/**
 * Top 4-Color interlocking LEGO Google Brick Bar
 */
export function LegoGoogleBrickBar({ className = '' }) {
  return (
    <div className={`h-2 flex w-full overflow-hidden shadow-sm ${className}`}>
      <div className="flex-1 bg-[#006CB7] border-r border-[#004B80]" />
      <div className="flex-1 bg-[#E53935] border-r border-[#B71C1C]" />
      <div className="flex-1 bg-[#FFD500] border-r border-[#C6A700]" />
      <div className="flex-1 bg-[#00852B]" />
    </div>
  );
}

/**
 * 3D Isometric LEGO Brick with visible top cylindrical studs
 */
export function LegoBrickGraphic({ color = 'blue', width = 64, height = 48, className = '' }) {
  const colorMap = {
    blue: {
      top: '#006CB7',
      front: '#004B80',
      side: '#00365C',
      stud: '#42A5F5',
      studSide: '#006CB7',
    },
    red: {
      top: '#E53935',
      front: '#B71C1C',
      side: '#8E0000',
      stud: '#EF5350',
      studSide: '#E53935',
    },
    yellow: {
      top: '#FFD500',
      front: '#C6A700',
      side: '#9E8500',
      stud: '#FFF59D',
      studSide: '#FFD500',
    },
    green: {
      top: '#00852B',
      front: '#00581C',
      side: '#003E13',
      stud: '#66BB6A',
      studSide: '#00852B',
    },
    orange: {
      top: '#FF8C00',
      front: '#E65100',
      side: '#BF360C',
      stud: '#FFA726',
      studSide: '#FF8C00',
    },
  };

  const p = colorMap[color] || colorMap.blue;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none drop-shadow-md ${className}`}
    >
      {/* Front Face */}
      <polygon points="10,48 50,70 50,90 10,68" fill={p.front} />
      {/* Right Side Face */}
      <polygon points="50,70 90,48 90,68 50,90" fill={p.side} />
      {/* Top Face */}
      <polygon points="50,26 90,48 50,70 10,48" fill={p.top} />

      {/* Stud 1 (Left) */}
      <ellipse cx="35" cy="40" rx="9" ry="5" fill={p.studSide} />
      <ellipse cx="35" cy="36" rx="9" ry="4.5" fill={p.stud} />

      {/* Stud 2 (Right) */}
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
 * AUTHENTIC PHYSICAL BRICK-BUILT LEGO ROBOT MASCOT
 * Built with visible rectangular LEGO bricks, visible circular studs with rim highlights,
 * separate brick joints, brick arms with LEGO C-claws, and blocky proportions.
 * Poses: 'waving', 'floating', 'coding', 'celebrating'
 */
export function LegoRobotGraphic({ pose = 'waving', size = 96, className = '' }) {
  const isFloating = pose === 'floating';

  return (
    <div className={`relative inline-block select-none filter drop-shadow-xl ${isFloating ? 'animate-lego-float' : ''} ${className}`}>
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 100 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* ================= HEAD SECTION ================= */}
        <g className={pose === 'waving' ? '' : 'animate-lego-head'}>
          {/* Antenna Post (1x1 round plate + cylinder + top red round stud) */}
          <line x1="50" y1="4" x2="50" y2="16" stroke="#4A5568" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="50" cy="16" rx="4" ry="1.5" fill="#2D3748" />
          {/* Red Translucent Stud on Antenna Tip */}
          <ellipse cx="50" cy="4" rx="4" ry="2" fill="#B71C1C" />
          <ellipse cx="50" cy="3" rx="3.5" ry="1.5" fill="#EF5350" />
          <circle cx="49" cy="2.5" r="1" fill="#FFFFFF" />

          {/* HEAD TOP STUDS (Two 1x1 studs on 2x4 head brick) */}
          {/* Left Stud */}
          <ellipse cx="38" cy="18" rx="5" ry="2.2" fill="#C6A700" />
          <rect x="33" y="16" width="10" height="2" fill="#FFD500" />
          <ellipse cx="38" cy="16" rx="5" ry="2" fill="#FFF59D" />
          <circle cx="37" cy="15.5" r="1.2" fill="#FFFFFF" opacity="0.8" />

          {/* Right Stud */}
          <ellipse cx="62" cy="18" rx="5" ry="2.2" fill="#C6A700" />
          <rect x="57" y="16" width="10" height="2" fill="#FFD500" />
          <ellipse cx="62" cy="16" rx="5" ry="2" fill="#FFF59D" />
          <circle cx="61" cy="15.5" r="1.2" fill="#FFFFFF" opacity="0.8" />

          {/* HEAD BRICK (2x4 Yellow Brick with Horizontal Plate Seams) */}
          {/* Upper Head Brick Plate */}
          <rect x="25" y="18" width="50" height="11" rx="2" fill="#FFD500" stroke="#C6A700" strokeWidth="1.5" />
          <line x1="25" y1="23" x2="75" y2="23" stroke="#E6BE00" strokeWidth="0.8" opacity="0.7" />

          {/* Center Visor Plate (1x4 Black Plate with LED Matrix Eyes) */}
          <rect x="27" y="27" width="46" height="12" fill="#1A202C" stroke="#000000" strokeWidth="1" />
          {/* Cyan LED Eyes (Square pixel LEGO style) */}
          <rect x="34" y="30" width="7" height="6" rx="1" fill="#00E5FF" />
          <rect x="36" y="32" width="3" height="2" fill="#FFFFFF" />
          <rect x="59" y="30" width="7" height="6" rx="1" fill="#00E5FF" />
          <rect x="61" y="32" width="3" height="2" fill="#FFFFFF" />

          {/* Lower Head Chin Plate */}
          <rect x="25" y="39" width="50" height="9" rx="2" fill="#FFD500" stroke="#C6A700" strokeWidth="1.5" />
          {/* Brick Mouth Grill */}
          <line x1="39" y1="43" x2="61" y2="43" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
          <line x1="43" y1="41" x2="43" y2="45" stroke="#252525" strokeWidth="1.5" />
          <line x1="50" y1="41" x2="50" y2="45" stroke="#252525" strokeWidth="1.5" />
          <line x1="57" y1="41" x2="57" y2="45" stroke="#252525" strokeWidth="1.5" />

          {/* Side Ears / Connector Pegs (1x1 Round Stud Clamps) */}
          <rect x="22" y="28" width="3" height="9" rx="1" fill="#FF8C00" stroke="#C6A700" strokeWidth="0.8" />
          <rect x="75" y="28" width="3" height="9" rx="1" fill="#FF8C00" stroke="#C6A700" strokeWidth="0.8" />
        </g>

        {/* Neck Turntable Plate (1x2 Dark Charcoal Plate) */}
        <rect x="42" y="48" width="16" height="4" rx="1" fill="#252525" stroke="#111827" strokeWidth="1" />

        {/* ================= TORSO SECTION ================= */}
        {/* SHOULDER STUDS (Visible raised LEGO studs on left & right shoulders!) */}
        <ellipse cx="27" cy="52" rx="4" ry="1.8" fill="#B71C1C" />
        <rect x="23" y="50" width="8" height="2" fill="#E53935" />
        <ellipse cx="27" cy="50" rx="4" ry="1.6" fill="#EF5350" />

        <ellipse cx="73" cy="52" rx="4" ry="1.8" fill="#B71C1C" />
        <rect x="69" y="50" width="8" height="2" fill="#E53935" />
        <ellipse cx="73" cy="50" rx="4" ry="1.6" fill="#EF5350" />

        {/* UPPER CHEST BRICK (2x4 Red Brick with beveled edges) */}
        <rect x="20" y="52" width="60" height="16" rx="2" fill="#E53935" stroke="#B71C1C" strokeWidth="1.5" />
        
        {/* Middle Torso Seam Line */}
        <line x1="20" y1="68" x2="80" y2="68" stroke="#900C0C" strokeWidth="1.5" />

        {/* LOWER TORSO BRICK (2x4 Blue Brick with System Meters) */}
        <rect x="21" y="68" width="58" height="18" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />

        {/* Chest Display: Translucent Round Dials & Printed Status Plate */}
        <rect x="32" y="56" width="36" height="10" rx="2" fill="#FFFFFF" stroke="#CBD5E0" strokeWidth="1" />
        {/* Mini GDG Brackets on Chest */}
        <path d="M38 61 L35 63.5 L38 66" stroke="#006CB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M46 61 L49 63.5 L46 66" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="56" cy="61" r="2" fill="#00852B" />
        <circle cx="62" cy="61" r="2" fill="#FFD500" />

        {/* Lower Torso Gauge Grids */}
        <rect x="30" y="72" width="18" height="9" rx="1" fill="#1A202C" />
        <line x1="33" y1="75" x2="45" y2="75" stroke="#00E5FF" strokeWidth="1" />
        <line x1="33" y1="78" x2="42" y2="78" stroke="#FFD500" strokeWidth="1" />
        
        {/* Yellow 1x1 Round Stud Dial on abdomen */}
        <circle cx="60" cy="76" r="3.5" fill="#FFD500" stroke="#C6A700" strokeWidth="1" />
        <circle cx="59.5" cy="75" r="1" fill="#FFFFFF" />

        {/* WAIST / BELT PLATE (1x4 Dark Charcoal Brick with Yellow Center Stud) */}
        <rect x="22" y="86" width="56" height="7" rx="1.5" fill="#252525" stroke="#111827" strokeWidth="1.2" />
        <rect x="47" y="87.5" width="6" height="4" rx="1" fill="#FFD500" stroke="#C6A700" strokeWidth="0.8" />

        {/* ================= ARMS & HANDS ================= */}
        {/* POSE 1: WAVING */}
        {pose === 'waving' && (
          <>
            {/* Left Arm: Resting at side (Upper Brick + Lower Brick + Claw) */}
            <g>
              <rect x="11" y="55" width="8" height="14" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
              <rect x="11" y="69" width="8" height="12" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
              {/* Joint ring */}
              <circle cx="15" cy="69" r="2" fill="#252525" />
              {/* Classic LEGO Yellow C-Claw Hand */}
              <path d="M11 81 C7 83 7 92 14 93 C18 94 21 89 19 86" stroke="#FFD500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Right Arm: Waving high with subtle oscillation animation */}
            <g className="animate-lego-wave">
              {/* Shoulder joint */}
              <circle cx="81" cy="57" r="3.5" fill="#252525" />
              {/* Upper arm angled brick */}
              <polygon points="80,54 94,40 98,44 84,58" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
              {/* Forearm brick */}
              <polygon points="94,40 99,28 104,30 99,44" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
              {/* Waving LEGO Yellow C-Claw Hand */}
              <path d="M99 26 C95 21 102 16 107 20 C109 23 107 28 102 28" stroke="#FFD500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          </>
        )}

        {/* POSE 2: CODING (Holding Brick Laptop) */}
        {pose === 'coding' && (
          <>
            {/* Arms reaching forward */}
            <rect x="11" y="55" width="9" height="16" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
            <rect x="14" y="70" width="14" height="7" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
            <path d="M28 71 C30 73 30 76 27 78" stroke="#FFD500" strokeWidth="3" strokeLinecap="round" fill="none" />

            <rect x="80" y="55" width="9" height="16" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
            <rect x="72" y="70" width="14" height="7" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
            <path d="M72 71 C70 73 70 76 73 78" stroke="#FFD500" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* MINIATURE LEGO LAPTOP (Folded Brick Display) */}
            {/* Keyboard base plate with 4 studs */}
            <rect x="28" y="74" width="44" height="16" rx="2" fill="#2D3748" stroke="#1A202C" strokeWidth="1.2" />
            <circle cx="36" cy="80" r="1.5" fill="#718096" />
            <circle cx="44" cy="80" r="1.5" fill="#718096" />
            <circle cx="56" cy="80" r="1.5" fill="#718096" />
            <circle cx="64" cy="80" r="1.5" fill="#718096" />
            {/* Screen tile with cyan code lines */}
            <rect x="30" y="58" width="40" height="18" rx="2" fill="#1A202C" stroke="#2D3748" strokeWidth="1.2" />
            <rect x="33" y="60" width="34" height="14" rx="1" fill="#002B49" />
            <line x1="36" y1="64" x2="52" y2="64" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="36" y1="68" x2="60" y2="68" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="36" y1="71" x2="48" y2="71" stroke="#FFD500" strokeWidth="1.2" strokeLinecap="round" />
          </>
        )}

        {/* POSE 3: CELEBRATING */}
        {(pose === 'celebrating' || pose === 'floating') && (
          <>
            {/* Left arm up */}
            <polygon points="21,55 9,38 14,34 26,51" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
            <path d="M9 36 C5 31 11 25 16 28 C19 30 19 35 15 37" stroke="#FFD500" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Right arm up */}
            <polygon points="79,55 91,38 86,34 74,51" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
            <path d="M91 36 C95 31 89 25 84 28 C81 30 81 35 85 37" stroke="#FFD500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* ================= LEGS & FEET ================= */}
        {/* Left Leg: Stack of 2 Rectangular Bricks */}
        <rect x="27" y="93" width="19" height="11" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
        <rect x="27" y="104" width="19" height="11" fill="#004B80" stroke="#00365C" strokeWidth="1" />

        {/* Right Leg: Stack of 2 Rectangular Bricks */}
        <rect x="54" y="93" width="19" height="11" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
        <rect x="54" y="104" width="19" height="11" fill="#004B80" stroke="#00365C" strokeWidth="1" />

        {/* Distinct 8px Physical Gap Between Left & Right Leg */}
        <rect x="46" y="93" width="8" height="22" fill="#FFF8E7" opacity="0.9" />

        {/* FEET WITH VISIBLE CIRCULAR LEGO STUDS! */}
        {/* Left Foot Brick */}
        <rect x="22" y="115" width="24" height="7" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        {/* Left Foot Stud 1 */}
        <ellipse cx="28" cy="116" rx="3.5" ry="1.5" fill="#EF5350" />
        {/* Left Foot Stud 2 */}
        <ellipse cx="38" cy="116" rx="3.5" ry="1.5" fill="#EF5350" />

        {/* Right Foot Brick */}
        <rect x="54" y="115" width="24" height="7" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        {/* Right Foot Stud 1 */}
        <ellipse cx="60" cy="116" rx="3.5" ry="1.5" fill="#EF5350" />
        {/* Right Foot Stud 2 */}
        <ellipse cx="70" cy="116" rx="3.5" ry="1.5" fill="#EF5350" />
      </svg>
    </div>
  );
}

/**
 * MINIATURE LEGO SPACE ROCKET (Retro Classic LEGO Space Style)
 * Built from stacked cylindrical bricks, nose cone with stud, side fin plates, and thruster flame
 */
export function LegoRocketGraphic({ width = 70, height = 90, className = '' }) {
  return (
    <div className={`relative inline-block select-none filter drop-shadow-lg ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Nose Cone Red with top stud */}
        <polygon points="40,8 30,28 50,28" fill="#E53935" stroke="#B71C1C" strokeWidth="1.5" />
        <ellipse cx="40" cy="8" rx="3" ry="1.5" fill="#EF5350" />
        <ellipse cx="40" cy="28" rx="10" ry="3" fill="#B71C1C" />

        {/* Upper White Cylindrical Brick Plate */}
        <rect x="30" y="28" width="20" height="16" fill="#FFFFFF" stroke="#CBD5E0" strokeWidth="1.5" />
        <line x1="30" y1="36" x2="50" y2="36" stroke="#E2E8F0" strokeWidth="1" />

        {/* Cockpit / Porthole Translucent Blue Brick */}
        <circle cx="40" cy="36" r="4.5" fill="#006CB7" stroke="#004B80" strokeWidth="1" />
        <circle cx="39" cy="35" r="1.5" fill="#90CAF9" />

        {/* Middle Red Ring Plate */}
        <rect x="28" y="44" width="24" height="6" rx="1" fill="#E53935" stroke="#B71C1C" strokeWidth="1.2" />

        {/* Lower Main Hull White Brick */}
        <rect x="29" y="50" width="22" height="20" fill="#FFFFFF" stroke="#CBD5E0" strokeWidth="1.5" />
        <text x="40" y="63" fill="#006CB7" fontSize="5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">GDG</text>

        {/* Left LEGO Fin Plate */}
        <polygon points="29,56 14,76 29,72" fill="#006CB7" stroke="#004B80" strokeWidth="1.2" />
        {/* Right LEGO Fin Plate */}
        <polygon points="51,56 66,76 51,72" fill="#006CB7" stroke="#004B80" strokeWidth="1.2" />

        {/* Engine Nozzle Dark Grey Brick */}
        <polygon points="32,70 28,78 52,78 48,70" fill="#252525" stroke="#111827" strokeWidth="1.5" />

        {/* Translucent Flame Bricks (Orange & Yellow) */}
        <polygon points="32,78 40,98 48,78" fill="#FF8C00" opacity="0.9" />
        <polygon points="35,78 40,92 45,78" fill="#FFD500" />
      </svg>
    </div>
  );
}

/**
 * MINIATURE LEGO DEVELOPER WORKSTATION
 * Brick-built monitor, keyboard plate with studs, CPU tower, and red LEGO coffee mug
 */
export function LegoWorkstationGraphic({ width = 110, height = 90, className = '' }) {
  return (
    <div className={`relative inline-block select-none filter drop-shadow-md ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk Top Plate (Sand Brown 2x8 Brick with edge studs) */}
        <rect x="15" y="52" width="90" height="9" rx="1.5" fill="#F5EBD2" stroke="#D5C7AB" strokeWidth="1.5" />
        <ellipse cx="25" cy="52" rx="3.5" ry="1.2" fill="#E8DCC4" />
        <ellipse cx="95" cy="52" rx="3.5" ry="1.2" fill="#E8DCC4" />

        {/* Desk Legs (4x4 column bricks) */}
        <rect x="20" y="61" width="8" height="30" fill="#E8DCC4" stroke="#D5C7AB" strokeWidth="1" />
        <rect x="92" y="61" width="8" height="30" fill="#E8DCC4" stroke="#D5C7AB" strokeWidth="1" />
        {/* Floor Foot Studs */}
        <rect x="18" y="91" width="12" height="4" rx="1" fill="#006CB7" />
        <rect x="90" y="91" width="12" height="4" rx="1" fill="#006CB7" />

        {/* Brick Monitor Screen (Dark Grey with Cyan Code & Stand) */}
        {/* Monitor Swivel Stand */}
        <rect x="57" y="42" width="6" height="11" fill="#252525" />
        <rect x="52" y="50" width="16" height="3" rx="1" fill="#1A202C" />
        {/* Monitor Bevel (2x4 Brick screen) */}
        <rect x="36" y="16" width="48" height="28" rx="2" fill="#252525" stroke="#111827" strokeWidth="1.5" />
        {/* Top Monitor Studs */}
        <ellipse cx="44" cy="16" rx="3" ry="1.2" fill="#4B5563" />
        <ellipse cx="76" cy="16" rx="3" ry="1.2" fill="#4B5563" />
        {/* Screen Display */}
        <rect x="39" y="19" width="42" height="22" rx="1" fill="#002B49" />
        <line x1="43" y1="24" x2="62" y2="24" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="43" y1="28" x2="74" y2="28" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="43" y1="32" x2="56" y2="32" stroke="#FFD500" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="43" y1="36" x2="68" y2="36" stroke="#00852B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Keyboard Plate with Tiny Studs */}
        <rect x="42" y="54" width="24" height="6" rx="1" fill="#252525" stroke="#111827" strokeWidth="0.8" />
        <circle cx="47" cy="57" r="0.8" fill="#718096" />
        <circle cx="51" cy="57" r="0.8" fill="#718096" />
        <circle cx="55" cy="57" r="0.8" fill="#718096" />
        <circle cx="59" cy="57" r="0.8" fill="#718096" />
        <circle cx="63" cy="57" r="0.8" fill="#718096" />

        {/* Red LEGO Coffee Mug on Desk */}
        <rect x="74" y="43" width="9" height="10" rx="1" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        {/* Mug Handle */}
        <path d="M83 45 C86 45 86 51 83 51" stroke="#E53935" strokeWidth="1.8" fill="none" />
        {/* Steam */}
        <path d="M78 40 Q80 37 77 34" stroke="#D5C7AB" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

/**
 * COLORFUL STACKED LEGO BRICKS CLUSTER
 * Interlocking 2x4 and 2x2 bricks in Red, Blue, Yellow, and Green with real studs
 */
export function LegoBrickStackGraphic({ width = 80, height = 70, className = '' }) {
  return (
    <div className={`relative inline-block select-none filter drop-shadow-md ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 90 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom Red 2x4 Brick */}
        <rect x="10" y="50" width="70" height="18" rx="2" fill="#E53935" stroke="#B71C1C" strokeWidth="1.5" />
        <ellipse cx="20" cy="50" rx="4.5" ry="2" fill="#EF5350" />
        <ellipse cx="38" cy="50" rx="4.5" ry="2" fill="#EF5350" />
        <ellipse cx="56" cy="50" rx="4.5" ry="2" fill="#EF5350" />
        <ellipse cx="72" cy="50" rx="4.5" ry="2" fill="#EF5350" />

        {/* Middle Blue 2x3 Brick (Staggered) */}
        <rect x="22" y="32" width="54" height="18" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />
        <ellipse cx="34" cy="32" rx="4.5" ry="2" fill="#42A5F5" />
        <ellipse cx="50" cy="32" rx="4.5" ry="2" fill="#42A5F5" />
        <ellipse cx="66" cy="32" rx="4.5" ry="2" fill="#42A5F5" />

        {/* Top Yellow 2x2 Brick */}
        <rect x="36" y="14" width="36" height="18" rx="2" fill="#FFD500" stroke="#C6A700" strokeWidth="1.5" />
        <ellipse cx="46" cy="14" rx="4.5" ry="2" fill="#FFF59D" />
        <ellipse cx="62" cy="14" rx="4.5" ry="2" fill="#FFF59D" />

        {/* Tiny Green 1x1 Round Plate on Top Corner */}
        <ellipse cx="46" cy="10" rx="3.5" ry="1.6" fill="#00852B" stroke="#00581C" strokeWidth="0.8" />
        <ellipse cx="46" cy="8.5" rx="3" ry="1.2" fill="#66BB6A" />
      </svg>
    </div>
  );
}

/**
 * MINIATURE LEGO CAMPUS GATEWAY ARCH
 * Brick gateway structure with studs on top and DevSync flag
 */
export function LegoCampusGatewayGraphic({ width = 110, height = 90, className = '' }) {
  return (
    <div className={`relative inline-block select-none filter drop-shadow-md ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Baseplate Strip */}
        <rect x="10" y="86" width="100" height="8" rx="1.5" fill="#00852B" stroke="#00581C" strokeWidth="1.2" />
        <ellipse cx="25" cy="86" rx="3" ry="1.2" fill="#66BB6A" />
        <ellipse cx="95" cy="86" rx="3" ry="1.2" fill="#66BB6A" />

        {/* Left Brick Pillar */}
        <rect x="18" y="32" width="18" height="54" rx="1.5" fill="#FFFFFF" stroke="#D5C7AB" strokeWidth="1.2" />
        <line x1="18" y1="46" x2="36" y2="46" stroke="#E53935" strokeWidth="3" />
        <line x1="18" y1="64" x2="36" y2="64" stroke="#006CB7" strokeWidth="3" />

        {/* Right Brick Pillar */}
        <rect x="84" y="32" width="18" height="54" rx="1.5" fill="#FFFFFF" stroke="#D5C7AB" strokeWidth="1.2" />
        <line x1="84" y1="46" x2="102" y2="46" stroke="#E53935" strokeWidth="3" />
        <line x1="84" y1="64" x2="102" y2="64" stroke="#006CB7" strokeWidth="3" />

        {/* Cross Arch Beam (Red Brick Beam) */}
        <rect x="14" y="24" width="92" height="12" rx="2" fill="#E53935" stroke="#B71C1C" strokeWidth="1.5" />
        {/* Top Studs across the beam */}
        <ellipse cx="24" cy="24" rx="3.5" ry="1.4" fill="#EF5350" />
        <ellipse cx="44" cy="24" rx="3.5" ry="1.4" fill="#EF5350" />
        <ellipse cx="60" cy="24" rx="3.5" ry="1.4" fill="#EF5350" />
        <ellipse cx="76" cy="24" rx="3.5" ry="1.4" fill="#EF5350" />
        <ellipse cx="96" cy="24" rx="3.5" ry="1.4" fill="#EF5350" />

        {/* MMMUT Banner Tile */}
        <rect x="34" y="27" width="52" height="6" rx="1" fill="#FFD500" />
        <text x="60" y="32" fill="#252525" fontSize="4.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">MMMUT CAMPUS</text>

        {/* Top Flag Post on Center Stud */}
        <line x1="60" y1="12" x2="60" y2="24" stroke="#252525" strokeWidth="1.5" />
        <polygon points="60,12 72,16 60,20" fill="#006CB7" />
      </svg>
    </div>
  );
}

/**
 * Miniature LEGO Campus Building Structure (MMMUT Seminar Hall Complex)
 */
export function LegoCampusBuildingGraphic({ width = 120, height = 110, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none drop-shadow-lg ${className}`}
    >
      {/* Foundation Baseplate */}
      <rect x="10" y="115" width="120" height="10" rx="2" fill="#00852B" stroke="#00581C" strokeWidth="1.5" />
      <circle cx="25" cy="117" r="2.5" fill="#43A047" />
      <circle cx="45" cy="117" r="2.5" fill="#43A047" />
      <circle cx="65" cy="117" r="2.5" fill="#43A047" />
      <circle cx="85" cy="117" r="2.5" fill="#43A047" />
      <circle cx="105" cy="117" r="2.5" fill="#43A047" />

      {/* Main Building Block (Warm Sand Brick with visible brick course seams) */}
      <rect x="20" y="55" width="100" height="60" rx="3" fill="#F5EBD2" stroke="#D8CCA8" strokeWidth="2" />
      <line x1="20" y1="75" x2="120" y2="75" stroke="#E8DCC4" strokeWidth="1" />
      <line x1="20" y1="95" x2="120" y2="95" stroke="#E8DCC4" strokeWidth="1" />

      {/* Red Brick Header Strip with Studs */}
      <rect x="16" y="50" width="108" height="9" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
      <ellipse cx="28" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="48" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="68" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="88" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="108" cy="48" rx="4" ry="1.5" fill="#EF5350" />

      {/* Central Tower (Blue Brick) */}
      <rect x="52" y="22" width="36" height="30" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />
      <line x1="52" y1="36" x2="88" y2="36" stroke="#004B80" strokeWidth="0.8" />
      
      {/* Clock / GDG Symbol on Tower */}
      <circle cx="70" cy="32" r="6.5" fill="#FFFFFF" stroke="#FFD500" strokeWidth="1.5" />
      <line x1="70" y1="32" x2="70" y2="28" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="32" x2="73" y2="32" stroke="#006CB7" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tower Roof Spire / Studs */}
      <polygon points="70,6 52,22 88,22" fill="#FFD500" stroke="#C6A700" strokeWidth="1.5" />
      <circle cx="70" cy="5" r="3" fill="#E53935" />

      {/* Windows (Blue Glass LEGO Bricks) */}
      <rect x="30" y="66" width="16" height="18" rx="2" fill="#42A5F5" stroke="#004B80" strokeWidth="1.5" />
      <line x1="38" y1="66" x2="38" y2="84" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
      <rect x="94" y="66" width="16" height="18" rx="2" fill="#42A5F5" stroke="#004B80" strokeWidth="1.5" />
      <line x1="102" y1="66" x2="102" y2="84" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />

      {/* Arched Double Door (Seminar Hall Entrance) */}
      <path d="M56 115 V90 Q70 82 84 90 V115 Z" fill="#252525" stroke="#1A202C" strokeWidth="1.5" />
      <line x1="70" y1="86" x2="70" y2="115" stroke="#E53935" strokeWidth="1.5" />
      <circle cx="67" cy="103" r="1.5" fill="#FFD500" />
      <circle cx="73" cy="103" r="1.5" fill="#FFD500" />

      {/* Signboard */}
      <rect x="42" y="53" width="56" height="6" rx="1" fill="#FFD500" />
      <text x="70" y="58" fill="#252525" fontSize="4.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SEMINAR HALL</text>
    </svg>
  );
}

/**
 * Miniature LEGO Innovation Hub Structure (Multi-tier Brick Facility)
 */
export function LegoInnovationLabGraphic({ width = 110, height = 100, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none drop-shadow-lg ${className}`}
    >
      {/* Baseplate */}
      <rect x="10" y="105" width="110" height="10" rx="2" fill="#FF8C00" stroke="#E65100" strokeWidth="1.5" />
      <circle cx="25" cy="107" r="2.5" fill="#FFA726" />
      <circle cx="50" cy="107" r="2.5" fill="#FFA726" />
      <circle cx="75" cy="107" r="2.5" fill="#FFA726" />
      <circle cx="100" cy="107" r="2.5" fill="#FFA726" />

      {/* Ground Floor (Blue Bricks with Course Line) */}
      <rect x="18" y="65" width="94" height="40" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />
      <line x1="18" y1="85" x2="112" y2="85" stroke="#004B80" strokeWidth="1" />
      
      {/* Upper Floor (White/Cream Modern Tech Studio) */}
      <rect x="30" y="35" width="70" height="30" rx="2" fill="#FFFFFF" stroke="#D8CCA8" strokeWidth="1.5" />

      {/* Roof with Solar / Studs */}
      <rect x="26" y="30" width="78" height="6" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
      <ellipse cx="38" cy="28" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="54" cy="28" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="70" cy="28" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="86" cy="28" rx="4" ry="1.5" fill="#EF5350" />

      {/* Rooftop Antenna */}
      <line x1="70" y1="12" x2="70" y2="30" stroke="#718096" strokeWidth="2.5" />
      <circle cx="70" cy="10" r="3.5" fill="#00E5FF" />

      {/* Windows & Lab Screens */}
      <rect x="26" y="75" width="22" height="18" rx="2" fill="#00E5FF" fillOpacity="0.4" stroke="#42A5F5" strokeWidth="1" />
      <rect x="82" y="75" width="22" height="18" rx="2" fill="#00E5FF" fillOpacity="0.4" stroke="#42A5F5" strokeWidth="1" />
      
      <rect x="38" y="42" width="18" height="14" rx="2" fill="#FFD500" stroke="#C6A700" strokeWidth="1" />
      <rect x="74" y="42" width="18" height="14" rx="2" fill="#66BB6A" stroke="#00581C" strokeWidth="1" />

      {/* Glass Sliding Entrance */}
      <rect x="54" y="75" width="22" height="30" fill="#252525" />
      <line x1="65" y1="75" x2="65" y2="105" stroke="#FFD500" strokeWidth="1" />

      {/* Sign */}
      <rect x="36" y="63" width="58" height="5" rx="1" fill="#FFD500" />
      <text x="65" y="67" fill="#252525" fontSize="4" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INNOVATION LAB</text>
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
      <rect x="24" y="66" width="32" height="8" rx="2" fill="#C6A700" />
      <rect x="26" y="64" width="28" height="4" rx="1" fill="#FFD500" />
      <rect x="35" y="52" width="10" height="13" fill="#E6C200" />

      <path d="M26 18 L54 18 C54 36 46 52 40 52 C34 52 26 36 26 18 Z" fill="#FFD500" stroke="#C6A700" strokeWidth="1.5" />
      <ellipse cx="40" cy="18" rx="14" ry="4" fill="#FFF9C4" />

      <path d="M26 22 C16 22 14 34 22 40 C26 42 28 38 28 38" stroke="#FFD500" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M54 22 C64 22 66 34 58 40 C54 42 52 38 52 38" stroke="#FFD500" strokeWidth="3" strokeLinecap="round" fill="none" />

      <polygon points="40,28 42,33 47,33 43,36 45,41 40,38 35,41 37,36 33,33 38,33" fill="#FFFFFF" />
    </svg>
  );
}
