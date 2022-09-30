export interface CompetitiveTiersTypes {
  competitiveTier: {
    uuid: string;
    tiers: {
      smallIcon?: string;
      tierName: string;
      tier: number;
    }[];
  }[];
}
