import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UploadCloud, 
  MapPin, 
  Cpu, 
  CheckCircle, 
  AlertTriangle, 
  Compass, 
  FileText, 
  User, 
  Phone, 
  Sparkles, 
  Trash2, 
  ArrowRight,
  Info,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { WasteType, SeverityLevel } from '../types';
import { SAMPLE_PRESET_IMAGES } from '../data/mockData';

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const { addReport } = useReports();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [wasteType, setWasteType] = useState<WasteType>('plastic');
  const [severity, setSeverity] = useState<SeverityLevel>('critical');
  const [locationName, setLocationName] = useState('');
  const [region, setRegion] = useState<'Marmara' | 'Ege' | 'Akdeniz' | 'Karadeniz'>('Marmara');
  const [coordinates, setCoordinates] = useState<[number, number]>([40.8524, 29.1189]);
  const [imagePreview, setImagePreview] = useState<string>('https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80');
  const [reporterName, setReporterName] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [estimatedWeightKg, setEstimatedWeightKg] = useState<number>(150);

  // AI Scanning Simulation State
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<{
    confidence: number;
    detectedObjects: string[];
    suggestedWasteType: WasteType;
    modelVersion: string;
  } | null>({
    confidence: 96.4,
    detectedObjects: ['PET Şişe Grubu (%97)', 'Polietilen Yığını (%94)', 'Strafor Ambalaj (%89)'],
    suggestedWasteType: 'plastic',
    modelVersion: 'MaviAğ-Vision-v2.3 (Gemini/YOLO)'
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [geoLocating, setGeoLocating] = useState(false);

  // Handle Drag & Drop / File Select
  const processImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImagePreview(result);
      runAiImageAnalysis(result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processImageFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImageFile(e.dataTransfer.files[0]);
    }
  };

  // AI Vision Analysis Function
  const runAiImageAnalysis = (imageSrc: string) => {
    setIsAnalyzingImage(true);
    // Buraya AI Vision endpointi gelecek
    // Örn: POST /api/ai/vision-detect -> Google Gemini 2.5 Flash veya YOLOv11 Marine Model
    setTimeout(() => {
      setIsAnalyzingImage(false);
      const conf = Math.floor(91 + Math.random() * 8);
      setAiAnalysisResult({
        confidence: conf,
        detectedObjects: ['Polimer Atık Kümesi (%' + conf + ')', 'Suda Yüzen Plastik Malzeme (%92)'],
        suggestedWasteType: 'plastic',
        modelVersion: 'MaviAğ-Vision-v2.3 (Gemini-Flash-Marine)',
      });
    }, 1200);
  };

  const handleSelectSample = (sample: typeof SAMPLE_PRESET_IMAGES[0]) => {
    setImagePreview(sample.url);
    setWasteType(sample.type);
    setSeverity(sample.severity);
    setEstimatedWeightKg(sample.weight);
    setTitle(`${sample.label} Tespiti`);
    setAiAnalysisResult({
      confidence: 96.8,
      detectedObjects: [sample.detected, 'Sualtı / Kıyı Yayılımı (%92)'],
      suggestedWasteType: sample.type,
      modelVersion: 'MaviAğ-Vision-v2.3',
    });
  };

  // Geolocation Handler
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Tarayıcınız konum servisini desteklemiyor.');
      return;
    }
    setGeoLocating(true);
    // Buraya Geolocation / Ters Geocoding API endpointi gelecek
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = Number(pos.coords.latitude.toFixed(4));
        const lng = Number(pos.coords.longitude.toFixed(4));
        setCoordinates([lat, lng]);
        setLocationName(`Kıyı Koordinatı: ${lat}° K, ${lng}° D`);
        setGeoLocating(false);
      },
      () => {
        // Fallback to coastal coordinates
        setCoordinates([40.8524, 29.1189]);
        setLocationName('Büyükada Açıkları, Marmara');
        setGeoLocating(false);
      },
      { timeout: 8000 }
    );
  };

  // Pre-configured popular coastal spots
  const handleSelectPresetLocation = (locName: string, reg: 'Marmara' | 'Ege' | 'Akdeniz' | 'Karadeniz', coords: [number, number]) => {
    setLocationName(locName);
    setRegion(reg);
    setCoordinates(coords);
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Buraya İhbar Kayıt Backend endpointi gelecek (POST /api/reports)
    setTimeout(() => {
      const created = addReport({
        title: title || `${wasteType === 'plastic' ? 'Plastik' : wasteType === 'ghost_net' ? 'Hayalet Ağ' : 'Atık'} Kirlilik İhbarı`,
        description: description || 'Vatandaş tarafından mobil platform üzerinden iletilen kirlilik bildirimi.',
        locationName: locationName || 'Bilinmeyen Kıyı Noktası',
        region,
        coordinates,
        wasteType,
        severity,
        aiConfidence: aiAnalysisResult?.confidence || 93,
        aiDetectedObjects: aiAnalysisResult?.detectedObjects || ['Plastik Atık'],
        aiModelVersion: aiAnalysisResult?.modelVersion || 'MaviAğ-v2.3',
        imageUrl: imagePreview,
        reporterName: isAnonymous ? 'Anonim Vatandaş' : (reporterName || 'MaviAğ Gönüllüsü'),
        reporterContact: isAnonymous ? undefined : reporterContact,
        estimatedWeightKg,
        source: 'citizen',
      });

      setIsSubmitting(false);
      setSubmittedReportId(created.id);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vatandaş Bildirim Portalı</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deniz Kirliliği İhbar Formu
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Gördüğünüz plastik atıkları, terk edilmiş balık ağlarını veya kimyasal kirliliği fotoğraflayıp bildirin. Yapay zeka atığı analiz edip en yakın temizlik ekibine iletecektir.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            
            {/* 1. SECTION: FOTOĞRAF YÜKLEME ALANI (SÜRÜKLE-BIRAK) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-800 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#0077C2]" />
                  <span>1. Kirlilik Fotoğrafı (Sürükle & Bırak)</span>
                  <span className="text-[#FF1744]">*</span>
                </label>
                <span className="text-xs text-slate-400">Yapay zeka anında analiz eder</span>
              </div>

              {/* Drag & Drop Area */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 ${
                  isDragging
                    ? 'border-[#0077C2] bg-sky-50'
                    : 'border-slate-300 hover:border-[#0077C2] bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="p-3 bg-sky-100 text-[#0077C2] rounded-full">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Fotoğrafı buraya sürükleyin veya <span className="text-[#0077C2]">dosya seçin</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP formatında azami 15MB</p>
                  </div>
                </div>
              </div>

              {/* Sample Images Quick Choice */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-500 font-medium">Hızlı test için örnek görsel:</span>
                {SAMPLE_PRESET_IMAGES.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSample(sample)}
                    className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-[#0077C2] rounded-lg transition-colors font-medium border border-slate-200"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>

              {/* Image Preview & AI Real-time Scan Result Card */}
              {imagePreview && (
                <div className="bg-slate-900 rounded-xl p-4 text-white border border-slate-700 relative overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Thumbnail Viewport */}
                    <div className="sm:col-span-4 relative rounded-lg overflow-hidden aspect-video bg-black">
                      <img
                        src={imagePreview}
                        alt="Yüklenen Görsel"
                        className={`w-full h-full object-cover transition-opacity ${
                          isAnalyzingImage ? 'opacity-40 animate-pulse' : 'opacity-100'
                        }`}
                      />
                      {isAnalyzingImage && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                          <div className="text-center">
                            <Cpu className="w-6 h-6 text-[#00BFA5] animate-spin mx-auto mb-1" />
                            <span className="text-[10px] font-mono text-emerald-400">AI Taranıyor...</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* AI Vision Insights */}
                    <div className="sm:col-span-8 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#00BFA5]" />
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            Yapay Zeka Otomatik Görüntü Analizi
                          </span>
                        </div>
                        {aiAnalysisResult && (
                          <span className="bg-[#00BFA5] text-slate-950 font-mono text-xs font-bold px-2 py-0.5 rounded-full">
                            %{aiAnalysisResult.confidence} Doğruluk
                          </span>
                        )}
                      </div>

                      {aiAnalysisResult ? (
                        <div className="space-y-1.5 text-xs text-slate-300">
                          <p className="font-semibold text-white">Tespit Edilen Atık Unsurları:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {aiAnalysisResult.detectedObjects.map((obj, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-slate-800 text-sky-300 border border-slate-700 rounded text-[11px] font-mono"
                              >
                                ✓ {obj}
                              </span>
                            ))}
                          </div>
                          <p className="text-[11px] text-slate-400 font-mono mt-1">
                            Model: {aiAnalysisResult.modelVersion}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400">Görüntü işleme bekleniyor...</p>
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. SECTION: KONUM VE BÖLGE */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0077C2]" />
                  <span>2. Kirlilik Konumu</span>
                  <span className="text-[#FF1744]">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={geoLocating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-[#0077C2] hover:bg-sky-100 rounded-lg text-xs font-semibold border border-sky-200 transition-colors disabled:opacity-50"
                >
                  <Compass className={`w-3.5 h-3.5 ${geoLocating ? 'animate-spin' : ''}`} />
                  <span>{geoLocating ? 'Alınıyor...' : 'Konumumu Otomatik Al'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Konum / Kıyı Adı
                  </label>
                  <input
                    type="text"
                    required
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="Örn: Büyükada Yörükali Koyu, İstanbul"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Deniz Havzası / Bölge
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  >
                    <option value="Marmara">Marmara Denizi</option>
                    <option value="Ege">Ege Denizi</option>
                    <option value="Akdeniz">Akdeniz</option>
                    <option value="Karadeniz">Karadeniz</option>
                  </select>
                </div>
              </div>

              {/* Preset coastal shortcut buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-400 font-medium">Hızlı Konum Seç:</span>
                <button
                  type="button"
                  onClick={() => handleSelectPresetLocation('Büyükada Açıkları, İstanbul', 'Marmara', [40.8524, 29.1189])}
                  className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md"
                >
                  Büyükada
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPresetLocation('Karaada Resifleri, Bodrum', 'Ege', [36.9781, 27.4619])}
                  className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md"
                >
                  Bodrum Karaada
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPresetLocation('Alsancak Liman Girişi, İzmir', 'Ege', [38.4418, 27.1425])}
                  className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md"
                >
                  İzmir Alsancak
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPresetLocation('Konyaaltı Falezleri, Antalya', 'Akdeniz', [36.8732, 30.6894])}
                  className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md"
                >
                  Antalya Falezler
                </button>
              </div>

              <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-0 text-xs text-slate-600 font-mono">
                <span className="truncate">GPS Koordinatları: {coordinates[0]}° K, {coordinates[1]}° D</span>
                <span className="text-emerald-700 font-semibold font-sans shrink-0">✓ Harita Pini Hazır</span>
              </div>
            </div>

            {/* 3. SECTION: ATIK TÜRÜ VE ŞİDDET DÜZEYİ */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0077C2]" />
                <span>3. Atık Detayları ve Önceliklendirme</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Waste Type Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Atık Türü
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value as WasteType)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  >
                    <option value="plastic">Plastik Atıklar (PET, Poşet, Strafor)</option>
                    <option value="ghost_net">Hayalet Ağ / Misina / Trol Ağı</option>
                    <option value="microplastic">Mikroplastik Birikimi</option>
                    <option value="oil_chemical">Petrol / Sintine / Kimyasal</option>
                    <option value="domestic">Evsel Katı Atık / Teneke</option>
                    <option value="other">Diğer / Karışık Atık</option>
                  </select>
                </div>

                {/* Severity Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tahmini Tehlike Derecesi
                  </label>
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value as SeverityLevel)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  >
                    <option value="critical">Kritik (Acil Müdahale Gerekiyor)</option>
                    <option value="medium">Orta Şiddet (Rutin Temizlik)</option>
                    <option value="low">Düşük Seviye (Gözlem & Takip)</option>
                  </select>
                </div>

                {/* Estimated Weight */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tahmini Ağırlık (kg)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="10000"
                    value={estimatedWeightKg}
                    onChange={(e) => setEstimatedWeightKg(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  />
                </div>

              </div>

              {/* Title & Description Input */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kısa Başlık
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Örn: Kıyı Şeridinde Yığılmış Plastik Şişe Kümesi"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ek Açıklama ve Gözlemler
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Atığın akıntıyla sürüklenme yönü, deniz canlılarına tehdidi veya ulaşım durumu hakkında detaylar..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                  />
                </div>
              </div>
            </div>

            {/* 4. SECTION: BİLDİREN BİLGİLERİ */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-800 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#0077C2]" />
                  <span>4. Bildirim Yapan Kişi Bilgisi</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded text-[#0077C2] focus:ring-[#0077C2] h-4 w-4"
                  />
                  <span>Anonim İhbar Yap</span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      placeholder="Örn: Deniz Yılmaz"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Telefon veya E-posta (Geri bildirim için)
                    </label>
                    <input
                      type="text"
                      value={reporterContact}
                      onChange={(e) => setReporterContact(e.target.value)}
                      placeholder="0532 ... veya e-posta"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* SUBMIT BUTTON (Okyanus Mavisi #0077C2) */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#0077C2] hover:bg-[#005a94] text-white text-base font-bold rounded-xl shadow-lg shadow-sky-900/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Yapay Zeka Tarafından Doğrulanıyor ve Kaydediliyor...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>İhbarı Gönder ve Yapay Zeka Ağına Ekle</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* SUCCESS MODAL */}
      {submittedReportId && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-[#00BFA5] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">
                İhbarınız Başarıyla Alındı!
              </h3>
              <p className="text-xs text-slate-500">
                Yapay zeka görüntü analizi tamamlandı ve haritaya eklendi.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-1 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">İhbar Takip No:</span>
                <span className="font-bold text-[#0077C2]">{submittedReportId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AI Güven Skoru:</span>
                <span className="font-bold text-emerald-600">%{aiAnalysisResult?.confidence || 96}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Öncelik:</span>
                <span className="font-bold text-[#FF1744]">Kritik Sevk</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => navigate('/harita')}
                className="w-full py-2.5 px-4 bg-[#0077C2] text-white text-xs font-bold rounded-lg hover:bg-[#005a94] transition-colors"
              >
                Haritada İncele
              </button>
              <button
                onClick={() => {
                  setSubmittedReportId(null);
                  setTitle('');
                  setDescription('');
                }}
                className="w-full py-2.5 px-4 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors"
              >
                Yeni İhbar Yap
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
