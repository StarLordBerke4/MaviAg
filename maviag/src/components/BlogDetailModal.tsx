import React from 'react';
import { BlogPost } from '../data/blogData';
import { X, Calendar, Clock, Tag, Share2, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <article
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200/80 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image & Category Header */}
        <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Read Time overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
            <span className="px-3 py-1 bg-[#0077C2] text-white font-bold rounded-full text-xs shadow-md">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-slate-300 font-mono text-[11px] bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00BFA5]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 max-h-[65vh] overflow-y-auto space-y-6">
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {post.title}
          </h2>

          {/* Author Bar */}
          <div className="flex items-center justify-between py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-sky-100"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{post.author.name}</h4>
                <p className="text-xs text-slate-500">{post.author.title}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Paylaş</span>
                </>
              )}
            </button>
          </div>

          {/* Excerpt Lead */}
          <p className="text-base font-semibold text-slate-700 bg-sky-50/70 p-4 rounded-2xl border-l-4 border-[#0077C2] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              İlgili Konu Başlıkları
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-[#0077C2]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#00BFA5]" />
            MaviAğ Çevre & Yapay Zeka Bülteni
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            Kapat
          </button>
        </div>
      </article>
    </div>
  );
};
