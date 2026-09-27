import React, { useState } from 'react';
import { PollutionReport, ReportStatus } from '../types';
import { 
  X, 
  MapPin, 
  Calendar, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  Truck, 
  Clock, 
  AlertTriangle,
  Layers,
  User,
  Scale
} from 'lucide-react';
import { useReports } from '../context/ReportContext';

interface ReportDetailModalProps {
  report: PollutionReport;
  onClose: () => void;
}

export const ReportDetailModal: React.FC<ReportDetailModalProps> = ({ report, onClose }) => {
  const { updateReportStatus, assignTeamToReport } = useReports();
  const [selectedTeam, setSelectedTeam] = useState(report.assignedTeam || 'Mavi Dalış Ekibi #1');
  const [isAssigning, setIsAssigning] = useState(false);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return (
          <span className="px-3 py-1 bg-red-100 text-[#FF1744] border border-red-200 font-semibold rounded-full text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
            Kritik Kirlilik Seviyesi
          </span>
        );
      case 'medium':
        return (
          <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-200 font-medium rounded-full text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Orta Kirlilik Seviyesi
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium rounded-full text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
            Düşük Seviye / Takip
          </span>
        );
    }
  };

  const getStatusBadge = (status: ReportStatus) => {
    switch (status) {
      case 'pending':
        return <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-medium text-xs rounded-md">Beklemede</span>;
      case 'verified':
        return <span className="px-2.5 py-1 bg-blue-100 text-blue-700 font-medium text-xs rounded-md">Doğrulandı</span>;
      case 'team_assigned':
        return <span className="px-2.5 py-1 bg-amber-100 text-amber-700 font-medium text-xs rounded-md">Ekip Sevk Edildi</span>;
      case 'cleaned':
        return <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 font-medium text-xs rounded-md">Temizlendi</span>;
      case 'rejected':
        return <span className="px-2.5 py-1 bg-rose-100 text-rose-700 font-medium text-xs rounded-md">Reddedildi</span>;
    }
  };

  const handleStatusChange = (newStatus: ReportStatus) => {
    updateReportStatus(report.id, newStatus);
  };

  const handleAssignTeam = () => {
    assignTeamToReport(report.id, selectedTeam);
    setIsAssigning(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 bg-sky-100 text-[#0077C2] rounded-lg shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-slate-500">{report.id}</span>
                {getStatusBadge(report.status)}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">{report.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          
          {/* Image & AI Computer Vision Simulation Overlay */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-video shadow-inner group">
            <img 
              src={report.imageUrl} 
              alt={report.title}
              className="w-full h-full object-cover" 
            />

            {/* Simulated AI Object Bounding Boxes */}
            <div className="absolute inset-0 pointer-events-none p-4 sm:p-6">
              {/* Bounding Box 1 */}
              <div className="absolute top-[25%] left-[20%] w-[35%] h-[40%] border-2 border-[#00BFA5] rounded-xs bg-[#00BFA5]/10 animate-pulse">
                <span className="absolute -top-5 sm:-top-6 left-0 bg-[#00BFA5] text-white text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded-t-xs shadow-xs font-semibold">
                  {report.aiDetectedObjects[0] || 'Atık Polimer'}
                </span>
              </div>
              {/* Bounding Box 2 if any */}
              {report.aiDetectedObjects[1] && (
                <div className="absolute bottom-[20%] right-[15%] w-[30%] h-[35%] border-2 border-[#0077C2] rounded-xs bg-[#0077C2]/10">
                  <span className="absolute -top-5 sm:-top-6 left-0 bg-[#0077C2] text-white text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded-t-xs shadow-xs font-semibold">
                    {report.aiDetectedObjects[1]}
                  </span>
                </div>
              )}
            </div>

            {/* AI HUD Badge */}
            <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-700 flex items-center gap-2 max-w-[90%] truncate">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-ping shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] text-emerald-400">AI Güven: %{report.aiConfidence}</span>
              <span className="text-slate-400 font-mono text-[10px] hidden sm:inline">| {report.aiModelVersion || 'MaviAğ-Core'}</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#0077C2]" /> Bölge
              </span>
              <span className="font-semibold text-slate-800 text-sm">{report.locationName}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                <Scale className="w-3.5 h-3.5 text-[#00BFA5]" /> Tahmini Atık
              </span>
              <span className="font-semibold text-slate-800 text-sm">~{report.estimatedWeightKg || 120} kg</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Tarih / Saat
              </span>
              <span className="font-semibold text-slate-800 text-sm">{report.createdAt}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5 text-indigo-500" /> Kaynak
              </span>
              <span className="font-semibold text-slate-800 text-sm">
                {report.source === 'citizen' ? 'Vatandaş İhbarı' : report.source === 'ai_drone' ? 'Otonom Dron' : 'Uydu Taraması'}
              </span>
            </div>
          </div>

          {/* Severity & Description */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">Kirlilik Teşhisi ve Raporu</h4>
              {getSeverityBadge(report.severity)}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {report.description}
            </p>
          </div>

          {/* AI Detections Pills */}
          <div>
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#0077C2]" />
              Yapay Zeka Tarafından Ayrıştırılan Maddeler
            </h4>
            <div className="flex flex-wrap gap-2">
              {report.aiDetectedObjects.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-sky-50 text-[#0077C2] border border-sky-100 rounded-lg text-xs font-medium"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Assigned Team Info */}
          {report.assignedTeam && (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
                  <Truck className="w-5 h-5 text-[#00BFA5]" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 font-medium">Görevli Temizlik Ekibi</span>
                  <p className="text-sm font-bold text-emerald-950">{report.assignedTeam}</p>
                </div>
              </div>
              <span className="text-xs bg-emerald-200/80 text-emerald-900 px-2.5 py-1 rounded-md font-semibold">
                Operasyon Aktif
              </span>
            </div>
          )}

          {/* Team Assignment Box if in Admin mode or wanting to assign */}
          {isAssigning && (
            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Müdahale Edecek Ekibi veya STK'yı Seçin:
              </label>
              <div className="flex gap-2">
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0077C2]"
                >
                  <option value="Mavi Bayrak Ekip-1 (Marmara)">Mavi Bayrak Ekip-1 (Marmara)</option>
                  <option value="Bodrum Gönüllü Dalgıç Timi">Bodrum Gönüllü Dalgıç Timi</option>
                  <option value="Kıyı Emniyeti Deniz Süpürgesi Botu">Kıyı Emniyeti Deniz Süpürgesi Botu</option>
                  <option value="Ege Deniz Koruma Vakfı Filosu">Ege Deniz Koruma Vakfı Filosu</option>
                  <option value="Akdeniz Kıyı Temizliği İnisiyatifi">Akdeniz Kıyı Temizliği İnisiyatifi</option>
                </select>
                <button
                  onClick={handleAssignTeam}
                  className="px-4 py-2 bg-[#0077C2] text-white text-xs font-semibold rounded-lg hover:bg-[#005a94] transition-colors"
                >
                  Onayla & Sevk Et
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Durumu Değiştir:</span>
            <button
              onClick={() => handleStatusChange('verified')}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                report.status === 'verified'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Doğrula
            </button>
            <button
              onClick={() => handleStatusChange('cleaned')}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                report.status === 'cleaned'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Temizlendi Olarak İşaretle
            </button>
          </div>

          <div className="flex items-center gap-2">
            {!isAssigning && report.status !== 'cleaned' && (
              <button
                onClick={() => setIsAssigning(true)}
                className="px-4 py-2 bg-[#00BFA5] hover:bg-[#009688] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Ekip Görevlendir</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 text-xs font-semibold rounded-lg transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
