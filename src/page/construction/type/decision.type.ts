import type z from "zod";
import type { createDecisionDtoSchema } from "../schema/decision.zod";
import type { ConstructionPeriod } from "./construction.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type { CreateSubmissionDto } from "./submission.type";

export interface CreateDecisionDto
  extends z.infer<typeof createDecisionDtoSchema> {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  submission: CreateSubmissionDto;
  isApproved?: boolean;
  isChangeConstructionInfor?: boolean;
}
