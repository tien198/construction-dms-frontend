import { array, object, optional, string } from "zod/mini";
import { CreateDecisionSchema } from "./decision.create.zod";
import { ConstructionSchema } from "../../schema/construction.zod";

export const CreateConstructionSchema = object({
  ...ConstructionSchema.shape,
  id: optional(string()),
  decisions: array(CreateDecisionSchema),
});
