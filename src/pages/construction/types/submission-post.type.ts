import type { Decision, Submission } from "@/types";
import type { ConstructionInfoSnapshotPost } from "./construction-infor-snapshot-post.type";

export type SubmissionPost = Omit<
  Submission,
  | "id"
  | "construction_infor_snapshot"
  | "pursuant_to_dec_tct"
  | "pursuant_to_dec_ttmn"
> & {
  id?: string;
  construction_infor_snapshot?: ConstructionInfoSnapshotPost;
  directlyDecision: Pick<Decision, "no" | "period">;
  pursuant_to_dec_tct_id: string | null;
  pursuant_to_dec_ttmn_id: string | null;
};
