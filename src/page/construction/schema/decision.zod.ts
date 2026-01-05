import { optional, string, object, boolean } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "./construction.zod";
import { CreateSubmissionSchema } from "../create/schema/submission.zod";

export const CreateDecisionSchema = object({
  no: string(),
  level: string(),
  date: string(),
  pursuantToDec_TTMN: optional(NestedAdministrativeDocumentSchema),
  period: ConstructionPeriodSchema,
  submission: CreateSubmissionSchema,
  isApproved: optional(boolean()),
  isChangeConstructionInfor: optional(boolean()),
});
