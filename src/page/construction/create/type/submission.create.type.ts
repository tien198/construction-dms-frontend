import type { Submission } from "../../type/submission.type";
import type { NestedAdministrativeDocument } from "../../type/nested-administrative-document.type";

export interface CreateSubmission extends Submission {
  directlyDecision: NestedAdministrativeDocument;

  isChangeConstructionInfor?: boolean;
}
