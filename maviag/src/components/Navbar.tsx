import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  MapPin, 
  Home, 
  Menu, 
  X, 
  Activity,
  PlusCircle,
  BarChart3,
  Info,
  Mail,
  ChevronDown,
  Building2,
  Sparkles,
  BookOpen,
  ChevronRight,
  PhoneCall,
  Camera,
  Layers,
  Compass
} from 'lucide-react';
import { useReports } from '../context/ReportContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const { stats } = useReports();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      name: 'Anasayfa', 
      shortName: 'Anasayfa',
      path: '/', 
      icon: Home,
      subtitle: 'Platform genel bakış ve canlı AI demosu',
      color: 'text-[#0077C2]',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200'
    },
    { 
      name: 'Kirlilik Haritası', 
      shortName: 'Harita',
      path: '/harita', 
      icon: MapPin,
      subtitle: 'Canlı GPS kirlilik sıcak noktaları ve filtreler',
      color: 'text-[#00BFA5]',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    { 
      name: 'İhbar Et', 
      shortName: 'İhbar',
      path: '/ihbar', 
      icon: Camera,
      subtitle: 'Fotoğraf yükle, yapay zeka ile anında tara',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    { 
      name: 'Yönetici Paneli', 
      shortName: 'Yönetici',
      path: '/admin', 
      icon: BarChart3, 
      subtitle: 'Saha temizlik botları ve onay koordinasyonu',
      badge: stats.criticalSpotsCount,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
  ];

  const kurumsalLinks = [
    {
      name: 'Proje Hakkında & Vizyon',
      path: '/hakkinda',
      icon: Info,
      subtitle: 'Yapay zeka mimarisi, hedefler ve paydaşlar',
      color: 'text-[#0077C2]',
      bgColor: 'bg-sky-50'
    },
    {
      name: 'Blog & Araştırmalar',
      path: '/blog',
      icon: BookOpen,
      subtitle: 'Deniz teknolojisi, uydu tespiti ve saha raporları',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'İletişim & İş Birliği',
      path: '/iletisim',
      icon: Mail,
      subtitle: 'Belediye ve STK entegrasyonu, destek merkezi',
      color: 'text-[#00BFA5]',
      bgColor: 'bg-teal-50'
    }
  ];

  const isKurumsalActive = location.pathname === '/hakkinda' || location.pathname === '/iletisim' || location.pathname === '/blog';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="group focus:outline-none flex-shrink-0">
              <Logo size="md" showSubtitle={true} />
            </Link>

            {/* Desktop & Tablet Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#0077C2] bg-sky-50 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#0077C2]' : 'text-slate-400'}`} />
                    <span className="hidden xl:inline">{link.name}</span>
                    <span className="xl:hidden">{link.shortName}</span>
                    {link.badge !== undefined && link.badge > 0 && (
                      <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] lg:text-xs font-bold leading-none text-white bg-[#FF1744] rounded-full animate-pulse ml-0.5">
                        {link.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}

              {/* "Kurumsal & Bilgi" Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 focus:outline-none ${
                    isKurumsalActive || dropdownOpen
                      ? 'text-[#0077C2] bg-sky-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                  aria-expanded={dropdownOpen}
                >
                  <Building2 className={`w-4 h-4 shrink-0 ${isKurumsalActive || dropdownOpen ? 'text-[#0077C2]' : 'text-slate-400'}`} />
                  <span>Kurumsal</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#0077C2]' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Popover */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Platform Bilgileri
                    </div>

                    {kurumsalLinks.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                            isActive
                              ? 'bg-sky-50 text-[#0077C2]'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className={`p-2 rounded-xl ${item.bgColor} ${item.color} shrink-0 mt-0.5`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{item.name}</div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action & Live AI indicator (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Live AI Pulse Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-medium text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFA5]"></span>
                </span>
                <Activity className="w-3.5 h-3.5 text-[#00BFA5]" />
                <span className="font-semibold">AI Devrede</span>
              </div>

              {/* Quick Report CTA */}
              <Link
                to="/ihbar"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-[#0077C2] to-sky-600 hover:from-sky-600 hover:to-[#0077C2] text-white text-xs font-semibold rounded-xl shadow-xs transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Kirlilik İhbarı Yap</span>
              </Link>
            </div>

            {/* Mobile Header Buttons (Right side on mobile) */}
            <div className="flex items-center md:hidden gap-2">
              <Link
                to="/ihbar"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#0077C2] to-sky-600 text-white text-xs font-semibold rounded-xl shadow-xs active:scale-95 transition-transform"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>İhbar</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200 transition-colors focus:outline-none border border-slate-200/80"
                aria-label="Menüyü aç/kapat"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE & TABLET DRAWER (Side sheet design) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex justify-end md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60 sticky top-0 z-10 backdrop-blur-md">
              <div onClick={() => setMobileMenuOpen(false)}>
                <Logo size="sm" showSubtitle={false} />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-white border border-slate-200/80 shadow-xs transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-4 space-y-5 flex-1">
              
              {/* AI Status Badge */}
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00BFA5]"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-800">Yapay Zeka İzleme Ağı</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-mono font-bold">
                  CANLI
                </span>
              </div>

              {/* Main Navigation Tiles */}
              <div className="space-y-1.5">
                <div className="px-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Ana Menü
                </div>
                
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-sky-50 border border-sky-200 shadow-xs'
                          : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-xl ${link.bgColor} ${link.color} flex items-center justify-center shrink-0 border border-slate-200/60`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold truncate ${isActive ? 'text-[#0077C2]' : 'text-slate-900'}`}>
                              {link.name}
                            </span>
                            {link.badge !== undefined && link.badge > 0 && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#FF1744] rounded-full">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {link.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ml-2 ${isActive ? 'text-[#0077C2]' : 'text-slate-300'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Kurumsal & Bilgi Tiles */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="px-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kurumsal & Bilgi
                </div>

                {kurumsalLinks.map((item) => {
                  const ItemIcon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-sky-50 border border-sky-200 shadow-xs'
                          : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 border border-slate-200/60`}>
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-sm font-bold truncate block ${isActive ? 'text-[#0077C2]' : 'text-slate-900'}`}>
                            {item.name}
                          </span>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ml-2 ${isActive ? 'text-[#0077C2]' : 'text-slate-300'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Emergency Callout Box in Drawer */}
              <div className="p-3.5 bg-slate-900 rounded-2xl text-white space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold flex items-center gap-1.5 text-rose-400">
                    <PhoneCall className="w-3.5 h-3.5" />
                    Acil Deniz İhbarı
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">7/24 Aktif</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <a
                    href="tel:158"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 border border-slate-700 text-xs font-semibold block transition-colors"
                  >
                    <div className="text-[10px] text-slate-400">Sahil Güvenlik</div>
                    <div className="text-white font-bold text-sm">Alo 158</div>
                  </a>
                  <a
                    href="tel:181"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-teal-900/60 border border-slate-700 text-xs font-semibold block transition-colors"
                  >
                    <div className="text-[10px] text-slate-400">Çevre Hattı</div>
                    <div className="text-white font-bold text-sm">Alo 181</div>
                  </a>
                </div>
              </div>

            </div>

            {/* Drawer Footer with Social Links */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] font-medium">© 2026 MaviAğ Platformu</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-sky-600 shadow-2xs"
                  aria-label="X"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-rose-600 shadow-2xs"
                  aria-label="Instagram"
                >
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-red-600 shadow-2xs"
                  aria-label="YouTube"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FIXED MOBILE BOTTOM APP BAR (Native App Feel on Smartphones) */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl md:hidden px-2 py-1.5 flex items-center justify-around"
        aria-label="Mobil Hızlı Menü"
      >
        {/* 1. Anasayfa */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
            location.pathname === '/' ? 'text-[#0077C2]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Anasayfa</span>
        </Link>

        {/* 2. Harita */}
        <Link
          to="/harita"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
            location.pathname === '/harita' ? 'text-[#0077C2]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Harita</span>
        </Link>

        {/* 3. Center Elevated Action Button: İhbar Et */}
        <Link
          to="/ihbar"
          className="relative -mt-6 group focus:outline-none"
          title="Kirlilik İhbarı Yap"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#0077C2] via-sky-500 to-[#00BFA5] text-white flex items-center justify-center shadow-lg shadow-sky-600/40 ring-4 ring-white group-hover:scale-105 active:scale-95 transition-all">
            <Camera className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-[#0077C2] block text-center mt-1">İhbar Et</span>
        </Link>

        {/* 4. Yönetici */}
        <Link
          to="/admin"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl relative transition-colors ${
            location.pathname === '/admin' ? 'text-[#0077C2]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <BarChart3 className="w-5 h-5" />
            {stats.criticalSpotsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF1744] rounded-full animate-ping" />
            )}
            {stats.criticalSpotsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF1744] rounded-full" />
            )}
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Yönetici</span>
        </Link>

        {/* 5. Menü (Drawer Trigger) */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
            mobileMenuOpen ? 'text-[#0077C2]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Menü</span>
        </button>
      </nav>
    </>
  );
};
