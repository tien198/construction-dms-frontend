import type { RecursivePath } from "@/lib/type/recursion";
import type { SubmissionCreate } from "../types/submission-create.type";

export interface CreateSubmissionStore {
  submission: SubmissionCreate;
  setField: <K extends RecursivePath<SubmissionCreate>>(
    field: K,
    value: any,
  ) => void;
  reset: () => void;
}
