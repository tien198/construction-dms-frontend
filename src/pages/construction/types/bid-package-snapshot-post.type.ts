import type { BidPackageSnapshot } from "@/types";

export type BidPackageSnapshotPost = Omit<BidPackageSnapshot, "id"> & {
  id?: string;
};
