import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldAlert, 
  PhoneCall, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  MessageSquare,
  Sparkles,
  Waves
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organizationType, setOrganizationType] = useState('bireysel');
  const [subject, setSubject] = useState('genel');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'İhbar ettiğim kirlilik ne kadar sürede haritada yayınlanır?',
      a: 'Yüklediğiniz fotoğraf anında yapay zeka görüntü işleme modelimiz (YOLOv11) tarafından taranır. Doğruluk skoru ve atık türü belirlendikten hemen sonra haritada "Beklemede" statüsüyle görünür ve ilgili bölge ekiplerine bildirim gider.',
    },
    {
      q: 'Anonim olarak ihbarda bulunabilir miyim?',
      a: 'Evet, ihbar formundaki "Anonim İhbar Yap" seçeneğini işaretleyerek kimlik bilginizi paylaşmadan sadece konum ve atık fotoğrafıyla sisteme katkı sağlayabilirsiniz.',
    },
    {
      q: 'Belediyemiz veya çevre kulübümüz MaviAğ ile nasıl entegre olabilir?',
      a: 'Kıyı belediyeleri ve çevre STK’ları için özel bir Yönetici & Sevk Paneli yetkisi tanımlanmaktadır. Bu sayfadaki formu "Kurumsal İş Birliği / STK" konusuyla doldurarak API erişimi ve yetki talebinde bulunabilirsiniz.',
    },
    {
      q: 'Hangi tür deniz atıklarını tespit edebiliyorsunuz?',
      a: 'Modelimiz yüzen PET şişeleri, naylon poşetleri, strafor ambalajları, deniz dibi ve resiflere takılan hayalet balık ağlarını, halatları ve su yüzeyindeki petrol/sintine tabakalarını yüksek doğrulukla tespit etmektedir.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Buraya İletişim Formu API endpointi gelecek (POST /api/contact)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-radial from-sky-900 via-[#004e82] to-[#002f52] text-white py-14 lg:py-20">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
            <Mail className="w-3.5 h-3.5 text-[#00BFA5]" />
            <span>MaviAğ Koordinasyon & Destek Merkezi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Bizimle İletişime Geçin
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal">
            Belediye entegrasyonu, sivil toplum temizlik iş birlikleri, veri bilimi araştırmaları veya teknik destek için ekibimizle dilediğiniz zaman temas kurabilirsiniz.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0077C2]" />
                İletişim ve İş Birliği Formu
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tüm mesajlar 24 saat içinde koordinasyon ekibimizce yanıtlanmaktadır.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-100 text-[#00BFA5] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Mesajınız Başarıyla İletildi</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Talebiniz alınmış olup MaviAğ koordinasyon ekibimiz en kısa sürede e-posta veya telefon yoluyla geri bildirim sağlayacaktır.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 px-4 py-2 bg-[#0077C2] text-white text-xs font-semibold rounded-lg hover:bg-[#005a94] transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Adınız Soyadınız <span className="text-[#FF1744]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Örn: Selin Aydın"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      E-Posta Adresiniz <span className="text-[#FF1744]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ad.soyad@ornek.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Telefon Numarası (Opsiyonel)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0532 ..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Kullanıcı / Kurum Türü
                    </label>
                    <select
                      value={organizationType}
                      onChange={(e) => setOrganizationType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    >
                      <option value="bireysel">Bireysel Gönüllü / Vatandaş</option>
                      <option value="belediye">Belediye & Kamu Kurumu</option>
                      <option value="stk">Sivil Toplum Kuruluşu (STK)</option>
                      <option value="universite">Üniversite / Araştırma Grubu</option>
                      <option value="dalis">Dalış Okulu / Deniz Kulübü</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    İletişim Konusu
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  >
                    <option value="genel">Genel Bilgi ve Soru</option>
                    <option value="isbirligi">Belediye & Kurumsal Sevk Entegrasyonu</option>
                    <option value="stk">Gönüllü Temizlik Ekibi Kaydı</option>
                    <option value="teknik">API & Veri Bilimi Ortaklığı</option>
                    <option value="basin">Basın, Medya ve Sponsorluk</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mesajınız <span className="text-[#FF1744]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Bize iletmek istediğiniz detayları, iş birliği önerinizi veya sorunuzu yazınız..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#0077C2] hover:bg-[#005a94] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>İletiliyor...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Mesajı Gönder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Contacts & Emergency Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Info Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">İletişim Bilgileri</h3>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Mail className="w-4 h-4 text-[#0077C2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">E-Posta Adresi</span>
                    <a href="mailto:iletisim@maviag.org.tr" className="text-[#0077C2] hover:underline">
                      iletisim@maviag.org.tr
                    </a>
                    <span className="text-[11px] text-slate-400 block">Koordinasyon: ekip@maviag.org.tr</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-[#00BFA5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Koordinasyon Merkezleri</span>
                    <span>İstanbul (Marmara Havzası) & İzmir (Ege Kıyı İzleme)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Çalışma Saatleri</span>
                    <span>Dijital AI Taraması: 7/24 Kesintisiz</span>
                    <span className="text-[11px] text-slate-400 block">Operasyon Sevk Masası: 08:30 - 18:30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Boxes */}
            <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <ShieldAlert className="w-5 h-5 text-[#FF1744]" />
                <span>Acil Deniz ve Çevre İhbar Hatları</span>
              </div>
              <p className="text-xs text-slate-600">
                Can güvenliğini tehdit eden durumlar veya ağır gemi sintine / kimyasal sızıntılarında doğrudan ulusal acil numaraları arayabilirsiniz:
              </p>

              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-rose-200">
                  <span className="font-bold text-slate-800">Sahil Güvenlik Komutanlığı</span>
                  <a href="tel:158" className="px-2.5 py-1 bg-rose-600 text-white font-bold rounded hover:bg-rose-700">
                    Alo 158
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-teal-200">
                  <span className="font-bold text-slate-800">Çevre ve Şehircilik Hattı</span>
                  <a href="tel:181" className="px-2.5 py-1 bg-[#00BFA5] text-white font-bold rounded hover:bg-[#009688]">
                    Alo 181
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SIKÇA SORULAN SORULAR (FAQ) */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm text-slate-600">
            MaviAğ platformunun işleyişi hakkında en çok yöneltilen sorular ve cevapları.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#0077C2] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#0077C2] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
