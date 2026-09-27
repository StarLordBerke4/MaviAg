import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 36 : size === 'md' ? 44 : size === 'lg' ? 56 : 72;
  const textSize = size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : size === 'lg' ? 'text-3xl' : 'text-4xl';
  const subtitleSize = size === 'sm' ? 'text-[10px]' : 'text-xs';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Wave + Geodesic Neural Dome - Pixel-perfect to Screenshot_1.jpg */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Subtle shading gradients matching original mark */}
          <linearGradient id="deepWaveGrad" x1="16" y1="50" x2="80" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FA5" />
            <stop offset="60%" stopColor="#0272B6" />
            <stop offset="100%" stopColor="#085B9C" />
          </linearGradient>

          <linearGradient id="midWaveGrad" x1="25" y1="35" x2="62" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B8CD4" />
            <stop offset="50%" stopColor="#1179C3" />
            <stop offset="100%" stopColor="#0964A8" />
          </linearGradient>

          <linearGradient id="innerWaveGrad" x1="30" y1="40" x2="58" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2BA2E6" />
            <stop offset="100%" stopColor="#127CC5" />
          </linearGradient>

          <linearGradient id="tealCrescentGrad" x1="44" y1="78" x2="85" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3DB7AA" />
            <stop offset="60%" stopColor="#55C9BD" />
            <stop offset="100%" stopColor="#62D2C7" />
          </linearGradient>
        </defs>

        {/* ========================================================
            1. TOP GEODESIC / NEURAL NETWORK DOME (Upper Arc)
           ======================================================== */}
        <g strokeLinecap="round" strokeLinejoin="round">
          
          {/* --- Blue Lines (Left Half of Dome) --- */}
          <g stroke="#0E74BB" strokeWidth="1.6" opacity="0.95">
            {/* Outer Arc Connections */}
            <line x1="17.5" y1="52" x2="21" y2="33.5" />
            <line x1="21" y1="33.5" x2="33" y2="16.5" />
            <line x1="33" y1="16.5" x2="50" y2="9.5" />

            {/* Inner Triangulation */}
            <line x1="17.5" y1="52" x2="26.5" y2="36.5" />
            <line x1="21" y1="33.5" x2="26.5" y2="36.5" />
            <line x1="21" y1="33.5" x2="41.5" y2="25" />
            <line x1="26.5" y1="36.5" x2="41.5" y2="25" />
            <line x1="33" y1="16.5" x2="41.5" y2="25" />
            <line x1="41.5" y1="25" x2="50" y2="9.5" />
            <line x1="41.5" y1="25" x2="53" y2="33.5" />
            <line x1="50" y1="9.5" x2="53" y2="33.5" />
          </g>

          {/* --- Transition Lines (Center of Dome) --- */}
          <g stroke="#2696C0" strokeWidth="1.6" opacity="0.95">
            <line x1="50" y1="9.5" x2="67" y2="16.5" />
            <line x1="50" y1="9.5" x2="58.5" y2="23" />
            <line x1="53" y1="33.5" x2="58.5" y2="23" />
            <line x1="67" y1="16.5" x2="58.5" y2="23" />
          </g>

          {/* --- Teal Lines (Right Half of Dome) --- */}
          <g stroke="#4CBFB3" strokeWidth="1.6" opacity="0.95">
            {/* Outer Arc Connections */}
            <line x1="67" y1="16.5" x2="79" y2="29.5" />
            <line x1="79" y1="29.5" x2="83.5" y2="49" />

            {/* Inner Triangulation & Hook */}
            <line x1="58.5" y1="23" x2="73" y2="44" />
            <line x1="67" y1="16.5" x2="73" y2="44" />
            <line x1="79" y1="29.5" x2="73" y2="44" />
            <line x1="83.5" y1="49" x2="73" y2="44" />
            
            <line x1="73" y1="44" x2="66.5" y2="56.5" />
            <line x1="73" y1="44" x2="77.5" y2="68" />
            <line x1="83.5" y1="49" x2="77.5" y2="68" />

            <line x1="66.5" y1="56.5" x2="77.5" y2="68" />
            <line x1="66.5" y1="56.5" x2="58.5" y2="64.5" />
            <line x1="77.5" y1="68" x2="58.5" y2="64.5" />
          </g>
        </g>

        {/* --- Geodesic Network Nodes (Circles) --- */}
        {/* Left deep blue nodes */}
        <circle cx="17.5" cy="52" r="3.2" fill="#0C6DB0" />
        <circle cx="21" cy="33.5" r="2.8" fill="#0E75BB" />
        <circle cx="33" cy="16.5" r="3.4" fill="#0C6DB0" />
        <circle cx="26.5" cy="36.5" r="2.3" fill="#0E75BB" />
        <circle cx="41.5" cy="25" r="3.6" fill="#0862A4" />
        <circle cx="53" cy="33.5" r="3.0" fill="#1278BD" />

        {/* Apex top node */}
        <circle cx="50" cy="9.5" r="3.4" fill="#157DC1" />

        {/* Right transition & teal nodes */}
        <circle cx="67" cy="16.5" r="3.0" fill="#3AAEB5" />
        <circle cx="58.5" cy="23" r="2.2" fill="#3AAEB5" />
        <circle cx="79" cy="29.5" r="3.4" fill="#50C3B7" />
        <circle cx="83.5" cy="49" r="3.0" fill="#50C3B7" />
        <circle cx="73" cy="44" r="3.8" fill="#50C3B7" />
        <circle cx="66.5" cy="56.5" r="2.3" fill="#50C3B7" />
        <circle cx="77.5" cy="68" r="2.9" fill="#50C3B7" />
        <circle cx="58.5" cy="64.5" r="3.1" fill="#50C3B7" />

        {/* ========================================================
            2. OCEAN WAVE SWIRL (Bottom & Center)
           ======================================================== */}
        
        {/* Layer 1: Dark Ocean Blue Outer Base (Sweeps around the bottom) */}
        <path
          d="M 17 61
             C 17 78 32 94 51 94
             C 65 94 75 87 81 79
             C 71 85 59 87 49 84
             C 36 81 26 71 22 59
             C 19 54 17 56 17 61 Z"
          fill="url(#deepWaveGrad)"
        />

        {/* Layer 2: Main Curving Middle Wave Body */}
        <path
          d="M 21 61
             C 21 44 32 34 46 33
             C 56 32 60 40 59 47
             C 58 52 53 56 46 56
             C 37 56 33 65 34 74
             C 35 83 43 90 53 90
             C 35 91 22 80 21 61 Z"
          fill="url(#midWaveGrad)"
        />

        {/* Layer 2b: Inner Wave Curl Crest Highlight (Sharp wave hook pointing right/down) */}
        <path
          d="M 33 50
             C 35 41 42 34 50 33.5
             C 57 33 60 38 60 46.5
             C 59.5 50.5 56 54 48 54.5
             C 43 54.8 38 52 38 48
             C 38 43 45 39 51 40
             C 55 40.5 57 43 56 46
             C 53 47 48 48 45 49
             C 41 50 37 53 37 57
             C 37 68 45 78 57 80
             C 44 80 34 68 33 50 Z"
          fill="url(#innerWaveGrad)"
        />

        {/* Layer 3: Cyan / Teal Crescent Spray (Bottom-Right swoop) */}
        <path
          d="M 44.5 58
             C 52 69 66 73 80 64
             C 84.5 59 84 55 84 55
             C 84 55 81 64 72 71
             C 61 79 49 76 44.5 58 Z"
          fill="url(#tealCrescentGrad)"
        />

        {/* Tiny accent foam crescent right under the crest curl */}
        <path
          d="M 45 56
             C 50 63 60 67 73 63
             C 62 67 52 64 45 56 Z"
          fill="#52C5BA"
          opacity="0.8"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight ${textSize} leading-none flex items-center`}>
          <span className="text-[#0272B6]">Mavi</span>
          <span className="text-[#00BFA5]">Ağ</span>
        </div>
        {showSubtitle && (
          <span className={`${subtitleSize} font-medium text-slate-500 tracking-wide mt-0.5 hidden sm:block`}>
            Yapay Zeka ile Okyanusları Koru
          </span>
        )}
      </div>
    </div>
  );
};
