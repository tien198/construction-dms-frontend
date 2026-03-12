import type { Submission } from "@/types";
import type { ConstructionInfoSnapshotCreate } from "./construction-infor-snapshot-create.type";

export type SubmissionCreate = Omit<
  Submission,
  "id" | "construction_infor_snapshot"
> & {
  construction_infor_snapshot: ConstructionInfoSnapshotCreate;
};
