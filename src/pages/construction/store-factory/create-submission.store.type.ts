import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionPost } from "../types/submission-post.type";
import type { BidPackageSnapshotPost } from "../types/bid-package-snapshot-post.type";
import type { ConstructionPeriod } from "@/types/construction.type";

export interface CreateSubmissionStore {
  // default submission is TV
  submission: SubmissionPost;
  submission_tt: SubmissionPost;
  setField: <K extends RecursivePath<SubmissionPost>>(
    field: K,
    value: any,
    type?: "tv" | "tt" | "bcktkt",
  ) => void;

  setBidPackage<K extends keyof BidPackageSnapshotPost>(
    per: ConstructionPeriod,
    field: K,
    value: any,
  ): void;
  reset: (type: ConstructionPeriod, sub?: SubmissionPost) => void;
}
