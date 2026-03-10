import type { BidPackageSnapshot, ConstructionInfoSnapshot } from "@/types";

export type FormSnapshot = Omit<ConstructionInfoSnapshot, "id" | "bid_package_snapshots"> & {
  bid_package_snapshots: Omit<BidPackageSnapshot, "id">[];
};

export interface ConstructionInfoSnapshotFormProps {
  values: FormSnapshot;
  onChange: (
    field: keyof ConstructionInfoSnapshot,
    value: unknown
  ) => void;
}
