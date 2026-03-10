import type { BidPackageSnapshot } from "./bid-package-snapshot.type";

export interface ConstructionInfoSnapshot {
  id: number;
  period: "KH" | "TV" | "TT" | "BCKTKT";
  name: string;
  budget: number;
  budget_string: string;
  source_of_funds: string;
  implementation_start_date: string;
  implementation_end_date: string;
  existing_condition_of_the_structure: string;
  repair_scope: string;
  estimated_cost: number;
  estimated_cost_string: string;
  bid_package_snapshots?: BidPackageSnapshot[];
}
