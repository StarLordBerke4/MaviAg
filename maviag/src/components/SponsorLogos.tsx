import React from 'react';

// 1. OkyanusTech Vakfı Logo (AI & Oceanic Tech Hexagon Emblem)
export const OkyanusTechLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="okyanusTechGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="50%" stopColor="#0077C2" />
        <stop offset="100%" stopColor="#00BFA5" />
      </linearGradient>
      <linearGradient id="okyanusTechWave" x1="12" y1="20" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
    {/* Hexagonal Shield */}
    <path
      d="M 24 4 L 41.3 14 L 41.3 34 L 24 44 L 6.7 34 L 6.7 14 Z"
      fill="url(#okyanusTechGrad)"
    />
    <path
      d="M 24 7 L 38.7 15.5 L 38.7 32.5 L 24 41 L 9.3 32.5 L 9.3 15.5 Z"
      fill="#0B2545"
      opacity="0.9"
    />
    {/* Internal AI Circuit Nodes & Wave */}
    <path
      d="M 14 26 C 18 20 22 30 26 24 C 30 18 34 26 34 26"
      stroke="url(#okyanusTechWave)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="15" r="2.5" fill="#38BDF8" />
    <circle cx="15" cy="27" r="2" fill="#00BFA5" />
    <circle cx="33" cy="25" r="2" fill="#00BFA5" />
    <line x1="24" y1="15" x2="20" y2="23" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />
    <line x1="24" y1="15" x2="28" y2="21" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />
    <circle cx="24" cy="33" r="2.2" fill="#67E8F9" />
    <line x1="24" y1="28" x2="24" y2="33" stroke="#67E8F9" strokeWidth="1.5" />
  </svg>
);

// 2. Mavi Gelecek İnisiyatifi Logo (Interlocking Ocean Wave & Eco-Leaf Globe)
export const MaviGelecekLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="maviGelTeal" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00BFA5" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="maviGelBlue" x1="10" y1="36" x2="38" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    {/* Background Soft Circle */}
    <circle cx="24" cy="24" r="21" fill="#E6FFFA" stroke="#99F6E4" strokeWidth="1" />
    {/* Left Ocean Crescent */}
    <path
      d="M 24 6 C 14.1 6 6 14.1 6 24 C 6 30.2 9.1 35.7 13.9 39 C 12.5 35 12 30 13 25 C 14.5 17.5 20 12 26 10 C 25.3 7.7 24.7 6 24 6 Z"
      fill="url(#maviGelBlue)"
    />
    {/* Right Eco Leaf Swirl */}
    <path
      d="M 24 42 C 33.9 42 42 33.9 42 24 C 42 17.8 38.9 12.3 34.1 9 C 35.5 13 36 18 35 23 C 33.5 30.5 28 36 22 38 C 22.7 40.3 23.3 42 24 42 Z"
      fill="url(#maviGelTeal)"
    />
    {/* Center Life Seed / Sparkle */}
    <circle cx="24" cy="24" r="4.5" fill="#00BFA5" />
    <path d="M 24 16 L 25.5 21.5 L 31 23 L 25.5 24.5 L 24 30 L 22.5 24.5 L 17 23 L 22.5 21.5 Z" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

// 3. Akdeniz Temizlik Filosu Logo (Nautical Prow & Compass Star Shield)
export const AkdenizFiloLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="akdenizNavy" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>
      <linearGradient id="goldAccent" x1="16" y1="12" x2="32" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* Outer Marine Crest */}
    <path
      d="M 24 4 L 40 10 C 40 25 33 38 24 44 C 15 38 8 25 8 10 Z"
      fill="url(#akdenizNavy)"
    />
    <path
      d="M 24 7 L 37.5 12 C 37.5 24 31.5 35 24 40.5 C 16.5 35 10.5 24 10.5 12 Z"
      fill="#0F172A"
      opacity="0.8"
    />
    {/* Ship Prow & Ocean Waves */}
    <path
      d="M 24 11 L 30 25 L 24 23 L 18 25 Z"
      fill="url(#goldAccent)"
    />
    <path
      d="M 14 29 C 18 27 22 28 24 30 C 26 28 30 27 34 29"
      stroke="#38BDF8"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M 16 34 C 19 32.5 22 33.5 24 35 C 26 33.5 29 32.5 32 34"
      stroke="#38BDF8"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

