import type z from "zod";
import type { CreateDecisionSchema } from "../schema/decision.create.zod";
import type { NestedAdministrativeDocumentDto } from "../../type/nested-administrative-document.type";
import type { ConstructionPeriod } from "../../type/construction.type";
import type { CreateSubmission } from "./submission.create.type";

export interface CreateDecision extends z.infer<typeof CreateDecisionSchema> {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  submission: CreateSubmission;
  isApproved?: boolean;
  isChangeConstructionInfor?: boolean;
}
