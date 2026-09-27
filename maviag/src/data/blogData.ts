export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Yapay Zeka & Ar-Ge' | 'Saha Operasyonları' | 'Yurttaş Bilimi' | 'Rapor & Analiz' | 'Sürdürülebilirlik';
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'yolov11-deniz-atigi-tespiti',
    title: 'YOLOv11 ve Uydu Spektroskopisi ile Deniz Plastiklerinin Gerçek Zamanlı Tespiti',
    excerpt: 'Deniz yüzeyindeki mikro ve makro polimerleri milisaniyeler içinde ayrıştıran derin öğrenme mimarimizin teknik detayları ve saha test sonuçları.',
    category: 'Yapay Zeka & Ar-Ge',
    author: {
      name: 'Dr. Selin Erdem',
      title: 'MaviAğ Yapay Zeka Araştırma Lideri',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '24 Eylül 2026',
    readTime: '5 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Yapay Zeka', 'YOLOv11', 'Görüntü İşleme', 'Sentinel-2'],
    content: [
      'Deniz yüzeyinde rüzgar ve akıntılarla sürekli yer değiştiren atıkların tespiti, klasik kara tabanlı nesne tanıma modelleri için ciddi bir optik ve geometrik zorluk barındırır. Su yansıması (glint), dalga kırılmaları ve değişken ışık açıları atıkların tespitini güçleştirmektedir.',
      'MaviAğ Ar-Ge ekibi olarak geliştirdiğimiz özelleştirilmiş YOLOv11-Marine mimarisi, kıyı sabit kameralarından ve dronlardan gelen yüksek çözünürlüklü RGB akışını eşzamanlı olarak işlemektedir. Model, 12 farklı polimer sınıfını (PET, HDPE, polistiren vb.) %95.4 genel doğruluk oranıyla ve ortalama 48 milisaniye gecikmeyle sınıflandırabilmektedir.',
      'Buna ek olarak Avrupa Uzay Ajansı (ESA) Sentinel-2 uydusundan alınan kızılötesi ve spektral yansıma bantları, açık denizdeki kirlilik yoğunlaşmalarını birkaç piksel seviyesinde tahmin etmemize imkan tanıyor. Elde edilen veriler GIS koordinatlarına dönüştürülerek doğrudan belediye temizlik botlarımıza dinamik rota olarak aktarılmaktadır.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'hayalet-aglar-denizlerin-sessiz-katili',
    title: 'Hayalet Ağlar: Denizlerimizin Görünmez Katilleri ve Kurtarma Operasyonu',
    excerpt: 'Bodrum ve Kaş resiflerinde terk edilmiş monofilament trol ağlarının deniz biyotopuna verdiği zararlar ve MaviAğ dalış timlerinin temizlik hikayesi.',
    category: 'Saha Operasyonları',
    author: {
      name: 'Kaptan Murat Vural',
      title: 'Kıyı Emniyeti Dalış Tim Lideri',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '18 Eylül 2026',
    readTime: '4 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Hayalet Ağ', 'Sualtı Temizliği', 'Resif Koruma', 'Bodrum'],
    content: [
      'Balıkçılık esnasında kayalıklara veya batıklara takılarak terk edilen naylon monofilament ağlar, yüzlerce yıl boyunca deniz dibinde balıkları, orfozları, deniz kaplumbağalarını ve mercan kolonilerini avlamaya devam eder. Bu olguya uluslararası literatürde "Hayalet Avcılık" (Ghost Fishing) denilmektedir.',
      'Geçtiğimiz hafta MaviAğ sistemine Bodrum Karaada açıklarından gelen bir gönüllü ihbarı, sualtı dronumuz tarafından teyit edildi. 14 metre derinlikte 80 metre uzunluğunda dev bir gırgır ağı kalıntısı tespit edildi.',
      'Sistemin otomatik olarak görevlendirdiği Mavi Dalış Timi, 3 saatlik hassas bir sualtı operasyonuyla ağı resiften ayırarak yüzeye çıkardı. Ağ içerisinde sıkışmış halde bulunan 6 adet deniz canlısı canlı olarak doğal habitatına iade edildi.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'vatandas-bilimi-ile-koy-kurtarma',
    title: 'Vatandaş Bilimi: Akıllı Telefonunuzla Bir Koyu Nasıl Kurtarabilirsiniz?',
    excerpt: 'Hafta sonu yürüyüşünde çektiğiniz tek bir kirlilik fotoğrafının, yapay zeka algoritmasıyla belediyelere resmi iş emrine dönüşme serüveni.',
    category: 'Yurttaş Bilimi',
    author: {
      name: 'Cansu Kaya',
      title: 'MaviAğ Topluluk & Yurttaş Bilimi Sorumlusu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '12 Eylül 2026',
    readTime: '3 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Yurttaş Bilimi', 'Mobil İhbar', 'Gönüllülük', 'Toplum Katılımı'],
    content: [
      'Teknoloji ne kadar gelişirse gelişsin, binlerce kilometrelik kıyı şeridimizi korumanın en güçlü yolu kıyıda yürüyen, yüzen veya yelken açan çevreye duyarlı bireylerin gözlemleridir.',
      'MaviAğ platformunun ihbar formunu tasarlarken en büyük hedefimiz sıfır bürokrasiydi. Kullanıcı yalnızca fotoğrafı yüklüyor; yapay zekamız nesneyi tanımlıyor, konum GPS üzerinden alınıyor ve sistem tehlike skorunu hesaplıyor.',
      'Platform yayına girdiğinden bu yana gelen 3.100\'den fazla bildirimin %72\'si doğrudan vatandaşlarımızdan geldi. Bu sayede belediyeler daha önce fark edilmeyen izole koylardaki kirlilik odaklarına 24 saat içinde müdahale edebildi.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'marmara-denizi-2026-kirlilik-analizi',
    title: 'Marmara Denizi 2026 Kirlilik Raporu: Akıntılar Plastikleri Nerelere Taşıyor?',
    excerpt: 'İstanbul Boğazı çift yönlü akıntıları, lodos fırtınaları ve Prens Adaları kıyılarında biriken atıkların 6 aylık ısı haritası bulguları.',
    category: 'Rapor & Analiz',
    author: {
      name: 'Prof. Dr. Tarık Sezgin',
      title: 'Deniz Bilimleri & Oşinografi Danışmanı',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '05 Eylül 2026',
    readTime: '6 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Marmara Denizi', 'Akıntı Modeli', 'Büyük Veri', 'Isı Haritası'],
    content: [
      'Marmara Denizi, Karadeniz\'den gelen üst akıntı ile Akdeniz\'den gelen yoğun tuzlu alt akıntının kesiştiği dünyadaki en özel iç denizlerden biridir. Bu dinamik yapı, yüzeyde yüzen atıkların rastgele dağılmak yerine belirli hidrolojik girdaplarda (eddy) toplanmasına yol açar.',
      'MaviAğ sisteminin 6 aylık veri tabanı incelendiğinde, Büyükada ve Kınalıada güneybatı koridorunda atık birikiminin özellikle lodos fırtınalarının ardından %340 oranında arttığı ortaya çıkmıştır.',
      'Bu modelleme sayesinde artık fırtına dinmeden önce temizlik teknelerinin nerede beklemesi gerektiğini önceden tahmin edebiliyor ve yakıt sarfiyatını %45 oranında azaltıyoruz.'
    ]
  },
  {
    id: 'blog-5',
    slug: 'dongusel-ekonomi-deniz-plastikleri',
    title: 'Döngüsel Ekonomi: Denizden Toplanan 4.2 Ton Plastik Neye Dönüşüyor?',
    excerpt: 'Kıyı temizliklerinde toplanan PET şişeler ve naylon ağların endüstriyel geri dönüşümle kompozit malzemelere ve tekstile kazandırılması.',
    category: 'Sürdürülebilirlik',
    author: {
      name: 'Emre Demir',
      title: 'Döngüsel Malzeme Mühendisi',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '28 Ağustos 2026',
    readTime: '4 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Döngüsel Ekonomi', 'Geri Dönüşüm', 'Sıfır Atık', 'Tekstil'],
    content: [
      'Denizden atığı çıkarmak başarının yalnızca ilk adımıdır; bu atıkların düzenli depolama sahalarına gönderilip yakılması yerine ekonomik değere dönüştürülmesi gerekir.',
      'Sponsorumuz Döngüsel Polimer A.Ş. ile yürüttüğümüz pilot programda, deniz suyunda tuz ve güneşe maruz kalarak yıpranmış plastikler özel yıkama ve ayrıştırma prosesinden geçirilmektedir.',
      'Bugüne kadar toplanan 4.2 ton polietilen ve naylon atık; kıyı bankları, yürüyüş yolları için kompozit parke taşları ve çevre dostu denizci üniformalarının ipliklerinde hammadde olarak yeniden hayat buldu.'
    ]
  },
  {
    id: 'blog-6',
    slug: 'otonom-deniz-temizlik-botlari-ve-iha-surusu',
    title: 'Otonom Deniz Temizlik Botları ve İHA Sürüsü Entegrasyonu',
    excerpt: 'İzmir Körfezi ve Haliç\'te test edilen güneş enerjili insansız yüzey araçlarının (USV) MaviAğ API\'si ile otonom rota planlaması.',
    category: 'Yapay Zeka & Ar-Ge',
    author: {
      name: 'MaviAğ Robotik Takımı',
      title: 'Otonom Deniz Sistemleri Grubu',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '15 Ağustos 2026',
    readTime: '5 dk okuma',
    imageUrl: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Otonom Botlar', 'İHA Sürüsü', 'USV', 'İzmir Körfezi'],
    content: [
      'Dar koylarda ve sığ sularda insanlı teknelerin manevra yapması hem maliyetli hem de çevresel açıdan motor gürültüsü nedeniyle risklidir.',
      'İzmir Körfezi\'nde başlatılan pilot uygulamada, havadan uçan otonom dron sürüsü kirlilik kümesini tespit ettiği anda MaviAğ API\'si üzerinden güneş enerjili insansız temizlik botuna GPS koordinatını gönderiyor.',
      'Bot, yapay zeka tarafından hesaplanan en kısa rotayı izleyerek atık kümesini yüzey bantları yardımıyla toplamakta ve haznesi dolduğunda kıyı istasyonuna otomatik olarak dönmektedir.'
    ]
  }
];
