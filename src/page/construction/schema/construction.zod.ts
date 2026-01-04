import { optional, union, literal, string, object } from "zod/mini";
import { nestedAdministrativeDocumentDtoSchema } from "./nested-administrative-document.zod";
import { constructionInforDtoSchema } from "./construction-infor.zod";
// import { createDecisionDtoSchema } from "./decision.zod";

export const createConstructionDtoSchema = object({
  id: optional(string()),
  pursuantToDec_TCT: nestedAdministrativeDocumentDtoSchema,
  // decisions: array(createDecisionDtoSchema),
  constructionInfor: constructionInforDtoSchema,
});

export const constructionPeriodSchema = union([
  literal("KH"),
  literal("LCNT_TV_TT"),
  literal("BCKTKT"),
]);