// 4. EkoDron Deniz Teknolojileri Logo (Aerodynamic Quad-Rotor & Sonar Radar)
export const EkoDronLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ekoDronGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="rotorGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#00BFA5" />
      </linearGradient>
    </defs>
    {/* Tech Ring Frame */}
    <circle cx="24" cy="24" r="20" fill="#F0FDFA" stroke="#06B6D4" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="16" stroke="#99F6E4" strokeWidth="1" strokeDasharray="3 3" />
    
    {/* Central Drone Core */}
    <circle cx="24" cy="24" r="5" fill="#082F49" />
    <circle cx="24" cy="24" r="2.5" fill="#00BFA5" />

    {/* Cross Rotors */}
    <path d="M 14 14 L 34 34 M 14 34 L 34 14" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* 4 Rotor Pods */}
    <circle cx="13" cy="13" r="3.5" fill="url(#rotorGrad)" />
    <circle cx="35" cy="13" r="3.5" fill="url(#rotorGrad)" />
    <circle cx="13" cy="35" r="3.5" fill="url(#rotorGrad)" />
    <circle cx="35" cy="35" r="3.5" fill="url(#rotorGrad)" />

    <circle cx="13" cy="13" r="1.5" fill="#FFFFFF" />
    <circle cx="35" cy="13" r="1.5" fill="#FFFFFF" />
    <circle cx="13" cy="35" r="1.5" fill="#FFFFFF" />
    <circle cx="35" cy="35" r="1.5" fill="#FFFFFF" />
  </svg>
);

// 5. TURÇEV Mavi Bayrak Konseyi Logo (Official Blue Flag & Sunburst Medallion)
export const TurcevLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="turcevBlue" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="sunGold" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* Outer Medallion */}
    <circle cx="24" cy="24" r="21" fill="url(#turcevBlue)" />
    <circle cx="24" cy="24" r="18" fill="#FFFFFF" />
    
    {/* Sun on Horizon */}
    <circle cx="24" cy="22" r="7" fill="url(#sunGold)" />
    
    {/* Ocean Waves Cutting Sun */}
    <path
      d="M 12 25 C 16 23 20 23 24 25 C 28 23 32 23 36 25 L 36 32 C 32 30 28 30 24 32 C 20 30 16 30 12 32 Z"
      fill="#0284C7"
    />
    <path
      d="M 12 30 C 16 28 20 28 24 30 C 28 28 32 28 36 30 L 36 36 C 32 34 28 34 24 36 C 20 34 16 34 12 36 Z"
      fill="#1D4ED8"
    />

    {/* Flying Seagull Silhouette */}
    <path
      d="M 19 14 C 21 12 23 13 24 15 C 25 13 27 12 29 14 C 27 14.5 25 15.5 24 17 C 23 15.5 21 14.5 19 14 Z"
      fill="#1E3A8A"
    />
  </svg>
);

// 6. Döngüsel Polimer A.Ş. Logo (Möbius Infinity Polymer Ribbon)
export const DonguselPolimerLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="polyGreen1" x1="6" y1="12" x2="28" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="polyGreen2" x1="20" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#00BFA5" />
      </linearGradient>
    </defs>
    {/* Soft hexagonal background */}
    <rect x="5" y="5" width="38" height="38" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.2" />
    
    {/* Möbius Infinity Ribbon Loop 1 */}
    <path
      d="M 16 18 C 21 18 24 24 24 24 C 24 24 27 30 32 30 C 36 30 39 27 39 24 C 39 21 36 18 32 18 C 28 18 25.5 21 24 24"
      stroke="url(#polyGreen2)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Möbius Infinity Ribbon Loop 2 */}
    <path
      d="M 32 30 C 27 30 24 24 24 24 C 24 24 21 18 16 18 C 12 18 9 21 9 24 C 9 27 12 30 16 30 C 20 30 22.5 27 24 24"
      stroke="url(#polyGreen1)"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Molecular Nodes */}
    <circle cx="16" cy="18" r="2.5" fill="#34D399" />
    <circle cx="32" cy="30" r="2.5" fill="#34D399" />
    <circle cx="24" cy="24" r="2.8" fill="#047857" />
  </svg>
);
