import type { ConstructionInforDto } from "./construction-infor.type";
import type { CreateDecisionDto } from "./decision.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";

export interface CreateConstructionDto {
  id?: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  decisions: CreateDecisionDto[];
  constructionInfor: ConstructionInforDto;
}

export type ConstructionPeriod = "KH" | "LCNT_TV_TT" | "BCKTKT";
