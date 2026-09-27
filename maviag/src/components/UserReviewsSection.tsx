import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MessageSquareHeart, 
  CheckCircle2, 
  Quote, 
  Plus, 
  Sparkles, 
  Send, 
  X, 
  ShieldCheck, 
  Users, 
  Award,
  TrendingUp,
  MapPin
} from 'lucide-react';

export interface UserReview {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  category: 'Gönüllü & Dalgıç' | 'Belediye & STK' | 'Denizci & Sporcu' | 'Vatandaş';
  verified: boolean;
  likes: number;
}

const INITIAL_REVIEWS: UserReview[] = [
  {
    id: 'rev-1',
    name: 'Alp Doğan',
    role: 'Gönüllü Dalgıç & Eğitmen',
    location: 'Bodrum, Muğla',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '25 Eylül 2026',
    comment: 'Karaada resifinde dalış yaparken karşılaştığımız 60 metrelik hayalet trol ağını MaviAğ üzerinden fotoğraflayıp koordinatıyla bildirdik. Yapay zeka kirliliği "Kritik" olarak sınıflandırdı ve ertesi sabah belediye temizlik botuyla ağı resiften kurtardık. Hız ve koordinasyon mükemmel!',
    category: 'Gönüllü & Dalgıç',
    verified: true,
    likes: 34
  },
  {
    id: 'rev-2',
    name: 'Elif Yılmaz',
    role: 'Çevre Koruma ve Kontrol Müdürü',
    location: 'Konak, İzmir',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '22 Eylül 2026',
    comment: 'MaviAğ belediye yönetim paneli sayesinde temizlik teknelerimizi körfezde rastgele dolaştırmak yerine doğrudan yapay zekanın önceliklendirdiği koordinatlara sevk ediyoruz. Yakıt sarfiyatımız %40 oranında azaldı, toplanan katı atık miktarı ise iki katına çıktı.',
    category: 'Belediye & STK',
    verified: true,
    likes: 48
  },
  {
    id: 'rev-3',
    name: 'Mehmet Can Tekin',
    role: 'Yelken Antrenörü & Kıyı Sakini',
    location: 'Heybeliada, İstanbul',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '19 Eylül 2026',
    comment: 'Prens Adaları etrafında genç sporcularımızla antrenmandayken kıyıya vuran devasa plastik ve sintine atığını cep telefonumdan tek tıkla bildirdim. Uygulamanın konum doğrulaması ve yapay zeka analizi çok pratik; 3 saat sonra temizlik ekipleri bölgedeydi.',
    category: 'Denizci & Sporcu',
    verified: true,
    likes: 29
  },
  {
    id: 'rev-4',
    name: 'Dr. Aslıhan Koç',
    role: 'Deniz Biyoloğu & Araştırmacı',
    location: 'Kaş, Antalya',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '14 Eylül 2026',
    comment: 'Kaş-Kekova Özel Çevre Koruma Bölgesi\'ndeki deniz çayırlarını tehdit eden mikroplastik ve atık yoğunluklarını MaviAğ\'ın canlı ısı haritasından takip ediyoruz. Açık veri politikası ve AI doğrulaması akademik araştırmalarımız için eşsiz bir kaynak.',
    category: 'Gönüllü & Dalgıç',
    verified: true,
    likes: 52
  },
  {
    id: 'rev-5',
    name: 'Serdar Akın',
    role: 'Geleneksel Kıyı Balıkçısı',
    location: 'Gelibolu, Çanakkale',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '10 Eylül 2026',
    comment: 'Eski terk edilmiş misinalar ve ağlar teknelerimizin pervanesine dolanıp motor yakıyordu. MaviAğ sayesinde balıkçı barınaklarındaki arkadaşlarımızla gördüğümüz ağları işaretliyoruz, ekipler hızla temizliyor. Denizlerimiz nefes alıyor.',
    category: 'Denizci & Sporcu',
    verified: true,
    likes: 21
  },
  {
    id: 'rev-6',
    name: 'Zeynep Karaca',
    role: 'Üniversite Çevre Kulübü Başkanı',
    location: 'Muratpaşa, Antalya',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '04 Eylül 2026',
    comment: 'Hafta sonu düzenlediğimiz kıyı temizleme etkinliklerimizde MaviAğ haritasına bakarak en acil müdahale bekleyen koyları seçiyoruz. Topladığımız 40 torba atığı sisteme girip kirlilik puanının düştüğünü görmek tüm ekibe büyük moral veriyor.',
    category: 'Vatandaş',
    verified: true,
    likes: 38
  }
];

