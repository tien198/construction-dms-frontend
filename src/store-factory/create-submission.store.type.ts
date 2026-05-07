import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionPost } from "@/types/submission-post/submission-post.type";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";
import type { ConstructionPeriod } from "@/types/domain/construction.type";
import type { BidPackageType } from "@/types/domain/bid-package-snapshot.type";
import type { ConstructionInfoSnapshotPost } from "@/types/submission-post/construction-info-snapshot-post.type";

export interface CreateSubmissionStore {
  // default submission is TV
  submission: SubmissionPost;
  setField: <K extends RecursivePath<SubmissionPost>>(
    field: K,
    value: any,
  ) => void;

  setBidPackageField<K extends keyof BidPackageSnapshotPost>(
    type: BidPackageType,
    field: K,
    value: any,
  ): void;

  setConstructionInfo(value: ConstructionInfoSnapshotPost): void;

  reset: (per: ConstructionPeriod, sub?: SubmissionPost) => void;
}
