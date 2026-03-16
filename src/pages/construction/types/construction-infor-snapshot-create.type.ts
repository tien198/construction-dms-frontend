import type { ConstructionInfoSnapshot } from "@/types";
import type { BidPackageSnapshotCreate } from "./bid-package-snapshot-create.type";

export type ConstructionInfoSnapshotCreate = Omit<
  ConstructionInfoSnapshot,
  "id" | "bid_package_snapshots"
> & {
  bid_package_snapshots: BidPackageSnapshotCreate[];
};
