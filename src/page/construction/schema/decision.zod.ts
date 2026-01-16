import { string, object, boolean } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "./construction.zod";
import { CreateSubmissionSchema } from "../create/schema/submission.create.zod";
import { optional } from "zod";

export const DecisionSchema = object({
  no: string(),
  level: string(),
  date: string(),
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  pursuantToDec_TTMN: optional(NestedAdministrativeDocumentSchema),
  period: ConstructionPeriodSchema,
  submission: CreateSubmissionSchema,
  isApproved: boolean(),
  isChangeConstructionInfor: boolean(),
});
