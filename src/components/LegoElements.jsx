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
  const s = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 transition-transform ${s} ${scheme.bg} ${scheme.ring} ${scheme.shadow} ${className}`}
    >
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
    <div className={`relative flex h-3.5 w-full overflow-hidden rounded-t-xl border-b border-black/20 shadow-sm ${className}`}>
      <div className="flex-1 bg-[#006CB7] flex items-center justify-center gap-1.5 border-r border-[#004B80]">
        <div className="w-2 h-2 rounded-full bg-[#42A5F5] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />
        <div className="w-2 h-2 rounded-full bg-[#42A5F5] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#E53935] flex items-center justify-center gap-1.5 border-r border-[#B71C1C]">
        <div className="w-2 h-2 rounded-full bg-[#EF5350] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />
        <div className="w-2 h-2 rounded-full bg-[#EF5350] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#FFD500] flex items-center justify-center gap-1.5 border-r border-[#C6A700]">
        <div className="w-2 h-2 rounded-full bg-[#FFF59D] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />
        <div className="w-2 h-2 rounded-full bg-[#FFF59D] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] hidden sm:block" />
      </div>
      <div className="flex-1 bg-[#00852B] flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#66BB6A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />
        <div className="w-2 h-2 rounded-full bg-[#66BB6A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] hidden sm:block" />
      </div>
    </div>
  );
}

/**
 * 3D Isometric / Orthographic LEGO Brick SVG
 */
export function LegoBrickGraphic({ color = 'red', width = 64, height = 48, className = '' }) {
  const palettes = {
    red: { top: '#EF5350', front: '#E53935', side: '#B71C1C', stud: '#FF8A80', studSide: '#C62828' },
    blue: { top: '#42A5F5', front: '#006CB7', side: '#004B80', stud: '#90CAF9', studSide: '#01579B' },
    yellow: { top: '#FFF59D', front: '#FFD500', side: '#C6A700', stud: '#FFF9C4', studSide: '#FBC02D' },
    green: { top: '#66BB6A', front: '#00852B', side: '#00581C', stud: '#A5D6A7', studSide: '#1B5E20' },
    orange: { top: '#FFA726', front: '#FF8C00', side: '#E65100', stud: '#FFCC80', studSide: '#EF6C00' },
  };

  const p = palettes[color] || palettes.red;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md ${className}`}
    >
      <polygon points="10,40 50,60 50,75 10,55" fill={p.front} />
      <polygon points="50,60 90,40 90,55 50,75" fill={p.side} />
      <polygon points="50,25 90,40 50,60 10,40" fill={p.top} />
      
      <ellipse cx="35" cy="40" rx="9" ry="5" fill={p.studSide} />
      <ellipse cx="35" cy="36" rx="9" ry="4.5" fill={p.stud} />

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
 * Recognizable, Animated LEGO Robot Mascot Component
 * poses: 'waving', 'coding', 'celebrating'
 */
