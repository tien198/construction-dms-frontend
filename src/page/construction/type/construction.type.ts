import type z from "zod";
import type { ConstructionInfor } from "./construction-infor.type";
import type { CreateDecision } from "./decision.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type { ConstructionSchema } from "../schema/construction.zod";

export interface Construction extends z.infer<typeof ConstructionSchema> {
  id: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  decisions: CreateDecision[];
  constructionInfor: ConstructionInfor;
}

export type ConstructionPeriod = "KH" | "LCNT_TV_TT" | "BCKTKT";
