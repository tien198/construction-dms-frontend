import { printZodAsTs } from "@ephys/zod-to-ts";
import { CreateDecisionSchema } from "./src/page/construction/create/schema/decision.create.zod";
import { NestedAdministrativeDocumentSchema } from "./src/page/construction/schema/nested-administrative-document.zod";
import { ConstructionPeriodSchema } from "./src/page/construction/schema/construction.zod";
import { CreateSubmissionSchema } from "./src/page/construction/create/schema/submission.zod";

// import { createDecisionDtoSchema } from "./src/page/construction/schema/decision.zod";
const ts = printZodAsTs({
  schemas: [
    CreateDecisionSchema,
    NestedAdministrativeDocumentSchema,
    // createDecisionDtoSchema,
    ConstructionPeriodSchema,
    CreateSubmissionSchema,
  ],
});
console.log(ts);
