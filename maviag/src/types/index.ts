export type WasteType = 'plastic' | 'ghost_net' | 'microplastic' | 'oil_chemical' | 'domestic' | 'other';

export type SeverityLevel = 'low' | 'medium' | 'critical';

export type ReportStatus = 'pending' | 'verified' | 'team_assigned' | 'cleaned' | 'rejected';

export interface PollutionReport {
  id: string;
  title: string;
  description: string;
  locationName: string;
  region: 'Marmara' | 'Ege' | 'Akdeniz' | 'Karadeniz';
  coordinates: [number, number]; // [latitude, longitude]
  wasteType: WasteType;
  severity: SeverityLevel;
  status: ReportStatus;
  aiConfidence: number; // e.g. 94 (%)
  aiDetectedObjects: string[]; // e.g. ["PET Şişeler", "Balıkçı Ağı Parçaları"]
  aiModelVersion?: string;
  imageUrl: string;
  createdAt: string;
  reporterName?: string;
  reporterContact?: string;
  assignedTeam?: string;
  estimatedWeightKg?: number;
  source: 'citizen' | 'ai_satellite' | 'ai_drone';
}

export interface MapFilterState {
  severityOnlyCritical: boolean;
  wasteType: WasteType | 'all';
  status: ReportStatus | 'all';
  searchQuery: string;
  region: string | 'all';
}

export interface PlatformStats {
  cleanedTodayKg: number;
  activeHotspots: number;
  aiAccuracyPercent: number;
  totalReports: number;
  dispatchedTeams: number;
  criticalSpotsCount: number;
}
