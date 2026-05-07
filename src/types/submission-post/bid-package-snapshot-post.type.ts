import type { Optional } from "@/lib/type/optional.type";
import type { BidPackageSnapshot } from "@/types/domain";

export type BidPackageSnapshotPost = Optional<BidPackageSnapshot, "id">;
