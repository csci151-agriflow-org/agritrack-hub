export interface Crop {
  id: string;
  name: string;
  location: string;
  stage: "Seedling" | "Growing" | "Mature";
  status: "Active" | "Harvested";
  notes?: string;
}
