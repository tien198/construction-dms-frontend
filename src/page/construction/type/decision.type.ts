import type z from "zod";
import type { CreateDecisionSchema } from "../schema/decision.zod";
import type { ConstructionPeriod } from "./construction.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type { CreateSubmission } from "../create/type/submission.type";

export interface CreateDecision extends z.infer<typeof CreateDecisionSchema> {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  submission: CreateSubmission;
  isApproved?: boolean;
  isChangeConstructionInfor?: boolean;
}