export const UserReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<UserReview[]>(() => {
    try {
      const saved = localStorage.getItem('maviag_user_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    rating: 5,
    category: 'Vatandaş' as UserReview['category'],
    comment: ''
  });

  const handleLike = (id: string) => {
    setReviews(prev => {
      const updated = prev.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r);
      try {
        localStorage.setItem('maviag_user_reviews', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newReview: UserReview = {
      id: `rev-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Çevre Gönüllüsü',
      location: formData.location.trim() || 'Türkiye',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      rating: formData.rating,
      date: 'Az önce',
      comment: formData.comment.trim(),
      category: formData.category,
      verified: true,
      likes: 1
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('maviag_user_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddModal(false);
      setFormData({
        name: '',
        role: '',
        location: '',
        rating: 5,
        category: 'Vatandaş',
        comment: ''
      });
    }, 1500);
  };

  const categories = [
    { id: 'all', label: 'Tüm Yorumlar' },
    { id: 'Gönüllü & Dalgıç', label: 'Gönüllüler & Dalgıçlar' },
    { id: 'Belediye & STK', label: 'Belediyeler & STK\'lar' },
    { id: 'Denizci & Sporcu', label: 'Denizciler & Sporcular' },
    { id: 'Vatandaş', label: 'Vatandaş İhbarcılar' },
  ];

  const filteredReviews = activeCategory === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Wave Accents */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-sky-50 rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-teal-50 rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Bar with Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider">
              <MessageSquareHeart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Topluluk & Gönüllü Deneyimleri</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kullanıcılarımız ve Deniz Dostları Ne Diyor?
            </h3>
            
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
              MaviAğ ile kirlilik bildiren vatandaşların, dalgıçların ve sahadaki temizlik ekiplerinin gerçek geri bildirimleri.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0077C2] hover:bg-[#005fa0] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Deneyimini Paylaş</span>
            </button>
          </div>
        </div>

        {/* Statistical Highlights Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/80">
          <div className="flex items-center gap-3 sm:gap-3.5 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">4.9 / 5.0</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">1.420+ Kullanıcı Puanı</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">%98.4</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Hızlı Müdahale Memnuniyeti</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-[#0077C2] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">3.200+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Aktif İhbarcı & Dalgıç</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-100 text-[#00BFA5] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">84 Kurum</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Belediye & STK Entegrasyonu</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                
                {/* Header: User Info & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                        {rev.verified && (
                          <span title="Doğrulanmış Gönüllü">
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#0077C2] font-semibold">{rev.role}</p>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
                    {rev.category}
                  </span>
                </div>

                {/* Star Rating & Date */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{rev.date}</span>
                </div>

                {/* Comment Text with Quote Mark */}
                <div className="relative pt-1">
                  <Quote className="w-5 h-5 text-slate-200 absolute -top-1 -left-1 opacity-70 -z-0" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10 pl-2">
                    "{rev.comment}"
                  </p>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[10px] text-emerald-600 font-bold font-mono">
                  ✓ Doğrulanmış Saha İhbarı
                </span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-500 text-[11px] transition-colors"
                  title="Faydalı Buldum"
                >
                  <MessageSquareHeart className="w-3.5 h-3.5" />
                  <span>{rev.likes}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ADD REVIEW MODAL */}
      {showAddModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deneyimini Paylaş</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                MaviAğ Geri Bildirim Formu
              </h3>
              <p className="text-xs text-slate-500">
                İhbar deneyiminizi, temizlik operasyonlarına dair görüşlerinizi toplulukla paylaşın.
              </p>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Yorumunuz Başarıyla Yayınlandı!</h4>
                <p className="text-xs text-slate-500">Denizlerimizi temiz tutma mücadelesine katkınız için teşekkür ederiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ayşe Demir"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Şehir / Bölge</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Örn: Fethiye, Muğla"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Rolünüz / Ünvanınız</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Örn: Gönüllü Dalgıç, Kıyı Sakini"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Kategori</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as UserReview['category'] })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    >
                      <option value="Vatandaş">Vatandaş İhbarcı</option>
                      <option value="Gönüllü & Dalgıç">Gönüllü & Dalgıç</option>
                      <option value="Belediye & STK">Belediye & STK</option>
                      <option value="Denizci & Sporcu">Denizci & Sporcu</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Deneyim Puanınız</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= formData.rating 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">
                      {formData.rating} / 5 Yıldız
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Yorumunuz / Deneyiminiz *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="MaviAğ platformunu kullanırken yaşadığınız deneyimi, ihbar sürecini ve ekiplerin müdahale hızını yazabilirsiniz..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#0077C2] hover:bg-[#005fa0] text-white text-xs font-bold rounded-xl shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Yorumu Gönder</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
