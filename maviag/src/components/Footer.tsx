import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ShieldCheck, PhoneCall, Heart, Waves, Github, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 sm:pt-14 pb-12 sm:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 sm:mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* White inverted logo mark */}
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-xs">
                <Logo size="sm" showSubtitle={false} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              MaviAğ, deniz ekosistemlerini plastik kirliliği ve hayalet ağ tehdidinden korumak için yapay zeka görüntü işleme, vatandaş katılımı ve kurumlar arası koordinasyonu bir araya getiren ulusal çevre teknolojisi platformudur.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-md px-3 py-1.5 w-fit">
              <Waves className="w-3.5 h-3.5 text-[#00BFA5]" />
              <span>BM Sürdürülebilir Kalkınma Amacı #14 (Sudaki Yaşam)</span>
            </div>
          </div>

          {/* Platform Sayfaları */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Platform Menüsü
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Anasayfa & Genel Bakış
                </Link>
              </li>
              <li>
                <Link to="/harita" className="text-slate-400 hover:text-white transition-colors">
                  Canlı Kirlilik Haritası
                </Link>
              </li>
              <li>
                <Link to="/ihbar" className="text-slate-400 hover:text-white transition-colors">
                  Fotoğraflı Kirlilik İhbarı
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-slate-400 hover:text-white transition-colors">
                  Kurumsal Yönetici & Sevk
                </Link>
              </li>
              <li>
                <Link to="/hakkinda" className="text-slate-400 hover:text-white transition-colors">
                  Proje Hakkında & Vizyon
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog & Araştırmalar
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-slate-400 hover:text-white transition-colors">
                  İletişim & İş Birliği
                </Link>
              </li>
            </ul>
          </div>

          {/* Yapay Zeka & Teknoloji */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Yapay Zeka Mimarisi
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]"></span>
                <span>YOLOv11 Deniz Atığı Sınıflandırma</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077C2]"></span>
                <span>Sentinel-2 & Landsat Uydu Spektrumu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]"></span>
                <span>Sualtı Dronları ile Hayalet Ağ Tespiti</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]"></span>
                <span>Otomatik Önceliklendirme Algoritması</span>
              </li>
            </ul>
          </div>

          {/* Acil İhbar & Destek */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Acil Deniz Hatları
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs mb-1">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Sahil Güvenlik & Alo 158</span>
                </div>
                <p className="text-xs text-slate-400">
                  Denizde can güvenliği ve ağır yakıt kirliliği ihbarları.
                </p>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00BFA5]" />
                  <span>Alo 181 Çevre Hattı</span>
                </div>
                <p className="text-xs text-slate-400">
                  Kıyı şeridi ve deniz koruma alanları koordinasyonu.
                </p>
              </div>

              {/* Sosyal Medya İkonları */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Bizi Takip Edin
                </div>
                <div className="flex items-center gap-2.5">
                  {/* 1. X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0077C2] text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                    aria-label="X (Twitter)"
                    title="X (Twitter)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* 2. Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* 3. YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1">
            <span>© 2026 MaviAğ Platformu. Denizlerimizi korumak için geliştirildi.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <span className="hover:text-slate-400 cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-slate-400 cursor-pointer">Açık Veri Lisansı</span>
            <span className="hover:text-slate-400 cursor-pointer">STK Entegrasyon API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
