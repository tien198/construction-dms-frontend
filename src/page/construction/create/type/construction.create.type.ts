import type z from "zod";
import type { ConstructionInfor } from "../../type/construction-infor.type";
import type { NestedAdministrativeDocumentDto } from "../../type/nested-administrative-document.type";
import type { CreateDecision } from "./decision.create.type";
import type { CreateConstructionSchema } from "../schema/construction.create.zod";

export interface CreateConstruction
  extends z.infer<typeof CreateConstructionSchema> {
  id: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  decisions: CreateDecision[];
  constructionInfor: ConstructionInfor;
}
