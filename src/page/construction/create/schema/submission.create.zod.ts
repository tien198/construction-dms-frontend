import { object } from "zod/mini";
import { NestedAdministrativeDocumentSchema } from "../../schema/nested-administrative-document.zod";
import { SubmissionSchema } from "../../schema/submission.zod";

export const CreateSubmissionSchema = object({
  ...SubmissionSchema.shape,
  // decision directly for this submissio,
  directlyDecision: NestedAdministrativeDocumentSchema,
});
