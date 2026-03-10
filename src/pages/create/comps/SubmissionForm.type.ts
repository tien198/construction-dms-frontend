import type { Submission } from "@/types";
import type { FormSnapshot } from "./ConstructionInfoSnapshotForm.type";

export type FormSubmission = Omit<Submission, "construction_infor_snapshot"> & {
  construction_infor_snapshot: FormSnapshot | null;
};

export interface SubmissionFormProps {
  values: FormSubmission;
  onChange: (
    field: keyof FormSubmission,
    value: unknown,
  ) => void;
  onRemove?: () => void;
}
