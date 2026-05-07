import type { Optional } from "@/lib/type/optional.type";
import type { Decision, Submission } from "@/types/domain";
import type { ConstructionInfoSnapshotPost } from "./construction-info-snapshot-post.type";
import type { BidPackageSnapshotPost } from "./bid-package-snapshot-post.type";

export type SubmissionPost = Omit<
  Optional<Submission, "id">,
  | "construction_info_snapshot"
  | "bid_package_snapshots"
  | "pursuant_to_dec_tct"
  | "pursuant_to_dec_ttmn"
> & {
  construction_info_snapshot: ConstructionInfoSnapshotPost | null;
  bid_package_snapshots: BidPackageSnapshotPost[] | null;

  directly_decision: Pick<Optional<Decision, "id">, "id" | "no" | "period">;
  pursuant_to_dec_tct_id: string | null;
  pursuant_to_dec_ttmn_id: string | null;

  con_id?: string;
};
