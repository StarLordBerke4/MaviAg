import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertOctagon, 
  Lightbulb, 
  Target, 
  Cpu, 
  Compass, 
  Users, 
  TrendingUp, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Database, 
  Palette, 
  Code2, 
  Workflow, 
  Building2, 
  GraduationCap, 
  FileCheck,
  CheckCircle2,
  Camera,
  MapPin,
  Waves,
  Eye,
  Globe
} from 'lucide-react';
import { Logo } from '../components/Logo';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-radial from-sky-900 via-[#004e82] to-[#002f52] text-white py-16 lg:py-24">
        {/* Lattice background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-neural-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1.5" fill="#00BFA5" />
                <path d="M 0 25 L 50 25 M 25 0 L 25 50" stroke="#0077C2" strokeWidth="0.5" strokeDasharray="3,3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-neural-grid)" />
          </svg>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00BFA5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#0077C2]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00BFA5]" />
            <span>Vizyon, Metodoloji ve Sistem Mimarisi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Proje MaviAğ: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-[#00BFA5] to-emerald-300">
              Yapay Zeka Destekli Kıyı ve Deniz Atığı Yönetim Sistemi
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-sky-100/90 leading-relaxed font-normal">
            Kıyı şeritlerimizi ve deniz ekosistemlerini plastik kirliliğinden arındırmak için ileri yapay zeka görüntü işleme algoritmaları, veri bilimi ve toplumun gücünü birleştiren ulusal çevre teknolojisi hamlesi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/harita"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077C2] hover:bg-[#005a94] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all hover:scale-105"
            >
              <Compass className="w-4 h-4" />
              <span>Canlı Haritayı İncele</span>
            </Link>
            <Link
              to="/ihbar"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00BFA5] hover:bg-[#009688] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all hover:scale-105"
            >
              <Camera className="w-4 h-4" />
              <span>Kirlilik İhbarı Yap</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROJENİN AMACI, MİSYON VE VİZYON */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Projenin Amacı Kartı */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0077C2] to-[#00BFA5]" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sky-100 text-[#0077C2] rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0077C2] uppercase tracking-wider block">Ana Çerçeve</span>
              <h2 className="text-2xl font-bold text-slate-900">Projenin Amacı</h2>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Kıyı şeritlerinde ve deniz yüzeyinde biriken plastik atıkları veri bilimi ve görüntü işleme teknolojileri kullanarak tespit etmek; toplanan verileri kullanıcı dostu bir web platformu aracılığıyla yerel yönetimler, sivil toplum kuruluşları ve gönüllülerle paylaşarak temizlik operasyonlarını veri odaklı ve proaktif hale getirmek.
          </p>
        </div>

        {/* MİSYON VE VİZYON (YAN YANA 2 KUTUCUK) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kutucuk 1: MİSYONUMUZ (Okyanus Mavisi Vurgulu) */}
          <div className="bg-white rounded-2xl p-8 border-2 border-sky-100 hover:border-[#0077C2] shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077C2]" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0077C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
                  Misyonumuz
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0077C2] transition-colors">
                Veriyle Güçlendirilmiş Proaktif Koruma
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Kıyı şeritlerimizde ve açık denizlerimizde plastik atık ve hayalet ağ kirliliğini ileri yapay zeka görüntü işleme modelleriyle anlık olarak tespit etmek; elde edilen coğrafi kirlilik verisini yerel yönetimler, sivil toplum kuruluşları ve gönüllü deniz temizlik filolarıyla şeffafça paylaşarak geleneksel reaktif temizlik süreçlerini proaktif, hızlı ve kaynak tasarruflu operasyonlara dönüştürmektir.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                <span>YOLOv11 ve İHA destekli kesintisiz atık haritalama</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                <span>Vatandaş katılımıyla şeffaf kirlilik bildirim ağı</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                <span>Temizlik filolarına otomatik iş emri ve rota yönlendirmesi</span>
              </div>
            </div>
          </div>

          {/* Kutucuk 2: VİZYONUMUZ (Veri Yeşili Vurgulu) */}
          <div className="bg-white rounded-2xl p-8 border-2 border-teal-100 hover:border-[#00BFA5] shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00BFA5]" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#00BFA5] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                  Vizyonumuz
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#00BFA5] transition-colors">
                Temiz ve Sürdürülebilir Deniz Ekosistemleri
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Yapay zeka ve kitlesel yurttaş bilimi birlikteliğiyle Türkiye’nin tüm deniz havzalarını (Marmara, Ege, Akdeniz, Karadeniz) plastik atıklardan arındırmak; zaman içerisinde oluşan büyük veri havuzu ile kirlilik trendlerini öngören, Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları doğrultusunda uluslararası düzeyde referans kabul edilen öncü bir çevre teknolojisi ekosistemi olmaktır.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                <span>Sıfır plastik atık ve hayalet ağsız deniz yaşamı</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                <span>Ulusal ölçekli deniz kirliliği büyük veri (big data) standardı</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                <span>Akdeniz ve Karadeniz havzalarında örnek küresel çevre modeli</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 3. SORUN TESPİTİ (Uyarı / Dikkat Çeken Kırmızı/Turuncu Kartlar) */}
      <section className="py-12 bg-rose-50/40 border-y border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#FF1744] text-xs font-bold uppercase tracking-wider">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Mevcut Durum ve Aksaklıklar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sorun Tespiti
            </h2>
            <p className="text-sm text-slate-600">
              Geleneksel deniz ve kıyı temizliği yönetiminde karşılaşılan yapısal engeller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sorun 1: Veri Eksikliği */}
            <div className="bg-white rounded-2xl p-6 border-2 border-rose-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#FF1744]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#FF1744] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF1744] transition-colors">
                  Veri Eksikliği
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deniz ve kıyı temizliği faaliyetleri genellikle planlı bir veri analizine dayanmaktan ziyade, gözleme dayalı ve reaktif (sorun büyüdükten sonra müdahale eden) bir şekilde yürütülmektedir.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-rose-100 flex items-center text-xs font-bold text-rose-600">
                <span>Reaktif Yaklaşım Riski</span>
              </div>
            </div>

            {/* Sorun 2: Görünmez Birikimler */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Görünmez Birikimler
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Akıntılar ve rüzgarlar sebebiyle plastik atıklar belirli koylarda veya açık deniz noktalarında birikmektedir, ancak bu sıcak noktaların (hot-spot) anlık haritası çıkarılamamaktadır.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-amber-100 flex items-center text-xs font-bold text-amber-700">
                <span>Kritik Sıcak Nokta Körlüğü</span>
              </div>
            </div>

            {/* Sorun 3: Toplumsal Entegrasyon Kopukluğu */}
            <div className="bg-white rounded-2xl p-6 border-2 border-rose-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#FF1744]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#FF1744] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF1744] transition-colors">
                  Toplumsal Entegrasyon Kopukluğu
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Çevreye duyarlı vatandaşların gördükleri kirliliği anlık olarak yetkililere iletebileceği, sürecin şeffaf bir şekilde takip edilebileceği merkezi, modern ve iyi tasarlanmış bir dijital arayüz bulunmamaktadır.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-rose-100 flex items-center text-xs font-bold text-rose-600">
                <span>Şeffaf İhbar Kanalı Yokluğu</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ÇÖZÜM ÖNERİSİ (PROJE MİMARİSİ - Okyanus Mavisi ve Veri Yeşili Odaklı) */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-[#00BFA5] text-xs font-bold uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>MaviAğ Yaklaşımı</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Çözüm Önerisi (Proje Mimarisi)
          </h2>
          <p className="text-sm text-slate-600">
            Proje, sorunu teknolojik altyapı ve görsel iletişim stratejisi olmak üzere iki koldan çözer:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Çözüm 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077C2]" />
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#0077C2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Camera className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0077C2] transition-colors">
              Görüntü İşleme ile Atık Tespiti
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kıyı bölgelerine yerleştirilen sabit kameralar ve periyodik uçuş yapan drone'lardan alınan görüntüler, makine öğrenmesi modelleri ile analiz edilerek plastik atıkların yoğunluğu ve türü (pet şişe, ağ, mikroplastik birikintisi) tespit edilir.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0077C2]">
              <CheckCircle2 className="w-4 h-4" />
              <span>YOLO & Makine Öğrenmesi</span>
            </div>
          </div>

          {/* Çözüm 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00BFA5]" />
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-[#00BFA5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00BFA5] transition-colors">
              İnteraktif Web Platformu
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tespit edilen "kirlilik sıcak noktaları", dinamik bir web haritası üzerinde işaretlenir. Vatandaşlar da kendi çektikleri fotoğraflarla sisteme kirlilik ihbarında bulunabilir.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#00BFA5]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Canlı GIS & Vatandaş İhbarı</span>
            </div>
          </div>

          {/* Çözüm 3 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077C2] to-[#00BFA5]" />
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Workflow className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
              Gönüllü ve Görevli Yönlendirmesi
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sistem, kirlilik seviyesi kritik eşiği aşan bölgeler için belediye temizlik ekiplerine veya kayıtlı sivil toplum kuruluşlarına otomatik iş emri/bildirim gönderir.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-indigo-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>Otomatik Sevk ve Koordinasyon</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. KULLANILACAK TEKNOLOJİLER VE İŞ AKIŞI (Badges & Tech Cards) */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Modern Teknoloji Yığını</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kullanılacak Teknolojiler ve İş Akışı
            </h2>
            <p className="text-sm text-slate-600">
              Proje geliştirme sürecinde kullanılan uçtan uca modern teknoloji ekosistemi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-teal-50 text-[#00BFA5] rounded-xl">
                  <Database className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-[11px] font-bold rounded-md font-mono">
                  Python & ML
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Veri Bilimi ve Yapay Zeka
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Görüntü verilerinin işlenmesi, atık türlerinin sınıflandırılması ve bölgesel kirlilik tahminlemesi için Python (Pandas, NumPy, makine öğrenmesi kütüphaneleri) altyapısı kullanılacaktır.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Python</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">NumPy</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Pandas</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">YOLOv11</span>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-sky-50 text-[#0077C2] rounded-xl">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-sky-100 text-[#0077C2] text-[11px] font-bold rounded-md font-mono">
                  Figma UI/UX
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Kullanıcı Deneyimi ve Arayüz (UI/UX)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Vatandaşların her yaştan kolayca ihbar yapabilmesi ve haritayı okuyabilmesi için platformun arayüzleri, renk psikolojisi ve görsel hiyerarşi kurallarına uygun olarak Figma üzerinde tasarlanacaktır.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Figma</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Görsel Hiyerarşi</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Renk Psikolojisi</span>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-md font-mono">
                  Front-End
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Web Front-End Geliştirme
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Harita entegrasyonuna sahip interaktif yönetim paneli (dashboard) ve kullanıcı arayüzü HTML5, CSS3 ve JavaScript mimarisiyle, tüm mobil cihazlarda kusursuz çalışacak şekilde (responsive) kodlanacaktır.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">HTML5 / CSS3</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">JavaScript / React</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Leaflet GIS</span>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded-md font-mono">
                  Creative Cloud
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Görsel İletişim ve Markalama
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Projenin halka tanıtılması, sosyal medya kampanyaları ve kurumsal kimlik tasarımları Adobe Creative Cloud (Photoshop, Illustrator, InDesign vb.) araçları ile hazırlanarak güçlü bir görsel hikaye oluşturulacaktır.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Photoshop</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Illustrator</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">InDesign</span>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-md font-mono">
                  Agile & Sprint
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Proje Yönetimi
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Süreç takibi, sprint planlamaları ve ekip içi dokümantasyon Notion üzerinden yönetilecektir. Görev dağılımları ve kilometre taşları şeffaf bir koordinasyon şemasıyla yürütülmektedir.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Notion Workspace</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Sprint Tracking</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded">Documentation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HEDEF KİTLE VE PAYDAŞLAR */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Ekosistem Birlikteliği</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hedef Kitle ve Paydaşlar
          </h2>
          <p className="text-sm text-slate-600">
            MaviAğ platformunun hizmet ettiği toplum kesimleri ve kurumsal iş birliği ortakları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Birincil Kullanıcılar */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#00BFA5] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Birincil Kullanıcılar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Çevreye duyarlı vatandaşlar, yerel gönüllü temizlik ekipleri (örn. lise/üniversite çevre kulüpleri).
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                  <span>Kıyılarda, koylarda ve plajlarda gezen çevre dostu vatandaşlar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                  <span>Üniversite ve lise deniz biyolojisi & çevre kulüpleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                  <span>Amatör dalgıçlar ve kıyı balıkçıları</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-[#00BFA5]">
              Vatandaş Katılımı & Topluluk Gücü
            </div>
          </div>

          {/* Kurumsal Paydaşlar */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077C2] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Kurumsal Paydaşlar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kıyı belediyeleri, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı, TÜRÇEV gibi çevre vakıfları.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                  <span>Kıyı il ve ilçe belediyeleri temizlik işleri müdürlükleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                  <span>Çevre, Şehircilik ve İklim Değişikliği Bakanlığı</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0077C2]" />
                  <span>TÜRÇEV (Mavi Bayrak) ve DenizTemiz TURMEPA vakıfları</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-[#0077C2]">
              Resmi Entegrasyon & Ortak Yönetim
            </div>
          </div>

        </div>
      </section>

      {/* 7. BEKLENEN ETKİ VE ÇIKTILAR (Başarı Odaklı - Okyanus Mavisi ve Veri Yeşili) */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-teal-50/50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00BFA5] text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Somut Değer Üretimi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Beklenen Etki ve Çıktılar
            </h2>
            <p className="text-sm text-slate-600">
              MaviAğ operasyonlarının deniz ekosistemine ve kamu kaynaklarına sağlayacağı ölçülebilir kazanımlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Çıktı 1 */}
            <div className="bg-white rounded-2xl p-7 border-2 border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0077C2] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Yakıt ve Zaman Tasarrufu
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Temizlik operasyonlarında yakıt ve zaman tasarrufu sağlanması (Ekipler sadece verinin gösterdiği, gerçekten kirli noktalara yönlendirilecek).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-[#0077C2]">
                ✓ %40+ Saha Verimliliği
              </div>
            </div>

            {/* Çıktı 2 */}
            <div className="bg-white rounded-2xl p-7 border-2 border-teal-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#00BFA5] flex items-center justify-center">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Büyük Veri (Big Data) Havuzu
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zaman içerisinde hangi koylarda, hangi mevsimlerde kirliliğin arttığına dair yıllara sari bir büyük veri (big data) havuzu oluşması.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-[#00BFA5]">
                ✓ Yıllık Kirlilik Trend Analizi
              </div>
            </div>

            {/* Çıktı 3 */}
            <div className="bg-white rounded-2xl p-7 border-2 border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Toplumsal Katılımın Dijitalleşmesi
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Görsel olarak etkileyici ve kullanımı kolay bir arayüz sayesinde toplumun çevre sorunlarına aktif katılımının dijitalleştirilmesi.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-600">
                ✓ Şeffaf & Sürdürülebilir Yurttaşlık
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA STRIP */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            MaviAğ Ekosistemine Katılın
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            İster bireysel ihbar yaparak kirlilik noktalarını bildirin, ister kurumunuzla veri entegrasyonu sağlayın.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/ihbar"
              className="px-6 py-3 bg-[#00BFA5] hover:bg-[#009688] text-white text-xs sm:text-sm font-bold rounded-xl transition-all hover:scale-105"
            >
              Hemen İhbar Yap
            </Link>
            <Link
              to="/iletisim"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all"
            >
              Kurumsal İletişime Geç
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
