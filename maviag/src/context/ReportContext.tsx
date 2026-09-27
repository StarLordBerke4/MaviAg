import React, { createContext, useContext, useState, useEffect } from 'react';
import { PollutionReport, PlatformStats, ReportStatus, WasteType } from '../types';
import { INITIAL_REPORTS, INITIAL_STATS } from '../data/mockData';

interface ReportContextType {
  reports: PollutionReport[];
  stats: PlatformStats;
  selectedReport: PollutionReport | null;
  setSelectedReport: (report: PollutionReport | null) => void;
  addReport: (newReport: Omit<PollutionReport, 'id' | 'createdAt' | 'status'>) => PollutionReport;
  updateReportStatus: (id: string, status: ReportStatus) => void;
  assignTeamToReport: (id: string, teamName: string) => void;
  deleteReport: (id: string) => void;
  resetToDefault: () => void;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

const STORAGE_KEY = 'maviag_reports_data';
const STATS_KEY = 'maviag_stats_data';

export const ReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<PollutionReport[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_REPORTS;
  });

  const [stats, setStats] = useState<PlatformStats>(() => {
    try {
      const saved = localStorage.getItem(STATS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_STATS;
  });

  const [selectedReport, setSelectedReport] = useState<PollutionReport | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch {
      // ignore
    }
  }, [reports]);

  useEffect(() => {
    // Dynamic stats update
    const activeHotspots = reports.filter(r => r.status !== 'cleaned' && r.status !== 'rejected').length;
    const criticalSpotsCount = reports.filter(r => r.severity === 'critical' && r.status !== 'cleaned' && r.status !== 'rejected').length;
    const dispatchedTeams = reports.filter(r => r.status === 'team_assigned').length;

    setStats(prev => {
      const updated = {
        ...prev,
        activeHotspots,
        criticalSpotsCount,
        dispatchedTeams: 12 + dispatchedTeams,
        totalReports: reports.length,
      };
      try {
        localStorage.setItem(STATS_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, [reports]);

  const addReport = (newReportData: Omit<PollutionReport, 'id' | 'createdAt' | 'status'>): PollutionReport => {
    const nextNumber = Math.floor(100 + Math.random() * 900);
    const newReport: PollutionReport = {
      ...newReportData,
      id: `MAV-2026-${nextNumber}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'pending',
    };

    setReports(prev => [newReport, ...prev]);
    return newReport;
  };

  const updateReportStatus = (id: string, status: ReportStatus) => {
    setReports(prev =>
      prev.map(item => (item.id === id ? { ...item, status } : item))
    );
    if (selectedReport && selectedReport.id === id) {
      setSelectedReport(prev => prev ? { ...prev, status } : null);
    }
  };

  const assignTeamToReport = (id: string, teamName: string) => {
    setReports(prev =>
      prev.map(item => (item.id === id ? { ...item, status: 'team_assigned', assignedTeam: teamName } : item))
    );
    if (selectedReport && selectedReport.id === id) {
      setSelectedReport(prev => prev ? { ...prev, status: 'team_assigned', assignedTeam: teamName } : null);
    }
  };

  const deleteReport = (id: string) => {
    setReports(prev => prev.filter(item => item.id !== id));
    if (selectedReport && selectedReport.id === id) {
      setSelectedReport(null);
    }
  };

  const resetToDefault = () => {
    setReports(INITIAL_REPORTS);
    setStats(INITIAL_STATS);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STATS_KEY);
  };

  return (
    <ReportContext.Provider
      value={{
        reports,
        stats,
        selectedReport,
        setSelectedReport,
        addReport,
        updateReportStatus,
        assignTeamToReport,
        deleteReport,
        resetToDefault,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReports = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReports must be used within a ReportProvider');
  }
  return context;
};
