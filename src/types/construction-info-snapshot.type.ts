import type { BidPackageSnapshot } from "./bid-package-snapshot.type";

export interface ConstructionInfoSnapshot {
  id: number;
  name: string;
  budget: number;
  budget_str: string;
  source_of_funds: string;
  // imp - implementation
  impl_start_date: string;
  impl_end_date: string;
  existing_condition_of_the_structure: string;
  repair_scope: string;
  // est - estimated
  est_cost: number;
  est_cost_str: string;
  bid_package_snapshots?: BidPackageSnapshot[];
}
