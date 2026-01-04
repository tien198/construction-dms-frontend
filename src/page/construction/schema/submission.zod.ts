import { optional, string, object, boolean } from "zod/mini";
import { nestedAdministrativeDocumentDtoSchema } from "./nested-administrative-document.zod";
import { constructionPeriodSchema } from "./construction.zod";
import { constructionInforDtoSchema } from "./construction-infor.zod";

export const createSubmissionDtoSchema = object({
  no: string(),
  level: string(),
  date: string(),
  isApproved: optional(boolean()),
  pursuantToDec_TCT: nestedAdministrativeDocumentDtoSchema,
  pursuantToDec_TTMN: optional(nestedAdministrativeDocumentDtoSchema),
  period: constructionPeriodSchema,
  constructionInfor: optional(constructionInforDtoSchema),
  // decision directly for this submissio,
  directlyDecision: optional(nestedAdministrativeDocumentDtoSchema),
});
