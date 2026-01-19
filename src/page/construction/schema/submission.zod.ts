import {
  boolean,
  object,
  optional,
  string,
  instanceof as zinstanceof_,
} from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "./construction.zod";
import { ConstructionInforSchema } from "./construction-infor.zod";

export const SubmissionSchema = object({
  no: string(),
  level: string(),
  date: zinstanceof_(Date),
  isApproved: optional(boolean()),
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  pursuantToDec_TTMN: optional(NestedAdministrativeDocumentSchema),
  period: ConstructionPeriodSchema,
  constructionInfor: optional(ConstructionInforSchema),
});
