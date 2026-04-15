import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionPost } from "../types/submission-post.type";
import type { BidPackageSnapshotPost } from "../types/bid-package-snapshot-post.type";
import type { ConstructionPeriod } from "@/types/construction.type";
import type { BidPackageType } from "@/types/bid-package-snapshot.type";

export interface CreateSubmissionStore {
  // default submission is TV
  submission: SubmissionPost;
  setField: <K extends RecursivePath<SubmissionPost>>(
    field: K,
    value: any,
  ) => void;

  setBidPackage<K extends keyof BidPackageSnapshotPost>(
    type: BidPackageType,
    field: K,
    value: any,
  ): void;
  reset: (type: ConstructionPeriod, sub?: SubmissionPost) => void;
}
