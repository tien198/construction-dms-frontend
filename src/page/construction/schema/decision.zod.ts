import { optional, string, object, boolean } from "zod/mini";
import { nestedAdministrativeDocumentDtoSchema } from "./nested-administrative-document.zod";
import { constructionPeriodSchema } from "./construction.zod";
import { createSubmissionDtoSchema } from "./submission.zod";

export const createDecisionDtoSchema = object({
  no: string(),
  level: string(),
  date: string(),
  pursuantToDec_TTMN: optional(nestedAdministrativeDocumentDtoSchema),
  period: constructionPeriodSchema,
  submission: createSubmissionDtoSchema,
  isApproved: optional(boolean()),
  isChangeConstructionInfor: optional(boolean()),
});
