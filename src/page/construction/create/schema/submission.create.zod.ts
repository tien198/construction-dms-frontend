import {
  optional,
  string,
  object,
  boolean,
  instanceof as zInstanceOf,
  nullable,
} from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "../../schema/nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "../../schema/construction.zod";
import { ConstructionInforSchema } from "../../schema/construction-infor.zod";

export const CreateSubmissionSchema = object({
  no: string(),
  level: string(),
  date: nullable(zInstanceOf(Date)),
  isApproved: optional(boolean()),
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  pursuantToDec_TTMN: optional(NestedAdministrativeDocumentSchema),
  period: ConstructionPeriodSchema,
  constructionInfor: optional(ConstructionInforSchema),
  // decision directly for this submissio,
  directlyDecision: optional(NestedAdministrativeDocumentSchema),
});
