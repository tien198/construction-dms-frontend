import type { ConstructionInforDto } from "./construction-infor.type";
import type { ConstructionPeriod } from "./construction.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type { CreateSubmissionDto } from "./submission.type";

export interface CreateDecisionDto {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  submission: CreateSubmissionDto;
  isApproved?: boolean;
  isChangeConstructionInfor?: boolean;
  constructionInfor?: ConstructionInforDto;
}
