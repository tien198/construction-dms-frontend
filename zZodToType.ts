import { printZodAsTs } from "@ephys/zod-to-ts";
import { constructionSchema } from "./src/main";
const ts = printZodAsTs({ schemas: [constructionSchema] });
console.log(ts);
