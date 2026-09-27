import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  PlusCircle, 
  Cpu, 
  Users, 
  Trash2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Waves, 
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Compass,
  Eye,
  Bot,
  Globe,
  Building2,
  Award,
  Recycle,
  Anchor,
  Handshake,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { SAMPLE_PRESET_IMAGES } from '../data/mockData';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BlogDetailModal } from '../components/BlogDetailModal';
import { UserReviewsSection } from '../components/UserReviewsSection';
import { 
  OkyanusTechLogo, 
  MaviGelecekLogo, 
  AkdenizFiloLogo, 
  EkoDronLogo, 
  TurcevLogo, 
  DonguselPolimerLogo 
} from '../components/SponsorLogos';

export const HomePage: React.FC = () => {
  const { stats, reports, setSelectedReport } = useReports();
  const navigate = useNavigate();
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isAiScanning, setIsAiScanning] = useState(false);
  const [selectedBlogModal, setSelectedBlogModal] = useState<BlogPost | null>(null);

  // Trigger simulated AI inference scan when user clicks sample image in hero
  const handleSelectDemo = (index: number) => {
    setActiveDemoIndex(index);
    setIsAiScanning(true);
    setTimeout(() => {
      setIsAiScanning(false);
    }, 600);
  };

  const activeDemo = SAMPLE_PRESET_IMAGES[activeDemoIndex];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-radial from-sky-900 via-[#004e82] to-[#002f52] text-white py-20 lg:py-28">
        
        {/* Decorative oceanic neural lattice background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#00BFA5" />
                <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="#0077C2" strokeWidth="0.5" strokeDasharray="3,3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#00BFA5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-[#0077C2]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
                <span>Yapay Zeka Destekli Deniz Koruma İnisiyatifi</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Yapay Zeka ile <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-[#00BFA5] to-emerald-300">
                  Okyanusları Koru
                </span>
              </h1>

              <p className="text-base sm:text-lg text-sky-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                MaviAğ; derin öğrenme destekli görüntü işleme, uydu verileri ve vatandaş ihbarlarını tek bir canlı haritada buluşturur. Plastik atıkları, hayalet ağları ve kimyasal kirliliği anında tespit edip temizleme ekiplerine sevk eder.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/harita"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#0077C2] to-sky-600 hover:from-sky-600 hover:to-[#0077C2] text-white text-base font-semibold rounded-xl shadow-lg shadow-sky-900/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-sky-400/30"
                >
                  <MapPin className="w-5 h-5 text-sky-200" />
                  <span>Haritayı İncele</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  to="/ihbar"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00BFA5] hover:bg-[#009688] text-white text-base font-semibold rounded-xl shadow-lg shadow-teal-950/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Kirlilik İhbarı Yap</span>
                </Link>
              </div>

              {/* Micro proof badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-sky-200/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00BFA5]" /> %95+ AI Doğruluk Oranı
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00BFA5]" /> 7/24 Gerçek Zamanlı Uydu & İhbar Ağı
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00BFA5]" /> STK ve Belediye Koordinasyonu
                </span>
              </div>
            </div>

            {/* Right Interactive AI Vision Simulator Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 border border-sky-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
                
                {/* Simulator Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2 font-mono text-sky-300">
                    <Bot className="w-4 h-4 text-[#00BFA5]" />
                    <span>MaviAğ-Vision v2.3 [Canlı Önizleme]</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono animate-pulse">
                    ONLINE
                  </span>
                </div>

                {/* Image Viewport with Bounding Box Overlay */}
                <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-black">
                  <img
                    src={activeDemo.url}
                    alt={activeDemo.label}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isAiScanning ? 'opacity-40 scale-105' : 'opacity-90'
                    }`}
                  />

                  {/* AI Scan Line Effect */}
                  {isAiScanning && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFA5]/30 to-transparent h-12 w-full animate-bounce pointer-events-none" />
                  )}

                  {/* Bounding Box Simulation */}
                  {!isAiScanning && (
                    <div className="absolute inset-8 border-2 border-[#00BFA5] rounded-xs bg-[#00BFA5]/15 pointer-events-none transition-all duration-300 flex flex-col justify-between p-2">
                      <div className="flex justify-between items-start">
                        <span className="bg-[#00BFA5] text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs shadow-xs">
                          {activeDemo.detected}
                        </span>
                        <span className="bg-slate-900/90 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-xs">
                          Tehdit: {activeDemo.severity === 'critical' ? 'KRİTİK' : 'ORTA'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-emerald-300 bg-slate-900/80 px-1.5 py-0.5 rounded-xs">
                          Tahmini Ağırlık: ~{activeDemo.weight} kg
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Model Diagnostics Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs text-[11px] p-2 rounded-lg border border-slate-700/60 font-mono flex items-center justify-between text-slate-300">
                    <span className="truncate">{activeDemo.label}</span>
                    <span className="text-emerald-400 font-bold shrink-0 ml-2">96.8 ms Latency</span>
                  </div>
                </div>

                {/* Sample selector buttons */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Modeli test etmek için bir atık türü seçin:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {SAMPLE_PRESET_IMAGES.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectDemo(idx)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                          activeDemoIndex === idx
                            ? 'bg-[#0077C2] text-white shadow-xs font-semibold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <span className="truncate block">{sample.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Temsili sayaçlar ve dinamik veriler) */}
      <section className="relative -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 sm:p-6 border border-slate-200/80">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-50 text-[#0077C2] flex items-center justify-center shrink-0">
              <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.cleanedTodayKg.toLocaleString('tr-TR')} kg
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Bugün Temizlenen Atık</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-[#FF1744] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.activeHotspots} Bölge
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Aktif Kirlilik Sıcak Noktası</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-50 text-[#00BFA5] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                %{stats.aiAccuracyPercent}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">AI Tespit Doğruluk Oranı</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.totalReports.toLocaleString('tr-TR')}+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Vatandaş İhbarı & Rapor</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. "NASIL ÇALIŞIR?" (HOW IT WORKS - 3 Adımlık Bilgi Kartları) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
            <Waves className="w-3.5 h-3.5" />
            <span>Sistem Mimarisi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nasıl Çalışır?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            MaviAğ, ileri görüntü işleme algoritmaları ve kıyı topluluklarının gücünü bir araya getirerek denizlerimizi atıksız bir geleceğe taşır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: AI Tespit Eder */}
          <div className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#0077C2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="text-xs font-mono font-bold text-[#0077C2] mb-1">01. AŞAMA</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Tespit Eder</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Uydu taramaları, dron uçuşları ve kullanıcı fotoğrafları YOLOv11 tabanlı derin öğrenme modelleriyle taranır. Plastik kütleleri, hayalet ağlar ve tehlikeli kimyasallar anında tespit edilip koordinatlandırılır.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0077C2]">
              <span>Polimer & Ağ Ayrıştırma</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 2: Vatandaş Bildirir */}
          <div className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-[#00BFA5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <div className="text-xs font-mono font-bold text-[#00BFA5] mb-1">02. AŞAMA</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vatandaş Bildirir</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kıyıda yürürken, teknede seyrederken veya dalış yaparken karşılaşılan deniz kirliliği; mobil uyumlu ihbar formumuzla anında fotoğraflanır ve GPS konumuyla birlikte tek tıkla sisteme aktarılır.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#00BFA5]">
              <span>Sürükle-Bırak Kolay İhbar</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 3: Ekipler Temizler */}
          <div className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-[#FF1744] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trash2 className="w-7 h-7" />
            </div>
            <div className="text-xs font-mono font-bold text-[#FF1744] mb-1">03. AŞAMA</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ekipler Temizler</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Doğrulanan ve öncelik puanı atanan kirlilik noktaları yerel belediyelere, deniz temizlik botlarına ve gönüllü dalış inisiyatiflerine otomatik rota ve görev olarak iletilerek temizlenir.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#FF1744]">
              <span>Hızlı Müdahale Koordinasyonu</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. CANLI KİRLİLİK AKIŞI & HIZLI ERİŞİM (RECENT ACTIVITY) */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0077C2] uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Canlı Veri Beslemesi
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Son Bildirilen Kirlilik Noktaları</h3>
            </div>
            <Link
              to="/harita"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0077C2] hover:text-[#005a94]"
            >
              <span>Tümünü Haritada Aç</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.slice(0, 3).map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
                onClick={() => {
                  setSelectedReport(item);
                  navigate('/harita');
                }}
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    {item.severity === 'critical' ? (
                      <span className="bg-[#FF1744] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        Kritik Kirlilik
                      </span>
                    ) : item.severity === 'medium' ? (
                      <span className="bg-amber-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        Orta Seviye
                      </span>
                    ) : (
                      <span className="bg-[#00BFA5] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        Düşük Seviye
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[11px] font-mono px-2 py-0.5 rounded-md backdrop-blur-xs">
                    AI Doğruluk: %{item.aiConfidence}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-mono text-slate-400">{item.id}</span>
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1 mt-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{item.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0077C2]" />
                      <span className="truncate max-w-[150px]">{item.locationName}</span>
                    </span>
                    <span className="text-[#0077C2] font-semibold hover:underline flex items-center gap-1">
                      Detay <Eye className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPONSORLARIMIZ VE ÇÖZÜM ORTAKLARI (SLIDING LEFT-TO-RIGHT MARQUEE) */}
      <section className="py-16 bg-white border-b border-slate-200/90 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            <span>Ekosistem Birlikteliği</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Destekçilerimiz ve Sponsorlarımız
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
            MaviAğ platformunun yapay zeka araştırmalarını, kıyı temizlik filolarını ve otonom dron taramalarını destekleyen öncü kurumlar.
          </p>
        </div>

        {/* Marquee Wrapper with Smooth Left & Right Gradient Masks */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Left Gradient Fade Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          {/* Right Gradient Fade Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Track: Scrolls left-to-right infinitely (hover to pause) */}
          <div className="animate-marquee-ltr flex items-center gap-6">
            {[
              {
                id: 'sp-1',
                name: 'OkyanusTech Vakfı',
                role: 'Yapay Zeka & Uydu Ar-Ge Partneri',
                category: 'Altın Sponsor',
                LogoComponent: OkyanusTechLogo,
                badgeColor: 'bg-sky-100 text-[#0077C2]',
                borderColor: 'border-sky-200 hover:border-[#0077C2]',
                glowColor: 'group-hover:shadow-sky-500/10',
              },
              {
                id: 'sp-2',
                name: 'Mavi Gelecek İnisiyatifi',
                role: 'Kıyı ve Mercan Restorasyon Fonu',
                category: 'Stratejik Ortak',
                LogoComponent: MaviGelecekLogo,
                badgeColor: 'bg-teal-100 text-[#00BFA5]',
                borderColor: 'border-teal-200 hover:border-[#00BFA5]',
                glowColor: 'group-hover:shadow-teal-500/10',
              },
              {
                id: 'sp-3',
                name: 'Akdeniz Temizlik Filosu',
                role: 'Saha Operasyonu & Temizlik Botları',
                category: 'Operasyon Partneri',
                LogoComponent: AkdenizFiloLogo,
                badgeColor: 'bg-indigo-100 text-indigo-700',
                borderColor: 'border-indigo-200 hover:border-indigo-500',
                glowColor: 'group-hover:shadow-indigo-500/10',
              },
              {
                id: 'sp-4',
                name: 'EkoDron Deniz Teknolojileri',
                role: 'Otonom İHA ve Sensör Sistemleri',
                category: 'Teknoloji Sponsoru',
                LogoComponent: EkoDronLogo,
                badgeColor: 'bg-cyan-100 text-cyan-700',
                borderColor: 'border-cyan-200 hover:border-cyan-500',
                glowColor: 'group-hover:shadow-cyan-500/10',
              },
              {
                id: 'sp-5',
                name: 'TURÇEV Mavi Bayrak Konseyi',
                role: 'Kıyı Kalite ve Sertifikasyon',
                category: 'Resmi Destekçi',
                LogoComponent: TurcevLogo,
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-blue-200 hover:border-blue-500',
                glowColor: 'group-hover:shadow-blue-500/10',
              },
              {
                id: 'sp-6',
                name: 'Döngüsel Polimer A.Ş.',
                role: 'Deniz Plastiklerini İleri Dönüşüm',
                category: 'Sürdürülebilirlik Sponsoru',
                LogoComponent: DonguselPolimerLogo,
                badgeColor: 'bg-emerald-100 text-emerald-700',
                borderColor: 'border-emerald-200 hover:border-emerald-500',
                glowColor: 'group-hover:shadow-emerald-500/10',
              },
              // Duplicate set to ensure seamless infinite looping
              {
                id: 'sp-1-dup',
                name: 'OkyanusTech Vakfı',
                role: 'Yapay Zeka & Uydu Ar-Ge Partneri',
                category: 'Altın Sponsor',
                LogoComponent: OkyanusTechLogo,
                badgeColor: 'bg-sky-100 text-[#0077C2]',
                borderColor: 'border-sky-200 hover:border-[#0077C2]',
                glowColor: 'group-hover:shadow-sky-500/10',
              },
              {
                id: 'sp-2-dup',
                name: 'Mavi Gelecek İnisiyatifi',
                role: 'Kıyı ve Mercan Restorasyon Fonu',
                category: 'Stratejik Ortak',
                LogoComponent: MaviGelecekLogo,
                badgeColor: 'bg-teal-100 text-[#00BFA5]',
                borderColor: 'border-teal-200 hover:border-[#00BFA5]',
                glowColor: 'group-hover:shadow-teal-500/10',
              },
              {
                id: 'sp-3-dup',
                name: 'Akdeniz Temizlik Filosu',
                role: 'Saha Operasyonu & Temizlik Botları',
                category: 'Operasyon Partneri',
                LogoComponent: AkdenizFiloLogo,
                badgeColor: 'bg-indigo-100 text-indigo-700',
                borderColor: 'border-indigo-200 hover:border-indigo-500',
                glowColor: 'group-hover:shadow-indigo-500/10',
              },
              {
                id: 'sp-4-dup',
                name: 'EkoDron Deniz Teknolojileri',
                role: 'Otonom İHA ve Sensör Sistemleri',
                category: 'Teknoloji Sponsoru',
                LogoComponent: EkoDronLogo,
                badgeColor: 'bg-cyan-100 text-cyan-700',
                borderColor: 'border-cyan-200 hover:border-cyan-500',
                glowColor: 'group-hover:shadow-cyan-500/10',
              },
              {
                id: 'sp-5-dup',
                name: 'TURÇEV Mavi Bayrak Konseyi',
                role: 'Kıyı Kalite ve Sertifikasyon',
                category: 'Resmi Destekçi',
                LogoComponent: TurcevLogo,
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-blue-200 hover:border-blue-500',
                glowColor: 'group-hover:shadow-blue-500/10',
              },
              {
                id: 'sp-6-dup',
                name: 'Döngüsel Polimer A.Ş.',
                role: 'Deniz Plastiklerini İleri Dönüşüm',
                category: 'Sürdürülebilirlik Sponsoru',
                LogoComponent: DonguselPolimerLogo,
                badgeColor: 'bg-emerald-100 text-emerald-700',
                borderColor: 'border-emerald-200 hover:border-emerald-500',
                glowColor: 'group-hover:shadow-emerald-500/10',
              },
            ].map((sponsor, idx) => {
              const LogoComp = sponsor.LogoComponent;
              return (
                <div
                  key={`${sponsor.id}-${idx}`}
                  className={`flex-shrink-0 w-80 bg-white rounded-2xl p-5 border ${sponsor.borderColor} shadow-sm hover:shadow-xl ${sponsor.glowColor} transition-all duration-300 group cursor-default select-none`}
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Brand Mark Emblem Container */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                      <LogoComp className="w-10 h-10 drop-shadow-xs" />
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${sponsor.badgeColor}`}>
                      {sponsor.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-slate-900 group-hover:text-[#0077C2] transition-colors line-clamp-1">
                      {sponsor.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {sponsor.role}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]"></span>
                      <span>MaviAğ Ekosistemi</span>
                    </span>
                    <span className="text-emerald-600 font-bold font-sans">✓ Doğrulanmış Ortak</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sponsor Callout Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 inline-flex items-center gap-1.5">
            <span>Siz de denizlerimizin korunmasına kurumsal olarak ortak olmak ister misiniz?</span>
            <Link
              to="/iletisim"
              className="font-bold text-[#0077C2] hover:text-[#005a94] hover:underline"
            >
              Kurumsal Sponsorluk İçin İletişime Geçin →
            </Link>
          </p>
        </div>
      </section>

      {/* 6. ÖNE ÇIKAN BLOGLAR VE HABERLER */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-[#00BFA5] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>MaviAğ Bülten & Bilgi Merkezi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Öne Çıkan Blog Yazıları & Araştırmalar
              </h3>
              <p className="text-slate-500 text-sm max-w-xl">
                Yapay zeka görüntü işleme modellerimiz, kıyı operasyonlarımız ve okyanus koruma biliminden en güncel gelişmeler.
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-[#0077C2] text-xs sm:text-sm font-bold rounded-xl border border-slate-200 shadow-xs transition-all hover:scale-105 shrink-0"
            >
              <span>Tüm Blog Yazılarını Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedBlogModal(post)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Viewport */}
                  <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0077C2] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {post.readTime}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishedAt}</span>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 group-hover:text-[#0077C2] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author Bar & Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-sky-50"
                    />
                    <div>
                      <h5 className="font-bold text-slate-800 text-[11px] line-clamp-1">{post.author.name}</h5>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{post.author.title.split(' ')[0]}</p>
                    </div>
                  </div>

                  <span className="text-[#0077C2] font-semibold flex items-center gap-0.5 text-xs group-hover:underline">
                    <span>Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 7. KULLANICI YORUMLARI & GÖNÜLLÜ DENEYİMLERİ */}
      <UserReviewsSection />

      {/* 8. CALL TO ACTION STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#0077C2] via-sky-600 to-[#00BFA5] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Denizlerimizi Birlikte Temiz Tutalım
          </h2>
          <p className="text-sky-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Gördüğünüz her plastik şişe veya terkedilmiş balık ağı deniz canlılarının hayatına mal olabilir. Bir fotoğraf çekin, yapay zeka analiz etsin, ekipler temizlesin.
          </p>
          <div className="pt-2">
            <Link
              to="/ihbar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0077C2] hover:bg-slate-50 text-base font-bold rounded-xl shadow-xl transition-all duration-200 hover:scale-105"
            >
              <PlusCircle className="w-5 h-5 text-[#0077C2]" />
              <span>Hemen Kirlilik Bildir</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG DETAIL MODAL */}
      {selectedBlogModal && (
        <BlogDetailModal
          post={selectedBlogModal}
          onClose={() => setSelectedBlogModal(null)}
        />
      )}

    </div>
  );
};
