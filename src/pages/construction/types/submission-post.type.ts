import type { Decision, Submission } from "@/types";
import type { ConstructionInfoSnapshotPost } from "./construction-info-snapshot-post.type";

export type SubmissionPost = Omit<
  Submission,
  | "id"
  | "construction_info_snapshot"
  | "pursuant_to_dec_tct"
  | "pursuant_to_dec_ttmn"
> & {
  id?: string;
  construction_info_snapshot?: ConstructionInfoSnapshotPost;
  directly_decision: Pick<Decision, "no" | "period"> & { id?: string };
  pursuant_to_dec_tct_id: string | null;
  pursuant_to_dec_ttmn_id: string | null;

  con_id?: string;
};
