import type { BidPackageSnapshot } from "@/types";

export interface BidPackageSnapshotFormProps {
  index: number;
  values: Omit<BidPackageSnapshot, "id">;
  onChange: (index: number, field: keyof BidPackageSnapshot, value: unknown) => void;
  onRemove: (index: number) => void;
}
