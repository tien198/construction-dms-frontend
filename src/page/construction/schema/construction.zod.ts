import { optional, array, union, literal, string, object } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionInforSchema } from "./construction-infor.zod";
import { CreateDecisionSchema } from "./decision.zod";

export const ConstructionSchema = object({
  id: optional(string()),
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  decisions: array(CreateDecisionSchema),
  constructionInfor: ConstructionInforSchema,
});

export const ConstructionPeriodSchema = union([
  literal("KH"),
  literal("LCNT_TV_TT"),
  literal("BCKTKT"),
]);
