import type { ConstructionInfoSnapshot } from "@/types";
import type { BidPackageSnapshotPost } from "./bid-package-snapshot-post.type";

export type ConstructionInfoSnapshotPost = Omit<
  ConstructionInfoSnapshot,
  "id" | "bid_package_snapshots"
> & {
  id?: string;
  bid_package_snapshots: BidPackageSnapshotPost[];
};
