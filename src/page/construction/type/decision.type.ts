import type z from "zod";
import type { DecisionSchema } from "../schema/decision.zod";
import type { NestedAdministrativeDocument } from "./nested-administrative-document.type";
import type { ConstructionPeriod } from "./construction.type";
import type { Submission } from "./submission.type";

export interface Decision extends z.infer<typeof DecisionSchema> {
  no: string;
  level: string;
  date: Date;
  pursuantToDec_TCT: NestedAdministrativeDocument;
  pursuantToDec_TTMN?: NestedAdministrativeDocument;
  period: ConstructionPeriod;
  submission: Submission;
  isApproved: boolean;
  isChangeConstructionInfor: boolean;
}
