import type { AdministrativeDocument } from "./administrative-document.type";
import type { Submission } from "./submission.type";

export interface Decision extends AdministrativeDocument {
  is_change_construction_infor: boolean | null;
  submissions: Submission;
}
