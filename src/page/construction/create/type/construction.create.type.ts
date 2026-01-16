import type z from "zod";
import type { ConstructionInfor } from "../../type/construction-infor.type";
import type { Decision } from "../../type/decision.type";
import type { NestedAdministrativeDocumentDto } from "../../type/nested-administrative-document.type";
import type { ConstructionSchema } from "../../schema/construction.zod";

export interface CreateConstruction extends z.infer<typeof ConstructionSchema> {
  id?: string;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  decisions: Decision[];
  constructionInfor: ConstructionInfor;
}
