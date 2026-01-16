import type z from "zod";
import type { DecisionSchema } from "../schema/decision.zod";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type { CreateSubmission } from "../create/type/submission.create.type";
import type { ConstructionPeriod } from "./construction.type";

export interface Decision extends z.infer<typeof DecisionSchema> {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  submission: CreateSubmission;
  isApproved: boolean;
  isChangeConstructionInfor: boolean;
}
