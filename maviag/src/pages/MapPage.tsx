import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { 
  Filter, 
  MapPin, 
  AlertTriangle, 
  Layers, 
  Search, 
  RefreshCw, 
  CheckCircle2, 
  Eye, 
  Maximize2, 
  X,
  Cpu,
  Compass,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { PollutionReport, WasteType, SeverityLevel } from '../types';
import { ReportDetailModal } from '../components/ReportDetailModal';

export const MapPage: React.FC = () => {
  const { reports, selectedReport, setSelectedReport } = useReports();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Filters State
  const [onlyCritical, setOnlyCritical] = useState<boolean>(false);
  const [wasteTypeFilter, setWasteTypeFilter] = useState<WasteType | 'all'>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSidePanel, setActiveSidePanel] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  });
  const [modalReport, setModalReport] = useState<PollutionReport | null>(null);

  // Resize listener to prevent Leaflet gray tile rendering issues on responsive changes
  useEffect(() => {
    const handleResize = () => {
      leafletMapRef.current?.invalidateSize();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      leafletMapRef.current?.invalidateSize();
    }, 250);
    return () => clearTimeout(timer);
  }, [activeSidePanel]);

  // Filtered reports
  const filteredReports = useMemo(() => {
    return reports.filter((item) => {
      if (onlyCritical && item.severity !== 'critical') {
        return false;
      }
      if (wasteTypeFilter !== 'all' && item.wasteType !== wasteTypeFilter) {
        return false;
      }
      if (regionFilter !== 'all' && item.region !== regionFilter) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchLoc = item.locationName.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        if (!matchTitle && !matchLoc && !matchDesc) return false;
      }
      return true;
    });
  }, [reports, onlyCritical, wasteTypeFilter, regionFilter, searchQuery]);

  // Statistics for the map view
  const mapStats = useMemo(() => {
    const critical = filteredReports.filter(r => r.severity === 'critical').length;
    const medium = filteredReports.filter(r => r.severity === 'medium').length;
    const low = filteredReports.filter(r => r.severity === 'low').length;
    return { critical, medium, low, total: filteredReports.length };
  }, [filteredReports]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (leafletMapRef.current) return; // already initialized

    // Center on Turkey coastline (Aegean, Marmara, Med, Black Sea)
    const map = L.map(mapContainerRef.current, {
      center: [39.0, 31.0],
      zoom: 6.5,
      zoomControl: true,
      minZoom: 5,
      maxZoom: 16,
    });

    // High quality OpenStreetMap tiles with clean marine look
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | MaviAğ Yapay Zeka Haritalama',
      maxZoom: 19,
    }).addTo(map);

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;
    leafletMapRef.current = map;

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, []);

  // Update Markers when filteredReports change
  useEffect(() => {
    const map = leafletMapRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    filteredReports.forEach((report) => {
      // Pin styling based on severity
      let markerColor = '#00BFA5'; // low (green)
      let pulseRing = '';
      let badgeLabel = 'Düşük';

      if (report.severity === 'critical') {
        markerColor = '#FF1744'; // critical (red)
        badgeLabel = 'Kritik';
        pulseRing = `<div class="absolute -inset-2 rounded-full border-2 border-[#FF1744] animate-ping opacity-60 pointer-events-none"></div>`;
      } else if (report.severity === 'medium') {
        markerColor = '#F59E0B'; // medium (amber/yellow)
        badgeLabel = 'Orta';
      }

      // Custom Leaflet DivIcon
      const customIcon = L.divIcon({
        className: 'custom-maviag-pin',
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
        html: `
          <div class="relative cursor-pointer group">
            ${pulseRing}
            <div style="background-color: ${markerColor}" class="w-9 h-9 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white transform transition-transform duration-200 group-hover:scale-125">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 -z-10"></div>
          </div>
        `,
      });

      const marker = L.marker(report.coordinates, { icon: customIcon });

      // Click event on marker: updates selectedReport and opens bottom preview
      marker.on('click', () => {
        setSelectedReport(report);
      });

      // Bind detailed popup
      const popupHtml = `
        <div class="p-3 w-64 text-left">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded text-white" style="background-color: ${markerColor}">
              ${badgeLabel} Seviye
            </span>
            <span class="text-[11px] font-mono text-slate-500">%${report.aiConfidence} Doğruluk</span>
          </div>
          <h4 class="font-bold text-xs text-slate-900 mb-1 line-clamp-1">${report.title}</h4>
          <p class="text-[11px] text-slate-600 line-clamp-2 mb-2">${report.description}</p>
          <div class="text-[10px] text-slate-400 flex items-center gap-1 mb-2">
            📍 ${report.locationName}
          </div>
          <button id="view-report-${report.id}" class="w-full text-center py-1.5 bg-[#0077C2] text-white text-xs font-semibold rounded hover:bg-[#005a94] transition-colors">
            Detaylı AI Analizini Gör
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`view-report-${report.id}`);
        if (btn) {
          btn.onclick = () => {
            setModalReport(report);
          };
        }
      });

      markersGroup.addLayer(marker);
    });

    // If there's an active selectedReport, focus on it
    if (selectedReport) {
      map.flyTo(selectedReport.coordinates, 10, { duration: 1.2 });
    }
  }, [filteredReports, selectedReport, setSelectedReport]);

  const handleSelectReportCard = (report: PollutionReport) => {
    setSelectedReport(report);
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo(report.coordinates, 11, { duration: 1 });
    }
    // On mobile & tablet, close side panel on selection so map is immediately visible
    if (window.innerWidth < 1024) {
      setActiveSidePanel(false);
    }
  };

  const handleResetFilters = () => {
    setOnlyCritical(false);
    setWasteTypeFilter('all');
    setRegionFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="relative flex flex-col h-[calc(100vh-4rem-3.5rem)] sm:h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)] bg-slate-100 overflow-hidden">
      
      {/* TOP FILTER BAR & CONTROL HEADER */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 shadow-xs z-20 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Title & Stats */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0077C2]" />
                Kirlilik Sıcak Noktaları Haritası
              </h1>
              <p className="text-xs text-slate-500">
                Canlı tespit edilen {filteredReports.length} aktif kirlilik alanı listeleniyor
              </p>
            </div>

            {/* Quick Severity Indicators */}
            <div className="hidden md:flex items-center gap-2 text-xs font-medium pl-3 border-l border-slate-200">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-[#FF1744] border border-red-200 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-pulse" />
                {mapStats.critical} Kritik
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                {mapStats.medium} Orta
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
                {mapStats.low} Düşük
              </span>
            </div>
          </div>

          {/* Controls & Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Konum veya atık ara..."
                className="pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0077C2] w-40 sm:w-56"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* "Sadece Kritik Bölgeler" Quick Toggle */}
            <button
              onClick={() => setOnlyCritical(!onlyCritical)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                onlyCritical
                  ? 'bg-[#FF1744] text-white border-[#FF1744] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Sadece Kritik Bölgeler</span>
            </button>

            {/* Atık Türü Filter */}
            <select
              value={wasteTypeFilter}
              onChange={(e) => setWasteTypeFilter(e.target.value as WasteType | 'all')}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
            >
              <option value="all">Tüm Atık Türleri</option>
              <option value="plastic">Plastik Atıklar</option>
              <option value="ghost_net">Hayalet Ağ Kalıntıları</option>
              <option value="microplastic">Mikroplastik Birikimi</option>
              <option value="oil_chemical">Petrol / Kimyasal</option>
            </select>

            {/* Bölge Filter */}
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
            >
              <option value="all">Tüm Denizler</option>
              <option value="Marmara">Marmara Denizi</option>
              <option value="Ege">Ege Denizi</option>
              <option value="Akdeniz">Akdeniz</option>
              <option value="Karadeniz">Karadeniz</option>
            </select>

            {/* Reset Filter Button */}
            {(onlyCritical || wasteTypeFilter !== 'all' || regionFilter !== 'all' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs flex items-center gap-1"
                title="Filtreleri Temizle"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Toggle Sidebar Button */}
            <button
              onClick={() => setActiveSidePanel(!activeSidePanel)}
              className={`p-1.5 rounded-lg text-xs border flex items-center gap-1 font-medium ${
                activeSidePanel
                  ? 'bg-sky-50 text-[#0077C2] border-sky-200'
                  : 'bg-white text-slate-600 border-slate-300'
              }`}
              title="Liste Paneli"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Liste</span>
            </button>

          </div>
        </div>
      </div>

      {/* MAIN MAP VIEWPORT & SIDE PANEL */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex">
        
        {/* LEAFLET MAP ELEMENT */}
        <div 
          ref={mapContainerRef} 
          className="flex-1 w-full h-full z-0 outline-none"
        />

        {/* MAP LEGEND OVERLAY (Bottom-Left) */}
        <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 z-10 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-slate-200 shadow-lg text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 pointer-events-auto max-w-[220px] sm:max-w-none">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#0077C2]" />
            <span>Kirlilik Şiddet Skalası</span>
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF1744] animate-pulse"></span>
              <span className="text-slate-600 font-medium">Kritik Kirlilik</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]"></span>
              <span className="text-slate-600 font-medium">Orta Şiddet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00BFA5]"></span>
              <span className="text-slate-600 font-medium">Düşük Yoğunluk</span>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE SIDE PANEL (Hotspots Directory) */}
        {activeSidePanel && (
          <aside className="absolute lg:relative right-0 top-0 bottom-0 w-full sm:w-96 bg-white/95 backdrop-blur-md border-l border-slate-200 z-20 lg:z-10 flex flex-col h-full shadow-2xl lg:shadow-xl animate-in slide-in-from-right duration-200">
            
            {/* Side Panel Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#0077C2]" />
                  <span>Sıcak Noktalar ({filteredReports.length})</span>
                </h3>
                <span className="text-[11px] text-slate-400">Haritada odaklanmak için tıklayın</span>
              </div>
              <button
                onClick={() => setActiveSidePanel(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Hotspots */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {filteredReports.length === 0 ? (
                <div className="text-center py-12 px-4 text-slate-400 text-sm">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <p>Seçilen filtrelere uygun kirlilik noktası bulunamadı.</p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-3 text-xs font-semibold text-[#0077C2] hover:underline"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              ) : (
                filteredReports.map((item) => {
                  const isSelected = selectedReport?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectReportCard(item)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer relative group ${
                        isSelected
                          ? 'border-[#0077C2] bg-sky-50/70 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex gap-3">
                        {/* Thumbnail */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-900 shrink-0 relative">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute top-1 left-1">
                            {item.severity === 'critical' && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1744] block animate-ping" />
                            )}
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span className="font-mono text-[10px] text-slate-400">{item.id}</span>
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                                  item.severity === 'critical'
                                    ? 'bg-rose-100 text-[#FF1744]'
                                    : item.severity === 'medium'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-teal-100 text-teal-800'
                                }`}
                              >
                                {item.severity === 'critical' ? 'Kritik' : item.severity === 'medium' ? 'Orta' : 'Düşük'}
                              </span>
                            </div>
                            <h4 className="font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-[#0077C2]">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              📍 {item.locationName}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-slate-100 mt-2 text-[11px]">
                            <span className="font-mono text-emerald-600 font-semibold text-[10px]">
                              AI: %{item.aiConfidence}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalReport(item);
                              }}
                              className="text-[#0077C2] hover:text-[#005a94] font-semibold flex items-center gap-0.5 text-[11px]"
                            >
                              <span>İncele</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Side Panel Footer with AI Info */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#00BFA5]" />
                <span>YOLOv11 Deniz Taraması</span>
              </span>
              <span className="font-mono text-[11px] text-emerald-600 font-bold">Gecikme: 48ms</span>
            </div>

          </aside>
        )}

      </div>

      {/* DETAIL MODAL IF OPENED */}
      {modalReport && (
        <ReportDetailModal
          report={modalReport}
          onClose={() => setModalReport(null)}
        />
      )}

    </div>
  );
};
