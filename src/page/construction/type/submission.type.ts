import type { ConstructionPeriod } from "./construction.type";
import type { ConstructionInforDto } from "./construction-infor.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";

export interface CreateSubmissionDto {
  no: string;
  level: string;
  date: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  constructionInfor?: ConstructionInforDto;
  // decision directly for this submission
  directlyDecision?: NestedAdministrativeDocumentDto;
  isApproved?: boolean;
}
