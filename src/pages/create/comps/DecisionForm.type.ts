import type { Decision } from "@/types";
import type { FormSubmission } from "./SubmissionForm.type";

export type FormDecision = Omit<Decision, "submissions"> & {
  submissions: FormSubmission;
};

export interface DecisionFormProps {
  values: FormDecision;
  onChange: (field: keyof FormDecision, value: unknown) => void;
  onRemove?: () => void;
}
