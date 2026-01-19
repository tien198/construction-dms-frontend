import { string, object, boolean, instanceof as zInstanceof } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "./nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "./construction.zod";
import { optional } from "zod";
import { SubmissionSchema } from "./submission.zod";

export const DecisionSchema = object({
  no: string(),
  level: string(),
  date: zInstanceof(Date),
  pursuantToDec_TCT: NestedAdministrativeDocumentSchema,
  pursuantToDec_TTMN: optional(NestedAdministrativeDocumentSchema),
  period: ConstructionPeriodSchema,
  submission: SubmissionSchema,
  isApproved: boolean(),
  isChangeConstructionInfor: boolean(),
});
