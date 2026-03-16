import type { AdministrativeDocument, Submission } from "@/types";
import type { ConstructionInfoSnapshotCreate } from "./construction-infor-snapshot-create.type";

export type SubmissionPost = Omit<
  Submission,
  "id" | "construction_infor_snapshot"
  // | "pursuant_to_dec_tct"
  // | "pursuant_to_dec_ttmn"
> & {
  construction_infor_snapshot?: ConstructionInfoSnapshotCreate;
  directlyDecision: Pick<AdministrativeDocument, "no">;
  // pursuant_to_dec_tct_id: string | null;
  // pursuant_to_dec_ttmn_id: string | null;
};
