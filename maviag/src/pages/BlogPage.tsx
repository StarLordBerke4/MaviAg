import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  User, 
  Filter, 
  Layers, 
  ChevronRight,
  TrendingUp,
  X
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BlogDetailModal } from '../components/BlogDetailModal';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  const categories = [
    'all',
    'Yapay Zeka & Ar-Ge',
    'Saha Operasyonları',
    'Yurttaş Bilimi',
    'Rapor & Analiz',
    'Sürdürülebilirlik',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (selectedCategory !== 'all' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(query);
        const matchExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchAuthor = post.author.name.toLowerCase().includes(query);
        const matchTag = post.tags.some(t => t.toLowerCase().includes(query));
        if (!matchTitle && !matchExcerpt && !matchAuthor && !matchTag) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-radial from-sky-900 via-[#004e82] to-[#002f52] text-white py-14 lg:py-20">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#00BFA5]" />
            <span>MaviAğ Bülten & Araştırma Yazıları</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Deniz Teknolojisi ve Çevre Blogu
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal">
            Yapay zeka modellerimiz, uydu görüntü işleme analizleri, sualtı dalış operasyonları ve sıfır atık inisiyatiflerine dair derinlemesine makaleler.
          </p>
        </div>
      </section>

      {/* 2. MAIN BLOG CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Search & Category Tabs Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0077C2] text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'Tüm Yazılar' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Yazı, yazar veya etiket ara..."
              className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* 3. FEATURED HERO ARTICLE (Shown when no search/filters active) */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image */}
              <div className="lg:col-span-7 relative aspect-16/9 lg:aspect-auto bg-slate-900 overflow-hidden">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0077C2] text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Öne Çıkan Makale
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="text-[#00BFA5] font-bold uppercase">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 
                    onClick={() => setActiveModalPost(featuredPost)}
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0077C2] transition-colors cursor-pointer leading-snug"
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-sky-100"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{featuredPost.author.name}</h4>
                      <p className="text-[10px] text-slate-400">{featuredPost.publishedAt}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalPost(featuredPost)}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-sky-50 text-[#0077C2] hover:bg-sky-100 rounded-xl text-xs font-bold transition-colors"
                  >
                    <span>Yazıyı Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 4. ARTICLES GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              {selectedCategory === 'all' ? 'Tüm Makaleler' : selectedCategory} ({filteredPosts.length})
            </h3>
            {searchQuery && (
              <span className="text-xs text-slate-500">
                "{searchQuery}" için sonuçlar
              </span>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-slate-800 text-base">Aradığınız kriterlere uygun makale bulunamadı</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Farklı bir anahtar kelime deneyebilir veya tüm kategorilere geri dönebilirsiniz.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-2 text-xs font-bold text-[#0077C2] hover:underline"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActiveModalPost(post)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-[#0077C2] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/60 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded-md backdrop-blur-xs">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
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
                  <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-[11px] font-bold text-slate-700 line-clamp-1 max-w-[120px]">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-[#0077C2] font-semibold flex items-center gap-0.5 text-xs group-hover:underline">
                      <span>Devamını Oku</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* 5. CALL TO ACTION STRIP: İhbar Yap & Bültene Katıl */}
        <div className="bg-gradient-to-r from-sky-900 via-[#005a94] to-[#00BFA5] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Denizlerimizi Korumak İçin Siz de Bir Adım Atın
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
              Gördüğünüz kirlilik noktalarını fotoğraflayıp haritamıza ekleyin veya temizlik gönüllüsü olarak aramıza katılın.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/ihbar"
              className="px-6 py-3 bg-white text-[#0077C2] hover:bg-slate-50 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              Kirlilik İhbarı Yap
            </Link>
            <Link
              to="/harita"
              className="px-6 py-3 bg-[#00BFA5] hover:bg-[#009688] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              Canlı Haritayı Gör
            </Link>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL IF ARTICLE OPENED */}
      {activeModalPost && (
        <BlogDetailModal
          post={activeModalPost}
          onClose={() => setActiveModalPost(null)}
        />
      )}

    </div>
  );
};
