import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionCreate } from "../types/submission-create.type";
import type { BidPackageSnapshotCreate } from "../types/bid-package-snapshot-create.type";
import type { ConstructionPeriod } from "@/types/construction.type";

export interface CreateSubmissionStore {
  // default submission is TV
  submission: SubmissionCreate;
  submission_tt: SubmissionCreate;
  setField: <K extends RecursivePath<SubmissionCreate>>(
    field: K,
    value: any,
    type?: "tv" | "tt" | "bcktkt",
  ) => void;

  setBidPackage<K extends keyof BidPackageSnapshotCreate>(
    per: ConstructionPeriod,
    field: K,
    value: any,
  ): void;
  reset: () => void;
}
