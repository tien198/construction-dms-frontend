import type z from "zod";
import type { CreateDecisionSchema } from "../schema/decision.create.zod";
import type { NestedAdministrativeDocument } from "../../type/nested-administrative-document.type";
import type { ConstructionPeriod } from "../../type/construction.type";
import type { CreateSubmission } from "./submission.create.type";

export interface CreateDecision extends z.infer<typeof CreateDecisionSchema> {
  no: string;
  level: string;
  date: Date;
  pursuantToDec_TCT: NestedAdministrativeDocument;
  pursuantToDec_TTMN?: NestedAdministrativeDocument;
  period: ConstructionPeriod;
  submission: CreateSubmission;
  isApproved?: boolean;
  isChangeConstructionInfor?: boolean;
}
