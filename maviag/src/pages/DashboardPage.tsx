import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  Clock, 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  Search, 
  Filter, 
  LayoutList, 
  LayoutGrid, 
  Eye, 
  Trash2, 
  Download, 
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Layers,
  MapPin
} from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { PollutionReport, ReportStatus, WasteType } from '../types';
import { ReportDetailModal } from '../components/ReportDetailModal';

export const DashboardPage: React.FC = () => {
  const { 
    reports, 
    stats, 
    updateReportStatus, 
    assignTeamToReport, 
    deleteReport,
    resetToDefault 
  } = useReports();

  // Filters & View state
  const [viewMode, setViewMode] = useState<'table' | 'grid'>(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768 ? 'grid' : 'table';
  });
  const [statusTab, setStatusTab] = useState<ReportStatus | 'all'>('all');
  const [wasteTypeFilter, setWasteTypeFilter] = useState<WasteType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectModalReport, setInspectModalReport] = useState<PollutionReport | null>(null);

  // Quick team assign modal state
  const [assigningReportId, setAssigningReportId] = useState<string | null>(null);
  const [teamSelection, setTeamSelection] = useState('Mavi Bayrak Temizlik Botu');

  // Filtered reports for the table/grid
  const filteredData = useMemo(() => {
    return reports.filter((item) => {
      if (statusTab !== 'all' && item.status !== statusTab) {
        return false;
      }
      if (wasteTypeFilter !== 'all' && item.wasteType !== wasteTypeFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchLoc = item.locationName.toLowerCase().includes(q);
        const matchId = item.id.toLowerCase().includes(q);
        const matchReporter = item.reporterName?.toLowerCase().includes(q);
        if (!matchTitle && !matchLoc && !matchId && !matchReporter) return false;
      }
      return true;
    });
  }, [reports, statusTab, wasteTypeFilter, searchQuery]);

  // Status counts for tabs
  const pendingCount = reports.filter(r => r.status === 'pending').length;
  const verifiedCount = reports.filter(r => r.status === 'verified').length;
  const assignedCount = reports.filter(r => r.status === 'team_assigned').length;
  const cleanedCount = reports.filter(r => r.status === 'cleaned').length;
  const criticalCount = reports.filter(r => r.severity === 'critical').length;

  const handleApprove = (id: string) => {
    // Buraya Yönetici Karar Kayıt API'si gelecek (PATCH /api/reports/:id/verify)
    updateReportStatus(id, 'verified');
  };

  const handleReject = (id: string) => {
    // Buraya Yönetici Karar Kayıt API'si gelecek (PATCH /api/reports/:id/reject)
    updateReportStatus(id, 'rejected');
  };

  const handleOpenAssign = (id: string) => {
    setAssigningReportId(id);
  };

  const handleConfirmAssign = () => {
    if (assigningReportId) {
      assignTeamToReport(assigningReportId, teamSelection);
      setAssigningReportId(null);
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Başlık', 'Konum', 'Bölge', 'Atık Türü', 'Şiddet', 'Durum', 'AI Güven %', 'Tarih'];
    const rows = filteredData.map(r => [
      r.id,
      `"${r.title.replace(/"/g, '""')}"`,
      `"${r.locationName.replace(/"/g, '""')}"`,
      r.region,
      r.wasteType,
      r.severity,
      r.status,
      r.aiConfidence,
      r.createdAt,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `maviag_raporlar_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Title & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#0077C2] text-xs font-bold uppercase tracking-wider">
                Kurumsal Portal
              </span>
              <span className="text-xs text-slate-400 font-mono">v2.3 Yönetim Konsolu</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Yönetici ve Sevk Paneli
            </h1>
            <p className="text-sm text-slate-500">
              Yapay Zeka kirlilik teşhislerini onaylayın, belediye ve STK temizlik ekiplerini koordine edin.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Dışa Aktar (CSV)</span>
            </button>

            <button
              onClick={resetToDefault}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg transition-colors"
              title="Örnek verileri sıfırla"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Varsayılana Dön</span>
            </button>
          </div>
        </div>

        {/* 1. ÜST ÖZET KARTLARI (SUMMARY CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Bekleyen İhbarlar */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                Bekleyen İhbarlar
              </span>
              <div className="text-3xl font-extrabold text-slate-900">{pendingCount}</div>
              <p className="text-[11px] text-amber-600 font-medium">İnceleme ve onay bekliyor</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Yönlendirilen Ekipler */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#0077C2]" />
                Yönlendirilen Ekipler
              </span>
              <div className="text-3xl font-extrabold text-slate-900">{stats.dispatchedTeams}</div>
              <p className="text-[11px] text-sky-600 font-medium">{assignedCount} aktif saha operasyonu</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077C2] flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Kritik Noktalar */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#FF1744]" />
                Kritik Noktalar
              </span>
              <div className="text-3xl font-extrabold text-slate-900">{criticalCount}</div>
              <p className="text-[11px] text-rose-600 font-medium">Öncelikli müdahale gereken</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#FF1744] flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Toplam Temizlenen Atık */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                Temizlenen Atık
              </span>
              <div className="text-3xl font-extrabold text-slate-900">
                {stats.cleanedTodayKg.toLocaleString('tr-TR')} kg
              </div>
              <p className="text-[11px] text-emerald-600 font-medium">Bu haftaki kurtarma verisi</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00BFA5] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* 2. VERİ TABLOSU KONTROLLERİ VE FİLTRELERİ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          
          <div className="p-4 border-b border-slate-200 space-y-4">
            
            {/* Status Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setStatusTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusTab === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tümü ({reports.length})
                </button>
                <button
                  onClick={() => setStatusTab('pending')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusTab === 'pending'
                      ? 'bg-white text-amber-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Beklemede ({pendingCount})
                </button>
                <button
                  onClick={() => setStatusTab('verified')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusTab === 'verified'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Doğrulandı ({verifiedCount})
                </button>
                <button
                  onClick={() => setStatusTab('team_assigned')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusTab === 'team_assigned'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ekip Sevk Edildi ({assignedCount})
                </button>
                <button
                  onClick={() => setStatusTab('cleaned')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusTab === 'cleaned'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Temizlendi ({cleanedCount})
                </button>
              </div>

              {/* View toggle (List / Grid) */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === 'table' ? 'bg-white text-[#0077C2] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Tablo Görünümü"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-[#0077C2] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Kart Görünümü"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter inputs & Search row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              
              <div className="relative flex-1 min-w-[220px] max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ID, kirlilik başlığı veya konum ara..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={wasteTypeFilter}
                  onChange={(e) => setWasteTypeFilter(e.target.value as WasteType | 'all')}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                >
                  <option value="all">Tüm Atık Türleri</option>
                  <option value="plastic">Plastik Atıklar</option>
                  <option value="ghost_net">Hayalet Ağlar</option>
                  <option value="microplastic">Mikroplastikler</option>
                  <option value="oil_chemical">Petrol / Kimyasal</option>
                </select>

                <div className="text-xs text-slate-500 font-mono pl-2">
                  // AI Toplu Sınıflandırma Aktif
                </div>
              </div>

            </div>

          </div>

          {/* 3. VERİ GÖSTERİMİ: TABLO GÖRÜNÜMÜ */}
          {viewMode === 'table' ? (
            <div className="overflow-x-auto rounded-b-2xl border-t border-slate-100">
              {/* Mobile Scroll Hint */}
              <div className="flex items-center justify-between px-4 py-2 bg-sky-50/80 border-b border-sky-100 text-[11px] text-sky-800 font-medium sm:hidden">
                <span>👈 Tabloyu yana kaydırarak inceleyebilirsiniz</span>
                <span className="font-mono text-[10px] text-sky-700 bg-sky-200/60 px-1.5 py-0.5 rounded font-bold">7 Sütun</span>
              </div>

              <table className="min-w-[900px] w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50/80 text-slate-700 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 w-[180px] min-w-[180px]">Görsel & ID</th>
                    <th scope="col" className="px-4 py-3.5 w-[240px] min-w-[240px]">Başlık & Konum</th>
                    <th scope="col" className="px-4 py-3.5 w-[130px] min-w-[130px]">Atık Türü</th>
                    <th scope="col" className="px-4 py-3.5 w-[140px] min-w-[140px]">AI Doğruluk Skoru</th>
                    <th scope="col" className="px-4 py-3.5 w-[100px] min-w-[100px]">Şiddet</th>
                    <th scope="col" className="px-4 py-3.5 w-[130px] min-w-[130px]">Durum</th>
                    <th scope="col" className="px-4 py-3.5 w-[130px] min-w-[130px] text-right">Aksiyonlar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-400">
                        Kriterlere uygun kayıt bulunamadı.
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        
                        {/* Thumbnail & ID */}
                        <td className="px-4 py-3 whitespace-nowrap w-[180px] min-w-[180px]">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-12 h-12 rounded-lg object-cover bg-slate-900 cursor-pointer shadow-xs shrink-0"
                              onClick={() => setInspectModalReport(item)}
                            />
                            <div className="min-w-0">
                              <span className="font-mono font-bold text-slate-900 block">{item.id}</span>
                              <span className="text-[10px] text-slate-400">{item.createdAt.split(' ')[0]}</span>
                            </div>
                          </div>
                        </td>

                        {/* Title & Location */}
                        <td className="px-4 py-3 w-[240px] min-w-[240px]">
                          <div className="font-bold text-slate-900 line-clamp-1">{item.title}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#0077C2] shrink-0" />
                            <span className="truncate">{item.locationName}</span>
                          </div>
                        </td>

                        {/* Waste Type */}
                        <td className="px-4 py-3 whitespace-nowrap w-[130px] min-w-[130px]">
                          <span className="capitalize font-medium text-slate-700">
                            {item.wasteType === 'plastic' ? 'Plastik PET' :
                             item.wasteType === 'ghost_net' ? 'Hayalet Ağ' :
                             item.wasteType === 'microplastic' ? 'Mikroplastik' :
                             item.wasteType === 'oil_chemical' ? 'Petrol/Sintine' : item.wasteType}
                          </span>
                        </td>

                        {/* AI Confidence */}
                        <td className="px-4 py-3 whitespace-nowrap w-[140px] min-w-[140px]">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-[#00BFA5] h-full rounded-full"
                                style={{ width: `${item.aiConfidence}%` }}
                              />
                            </div>
                            <span className="font-mono text-xs font-bold text-emerald-600">
                              %{item.aiConfidence}
                            </span>
                          </div>
                        </td>

                        {/* Severity */}
                        <td className="px-4 py-3 whitespace-nowrap w-[100px] min-w-[100px]">
                          {item.severity === 'critical' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-[#FF1744]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] animate-pulse" />
                              Kritik
                            </span>
                          ) : item.severity === 'medium' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Orta
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
                              Düşük
                            </span>
                          )}
                        </td>

                        {/* Status */}
                        <td className="px-4 py-3 whitespace-nowrap w-[130px] min-w-[130px]">
                          {item.status === 'pending' && (
                            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded font-semibold text-[10px]">
                              Onay Bekliyor
                            </span>
                          )}
                          {item.status === 'verified' && (
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded font-semibold text-[10px]">
                              Doğrulandı
                            </span>
                          )}
                          {item.status === 'team_assigned' && (
                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded font-semibold text-[10px]">
                              Ekip Sevk Edildi
                            </span>
                          )}
                          {item.status === 'cleaned' && (
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-semibold text-[10px]">
                              Temizlendi
                            </span>
                          )}
                          {item.status === 'rejected' && (
                            <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded font-semibold text-[10px]">
                              Reddedildi
                            </span>
                          )}
                        </td>

                        {/* Actions (Onayla / Reddet / Sevk Et / İncele) */}
                        <td className="px-4 py-3 whitespace-nowrap text-right w-[130px] min-w-[130px]">
                          <div className="flex items-center justify-end gap-1.5">
                            
                            {item.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => handleApprove(item.id)}
                                  className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#00BFA5] rounded-lg transition-colors"
                                  title="İhbarı Onayla"
                                >
                                  <CheckCircle2 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleReject(item.id)}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-100 text-[#FF1744] rounded-lg transition-colors"
                                  title="İhbarı Reddet"
                                >
                                  <XCircle className="w-4 h-4" />
                                </button>
                              </>
                            )}

                            {item.status !== 'cleaned' && item.status !== 'rejected' && (
                              <button
                                onClick={() => handleOpenAssign(item.id)}
                                className="px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-[#0077C2] font-semibold text-[11px] rounded-lg border border-sky-200 transition-colors flex items-center gap-1"
                              >
                                <Truck className="w-3 h-3" />
                                <span>Sevk Et</span>
                              </button>
                            )}

                            <button
                              onClick={() => setInspectModalReport(item)}
                              className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                              title="Detaylı AI İnceleme"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                          </div>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* 4. VERİ GÖSTERİMİ: KART / GRID GÖRÜNÜMÜ */
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video bg-slate-900">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        {item.severity === 'critical' ? (
                          <span className="bg-[#FF1744] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Kritik
                          </span>
                        ) : (
                          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {item.severity}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-slate-950/80 text-white font-mono text-[10px] px-2 py-0.5 rounded">
                        AI Doğruluk: %{item.aiConfidence}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">{item.id}</span>
                        <span className="text-slate-500 font-medium">{item.createdAt.split(' ')[0]}</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-slate-600 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0077C2]" />
                        <span className="truncate">{item.locationName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <button
                      onClick={() => setInspectModalReport(item)}
                      className="text-xs font-semibold text-[#0077C2] hover:underline"
                    >
                      Detayları Gör
                    </button>
                    <div className="flex gap-1.5">
                      {item.status === 'pending' && (
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="px-2.5 py-1 bg-emerald-600 text-white text-xs font-semibold rounded hover:bg-emerald-700"
                        >
                          Onayla
                        </button>
                      )}
                      <button
                        onClick={() => handleOpenAssign(item.id)}
                        className="px-2.5 py-1 bg-[#0077C2] text-white text-xs font-semibold rounded hover:bg-[#005a94]"
                      >
                        Sevk
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* QUICK ASSIGN TEAM MODAL */}
      {assigningReportId && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-sky-100 text-[#0077C2] rounded-xl">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Temizlik Ekibi Yönlendir</h3>
                <p className="text-xs text-slate-500">İhbar: {assigningReportId}</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Görevlendirilecek Deniz Aracı / STK Timi:
              </label>
              <select
                value={teamSelection}
                onChange={(e) => setTeamSelection(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
              >
                <option value="Mavi Bayrak Ekip-1 (Marmara Deniz Süpürgesi)">
                  Mavi Bayrak Ekip-1 (Marmara Deniz Süpürgesi)
                </option>
                <option value="Bodrum Gönüllü Hayalet Ağ Dalgıç Timi">
                  Bodrum Gönüllü Hayalet Ağ Dalgıç Timi
                </option>
                <option value="Kıyı Emniyeti Acil Müdahale Botu #4">
                  Kıyı Emniyeti Acil Müdahale Botu #4
                </option>
                <option value="Ege Deniz Koruma Vakfı Temizlik Filosu">
                  Ege Deniz Koruma Vakfı Temizlik Filosu
                </option>
                <option value="Antalya Büyükşehir Kıyı Temizlik Ekibi">
                  Antalya Büyükşehir Kıyı Temizlik Ekibi
                </option>
              </select>
            </div>

            <div className="p-3 bg-sky-50 rounded-xl text-xs text-[#0077C2] space-y-1">
              <p className="font-semibold">✓ Otomatik Rota ve GPS Bilgisi İletilecek</p>
              <p className="text-slate-500">Ekip görev başladığında kirlilik pini haritada 'Ekip Sevk Edildi' olarak güncellenir.</p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setAssigningReportId(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200"
              >
                İptal
              </button>
              <button
                onClick={handleConfirmAssign}
                className="px-4 py-2 bg-[#0077C2] text-white text-xs font-semibold rounded-lg hover:bg-[#005a94]"
              >
                Görevi Başlat & Sevk Et
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL MODAL IF OPENED */}
      {inspectModalReport && (
        <ReportDetailModal
          report={inspectModalReport}
          onClose={() => setInspectModalReport(null)}
        />
      )}

    </div>
  );
};
