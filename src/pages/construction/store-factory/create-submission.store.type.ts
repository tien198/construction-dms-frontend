import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionPost } from "../types/submission-post.type";
import type { BidPackageSnapshotPost } from "../types/bid-package-snapshot-post.type";
import type { ConstructionPeriod } from "@/types/construction.type";
import type { BidPackageType } from "@/types/bid-package-snapshot.type";
import type { ConstructionInfoSnapshotPost } from "../types/construction-infor-snapshot-post.type";

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

  setConstructionInfor(value: ConstructionInfoSnapshotPost): void;

  reset: (per: ConstructionPeriod, sub?: SubmissionPost) => void;
}
