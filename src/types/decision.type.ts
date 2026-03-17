import type { AdministrativeDocument } from "./administrative-document.type";
import type { Submission } from "./submission.type";

export interface Decision extends AdministrativeDocument {
  period: "TV" | "TT" | "BCKTKT";
  submission: Submission;
}
