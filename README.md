# 🌊 Proje MaviAğ: Yapay Zeka Destekli Kıyı ve Deniz Atığı Yönetim Sistemi

> Deniz kirliliği ve plastik atıklar sorununu çözmeye yönelik, modern teknolojileri ve toplumsal katılımı bir araya getiren kapsamlı çevre teknolojisi platformu.

---

## 🌐 Canlı Web Sitesi & Demo Bağlantıları

Platformu tarayıcınız üzerinden canlı olarak deneyimleyebilir, interaktif haritayı inceleyebilir ve yapay zeka destekli ihbar sistemini test edebilirsiniz:

- 🚀 **Canlı Uygulama (Canlıya Alınmış Hali):** [https://mavi-ag.vercel.app/](https://mavi-ag.vercel.app/)

---

## 📸 Proje Görselleri ve Arayüz Galerisi

MaviAğ platformunun tüm arayüzleri, renk psikolojisi ve görsel hiyerarşi kurallarına uygun olarak masaüstü, tablet ve mobil cihazlar için özel olarak geliştirilmiştir:

### 1. Canlı Kirlilik Sıcak Noktaları Haritası
Türkiye kıyılarındaki doğrulanmış kirlilik noktalarının anlık haritası; acil müdahale (kritik), orta ve düşük yoğunluk seviyelerine göre kategorize edilir.

<a href=""><img align="center" src="https://github.com/StarLordBerke4/MaviAg/blob/main/img/anasayfa.png" alt="anasayfa" width="1200"/></a>

### 2. Canlı Kirlilik Sıcak Noktaları Haritası
Türkiye kıyılarındaki doğrulanmış kirlilik noktalarının anlık haritası; acil müdahale (kritik), orta ve düşük yoğunluk seviyelerine göre kategorize edilir.

<a href=""><img align="center" src="https://github.com/StarLordBerke4/MaviAg/blob/main/img/kirlilikharitasi.png" alt="kirlilikharitasi" width="1200"/></a>

### 3. Yapay Zeka Destekli İhbar & Atık Analiz Portalı
Vatandaşların çektikleri fotoğrafları yükleyebildiği, yapay zekanın atık türünü (pet şişe, ağ, polimer) ve güven skorunu anında tespit ettiği kullanıcı dostu form.

<a href=""><img align="center" src="https://github.com/StarLordBerke4/MaviAg/blob/main/img/ihbaret.png" alt="ihbaret" width="1200"/></a>

### 4. Yönetici & Saha Temizlik Ekipleri Sevk Paneli
Belediye temizlik filoları ve STK timleri için kirlilik onaylama, reddetme ve en yakın deniz temizleme aracına görev atama konsolu.

<a href=""><img align="center" src="https://github.com/StarLordBerke4/MaviAg/blob/main/img/yoneticipaneli.png" alt="yoneticipaneli" width="1200"/></a>

### 5. Mobil ve Tablet Arayüzü (Uygulama Deneyimi)
Akıllı telefonlar için başparmakla tek elle rahatça kontrol edilebilen yüzen alt uygulama menüsü (App Bar) ve zengin kart menüleri.

<a href=""><img align="center" src="https://github.com/StarLordBerke4/egitim-fayi-projesi/blob/main/img/Banner.png" alt="Banner" width="1200"/></a>

---

## 🎯 Projenin Amacı

Kıyı şeritlerinde ve deniz yüzeyinde biriken plastik atıkları veri bilimi ve görüntü işleme teknolojileri kullanarak tespit etmek; toplanan verileri kullanıcı dostu bir web platformu aracılığıyla yerel yönetimler, sivil toplum kuruluşları ve gönüllülerle paylaşarak temizlik operasyonlarını **veri odaklı ve proaktif** hale getirmektir.

---

## ⚠️ Sorun Tespiti

* **Veri Eksikliği:** Deniz ve kıyı temizliği faaliyetleri genellikle planlı bir veri analizine dayanmaktan ziyade, gözleme dayalı ve reaktif (sorun büyüdükten sonra müdahale eden) bir şekilde yürütülmektedir.
* **Görünmez Birikimler:** Akıntılar ve rüzgarlar sebebiyle plastik atıklar belirli koylarda veya açık deniz noktalarında birikmektedir, ancak bu sıcak noktaların (hot-spot) anlık haritası çıkarılamamaktadır.
* **Toplumsal Entegrasyon Kopukluğu:** Çevreye duyarlı vatandaşların gördükleri kirliliği anlık olarak yetkililere iletebileceği, sürecin şeffaf bir şekilde takip edilebileceği merkezi, modern ve iyi tasarlanmış bir dijital arayüz bulunmamaktadır.

---

## 💡 Çözüm Önerisi (Proje Mimarisi)

Proje, sorunu teknolojik altyapı ve görsel iletişim stratejisi olmak üzere iki koldan çözer:

1. **Görüntü İşleme ile Atık Tespiti:** Kıyı bölgelerine yerleştirilen kameralar ve periyodik uçuş yapan drone'lardan/vatandaş fotoğraflarından alınan görüntüler, makine öğrenmesi modelleri ile analiz edilerek plastik atıkların yoğunluğu ve türü (pet şişe, hayalet ağ, mikroplastik birikintisi) tespit edilir.
2. **İnteraktif Web Platformu:** Tespit edilen "kirlilik sıcak noktaları", dinamik bir web haritası üzerinde işaretlenir. Vatandaşlar da kendi çektikleri fotoğraflarla sisteme kirlilik ihbarında bulunabilir.
3. **Gönüllü ve Görevli Yönlendirmesi:** Sistem, kirlilik seviyesi kritik eşiği aşan bölgeler için belediye temizlik ekiplerine veya kayıtlı sivil toplum kuruluşlarına otomatik bildirim ve sevk yönlendirmesi sağlar.

---

## 🛠️ Kullanılan Teknolojiler ve İş Akışı

* **Veri Bilimi ve Yapay Zeka:** Görüntü verilerinin işlenmesi, atık türlerinin sınıflandırılması ve bölgesel kirlilik tahminlemesi için Python (Pandas, NumPy, makine öğrenmesi ve görüntü işleme kütüphaneleri) temelli model altyapısı.
* **Kullanıcı Deneyimi ve Arayüz (UI/UX):** Vatandaşların her yaştan kolayca ihbar yapabilmesi ve haritayı rahatça okuyabilmesi için platformun arayüzleri, renk psikolojisi ve görsel hiyerarşi kurallarına uygun olarak modern tasarım ilkeleriyle kurgulanmıştır.
* **Web Front-End Geliştirme:** Harita entegrasyonuna sahip interaktif yönetim paneli (dashboard) ve kullanıcı arayüzü; React, TypeScript ve Tailwind CSS mimarisiyle, tüm mobil cihazlarda ve tabletlerde kusursuz çalışacak şekilde (tam duyarlı/responsive) kodlanmıştır.
* **Görsel İletişim ve Markalama:** Projenin tanıtılması, farkındalık oluşturulması ve kurumsal kimlik tasarımları için güçlü bir görsel hikaye dili ve özgün logo/vektörel çizimler hazırlanmıştır.
* **Proje Yönetimi:** Süreç takibi, aşamalı geliştirme ve dokümantasyon modern planlama araçları üzerinden yönetilmektedir.

---

## 👥 Hedef Kitle ve Paydaşlar

* **Birincil Kullanıcılar:** Çevreye duyarlı vatandaşlar, yerel gönüllü temizlik ekipleri (örn. lise ve üniversite çevre kulüpleri, dalış toplulukları).
* **Kurumsal Paydaşlar:** Kıyı belediyeleri, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı, TÜRÇEV gibi çevre vakıfları ve deniz temizliği inisiyatifleri.

---

## 📈 Beklenen Etki ve Çıktılar

* **Operasyonel Verimlilik:** Temizlik operasyonlarında yakıt ve zaman tasarrufu sağlanması (Ekipler sadece verinin gösterdiği, gerçekten kirli noktalara yönlendirilir).
* **Büyük Veri (Big Data) Havuzu:** Zaman içerisinde hangi koylarda, hangi mevsimlerde kirliliğin arttığına dair yıllara sari güvenilir bir veri havuzu oluşması.
* **Toplumsal Katılım:** Görsel olarak etkileyici ve kullanımı kolay bir arayüz sayesinde toplumun çevre sorunlarına aktif katılımının dijitalleştirilmesi.

---

## 📁 Proje Dizin Yapısı

```text
├── public/                     # Statik varlıklar ve görseller
├── src/
│   ├── components/             # Yeniden kullanılabilir UI bileşenleri
│   │   ├── BlogDetailModal.tsx # Araştırma yazıları detay penceresi
│   │   ├── Footer.tsx          # Responsive alt bilgi alanı ve acil deniz hatları
│   │   ├── Logo.tsx            # Vektörel MaviAğ dalga ve jeodezik kubbe logosu
│   │   ├── Navbar.tsx          # Üst menü, zengin mobil çekmece ve mobil alt çubuk
│   │   ├── ReportDetailModal.tsx# Yapay zeka teşhis kartı ve ekip sevk penceresi
│   │   └── UserReviewsSection.tsx# Saha gönüllüleri yorumları ve geri bildirim formu
│   ├── context/
│   │   └── ReportContext.tsx   # Canlı kirlilik verileri ve yönetim durumu (State)
│   ├── data/
│   │   ├── blogData.ts         # Deniz teknolojisi ve saha bülten yazıları
│   │   └── mockData.ts         # Gerçekçi kıyı koordinatları ve başlangıç verileri
│   ├── pages/                  # Sayfa bileşenleri
│   │   ├── AboutPage.tsx       # Projenin amacı, vizyonu ve metodoloji sayfası
│   │   ├── BlogPage.tsx        # Çevre ve yapay zeka araştırmaları blog sayfası
│   │   ├── ContactPage.tsx     # İletişim formu, SSS ve acil durum kanalları
│   │   ├── DashboardPage.tsx   # Yönetici & temizlik ekipleri sevk konsolu
│   │   ├── HomePage.tsx        # Karşılama sayfası, canlı AI simülatörü ve sayaçlar
│   │   ├── MapPage.tsx         # Tam ekran interaktif Leaflet kirlilik haritası
│   │   └── ReportPage.tsx      # Vatandaş kirlilik ihbar ve fotoğraf yükleme formu
│   ├── types/
│   │   └── index.ts            # Veri modelleri ve TypeScript tip tanımları
│   ├── App.tsx                 # Ana uygulama çatısı ve sayfa yönlendirmeleri
│   ├── main.tsx                # Başlangıç render noktası
│   └── index.css               # Tasarım sistemi ve Tailwind CSS direktifleri
├── metadata.json               # Platform meta verileri
├── package.json                # Paket yapılandırması
└── README.md                   # Proje tanıtım ve dökümantasyon dosyası
```

---

## 🚀 Projeyi Yerel Ortamda Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirici sunucusunu başlatın
npm run dev

# 3. Üretim derlemesi oluşturun
npm run build
```

---

## 📜 Lisans & Vizyon

Bu proje, açık veri standartlarına ve deniz ekosistemlerimizin sürdürülebilirliğine katkı sağlamak amacıyla geliştirilmiştir.  
© 2026 **MaviAğ Platformu** - *Temiz Denizler, Yaşayan Kıyılar.*
