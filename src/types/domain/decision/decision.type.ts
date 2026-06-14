import type { AdministrativeDocument } from "./administrative-document.type";
import type { ConstructionPeriod } from "../construction.type";
import type { Submission } from "./submission.type";

export interface Decision extends AdministrativeDocument {
  period: ConstructionPeriod;
  construction_id: string;
  submissions: Submission[];
}
