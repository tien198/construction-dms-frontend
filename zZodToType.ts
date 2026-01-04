import { printZodAsTs } from "@ephys/zod-to-ts";
import { createConstructionDtoSchema } from "./src/page/construction/schema/construction.zod";
import { nestedAdministrativeDocumentDtoSchema } from "./src/page/construction/schema/nested-administrative-document.zod";
import { constructionInforDtoSchema } from "./src/page/construction/schema/construction-infor.zod";
// import { createDecisionDtoSchema } from "./src/page/construction/schema/decision.zod";
const ts = printZodAsTs({
  schemas: [
    createConstructionDtoSchema,
    nestedAdministrativeDocumentDtoSchema,
    // createDecisionDtoSchema,
    constructionInforDtoSchema,
  ],
});
console.log(ts);