export function LegoRobotGraphic({ pose = 'waving', size = 96, className = '' }) {
  return (
    <div className={`relative inline-block select-none filter drop-shadow-xl ${className}`}>
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 100 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Antenna with top red stud */}
        <line x1="50" y1="6" x2="50" y2="18" stroke="#718096" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="5" r="4.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        <ellipse cx="49" cy="3.5" rx="2" ry="1.2" fill="#FF8A80" />

        {/* Head Top Studs */}
        <ellipse cx="40" cy="19" rx="6" ry="2.5" fill="#C6A700" />
        <rect x="34" y="17" width="12" height="3" fill="#FFD500" rx="1" />
        <ellipse cx="40" cy="17" rx="6" ry="2" fill="#FFF59D" />

        <ellipse cx="60" cy="19" rx="6" ry="2.5" fill="#C6A700" />
        <rect x="54" y="17" width="12" height="3" fill="#FFD500" rx="1" />
        <ellipse cx="60" cy="17" rx="6" ry="2" fill="#FFF59D" />

        {/* Robot Head Brick */}
        <rect x="26" y="20" width="48" height="30" rx="5" fill="#FFD500" stroke="#C6A700" strokeWidth="2" />
        
        {/* Digital Visor / Screen */}
        <rect x="32" y="25" width="36" height="13" rx="3" fill="#1A202C" />
        
        {/* Glowing Robot LED Eyes */}
        <circle cx="41" cy="31.5" r="3" fill="#00E5FF" className="animate-pulse" />
        <circle cx="59" cy="31.5" r="3" fill="#00E5FF" className="animate-pulse" />
        <circle cx="42" cy="30.5" r="1" fill="#FFFFFF" />
        <circle cx="60" cy="30.5" r="1" fill="#FFFFFF" />

        {/* Robot Brick Smile */}
        <path d="M43 43 H57" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="43" r="1" fill="#E53935" />
        <circle cx="60" cy="43" r="1" fill="#00852B" />

        {/* Neck connector plate */}
        <rect x="42" y="50" width="16" height="4" rx="1" fill="#718096" />

        {/* Torso: Solid LEGO Brick Body (Blue or Red) */}
        <path d="M22 54 H78 L74 88 H26 Z" fill="#006CB7" stroke="#004B80" strokeWidth="2" />

        {/* Chest Studs / Dials */}
        <ellipse cx="36" cy="62" rx="4" ry="2" fill="#004B80" />
        <rect x="32" y="60" width="8" height="2" fill="#42A5F5" />
        <ellipse cx="36" cy="60" rx="4" ry="1.5" fill="#90CAF9" />

        <ellipse cx="64" cy="62" rx="4" ry="2" fill="#004B80" />
        <rect x="60" y="60" width="8" height="2" fill="#42A5F5" />
        <ellipse cx="64" cy="60" rx="4" ry="1.5" fill="#90CAF9" />

        {/* Chest GDG Brackets Logo / Core */}
        <rect x="36" y="68" width="28" height="14" rx="3" fill="#FFFFFF" stroke="#CBD5E0" strokeWidth="1" />
        <path d="M43 72 L39 75 L43 78" stroke="#006CB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M57 72 L61 75 L57 78" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="75" r="2.5" fill="#FFD500" />

        {/* Pose Arms */}
        {pose === 'waving' && (
          <>
            {/* Left Arm: resting */}
            <path d="M22 56 L12 74 L18 78 L26 62 Z" fill="#E53935" />
            <path d="M10 74 C6 77 6 85 13 87 C17 89 21 84 18 80" stroke="#FFD500" strokeWidth="4" strokeLinecap="round" fill="none" />
            
            {/* Right Arm: Waving High */}
            <path d="M78 56 L90 40 L96 44 L84 62 Z" fill="#E53935" />
            <path d="M90 38 C94 34 102 36 102 42 C102 47 96 48 94 44" stroke="#FFD500" strokeWidth="4" strokeLinecap="round" fill="none" />
          </>
        )}

        {pose === 'celebrating' && (
          <>
            {/* Both arms raised up */}
            <path d="M22 56 L10 38 L16 34 L26 52 Z" fill="#E53935" />
            <path d="M10 36 C6 32 10 24 16 26 C20 28 20 34 16 36" stroke="#FFD500" strokeWidth="4" strokeLinecap="round" fill="none" />
            
            <path d="M78 56 L90 38 L84 34 L74 52 Z" fill="#E53935" />
            <path d="M90 36 C94 32 90 24 84 26 C80 28 80 34 84 36" stroke="#FFD500" strokeWidth="4" strokeLinecap="round" fill="none" />
          </>
        )}

        {pose === 'coding' && (
          <>
            {/* Arms holding laptop */}
            <path d="M22 56 L16 72 L26 76 Z" fill="#E53935" />
            <path d="M78 56 L84 72 L74 76 Z" fill="#E53935" />
            {/* Miniature LEGO laptop */}
            <rect x="30" y="70" width="40" height="24" rx="2" fill="#2D3748" stroke="#1A202C" strokeWidth="1.5" />
            <rect x="33" y="73" width="34" height="15" rx="1" fill="#00E5FF" fillOpacity="0.3" />
            <line x1="36" y1="77" x2="52" y2="77" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="36" y1="81" x2="60" y2="81" stroke="#00E5FF" strokeWidth="1.5" />
          </>
        )}

        {/* Waist / Belt */}
        <rect x="25" y="88" width="50" height="7" rx="1" fill="#FF8C00" stroke="#E65100" strokeWidth="1" />
        <circle cx="50" cy="91.5" r="2" fill="#FFFFFF" />

        {/* Brick Legs */}
        <rect x="26" y="95" width="22" height="20" rx="2" fill="#252525" />
        <rect x="52" y="95" width="22" height="20" rx="2" fill="#252525" />
        <line x1="48" y1="95" x2="52" y2="115" stroke="#111827" strokeWidth="2" />

        {/* Foot Studs */}
        <rect x="24" y="115" width="26" height="6" rx="2" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        <rect x="50" y="115" width="26" height="6" rx="2" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
        <circle cx="31" cy="118" r="2" fill="#EF5350" />
        <circle cx="43" cy="118" r="2" fill="#EF5350" />
        <circle cx="57" cy="118" r="2" fill="#EF5350" />
        <circle cx="69" cy="118" r="2" fill="#EF5350" />
      </svg>
    </div>
  );
}

/**
 * Miniature LEGO Campus Building Structure 1 (MMMUT Seminar Hall Complex)
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

      {/* Main Building Block (Warm Sand Brick) */}
      <rect x="20" y="55" width="100" height="60" rx="3" fill="#F5EBD2" stroke="#D8CCA8" strokeWidth="2" />
      
      {/* Red Brick Header Strip with Studs */}
      <rect x="16" y="50" width="108" height="9" rx="1.5" fill="#E53935" stroke="#B71C1C" strokeWidth="1" />
      <ellipse cx="28" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="48" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="68" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="88" cy="48" rx="4" ry="1.5" fill="#EF5350" />
      <ellipse cx="108" cy="48" rx="4" ry="1.5" fill="#EF5350" />

      {/* Central Tower (Blue Brick) */}
      <rect x="52" y="22" width="36" height="30" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />
      
      {/* Clock / GDG Symbol on Tower */}
      <circle cx="70" cy="34" r="7" fill="#FFFFFF" stroke="#FFD500" strokeWidth="1.5" />
      <line x1="70" y1="34" x2="70" y2="30" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="34" x2="73" y2="34" stroke="#006CB7" strokeWidth="1.5" strokeLinecap="round" />

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
 * Miniature LEGO Innovation Hub Structure 2 (Multi-tier Brick Facility)
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

      {/* Ground Floor (Blue Bricks) */}
      <rect x="18" y="65" width="94" height="40" rx="2" fill="#006CB7" stroke="#004B80" strokeWidth="1.5" />
      
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
