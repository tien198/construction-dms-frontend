import type { AdministrativeDocument } from "./administrative-document.type";
import type { ConstructionInfoSnapshot } from "./construction-info-snapshot.type";
import type { BidPackageSnapshot } from "./bid-package-snapshot.type";

export interface Submission extends AdministrativeDocument {
  construction_info_snapshot: ConstructionInfoSnapshot | null;
  bid_package_snapshots: BidPackageSnapshot[] | null;
}
