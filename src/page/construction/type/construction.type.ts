import type z from "zod";
import type { ConstructionInfor } from "./construction-infor.type";
import type { Decision } from "./decision.type";
import type { NestedAdministrativeDocumentDto } from "./nested-administrative-document.type";
import type {
  ConstructionPeriodSchema,
  ConstructionSchema,
} from "../schema/construction.zod";

export interface Construction extends z.infer<typeof ConstructionSchema> {
  id: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  decisions: Decision[];
  constructionInfor: ConstructionInfor;
}

export type ConstructionPeriod = z.infer<typeof ConstructionPeriodSchema>;
