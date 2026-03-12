import type { SubmissionCreate } from "../types/submission-create.type";

export interface CreateSubmission {
  submission: SubmissionCreate;
  setField: <K extends keyof SubmissionCreate>(
    field: K,
    value: SubmissionCreate[K],
  ) => void;
  updateSubmission: (updates: Partial<SubmissionCreate>) => void;
  reset: () => void;
}
