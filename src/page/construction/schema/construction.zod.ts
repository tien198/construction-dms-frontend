import { array, enum as zenum, object } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionInforSchema } from "./construction-infor.zod";
import { DecisionSchema } from "./decision.zod";

export const ConstructionSchema = object({
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  decisions: array(DecisionSchema),
  constructionInfor: ConstructionInforSchema,
});

export const ConstructionPeriodSchema = zenum(["KH", "TV", "TT", "BCKTKT"]);
