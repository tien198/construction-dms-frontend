import { object, optional } from "zod/mini";
import { DecisionSchema } from "../../schema/decision.zod";

export const CreateDecisionSchema = object({
  // ...DecisionSchema,
  isApproved: optional(DecisionSchema.shape.isApproved),
  isChangeConstructionInfor: optional(
    DecisionSchema.shape.isChangeConstructionInfor
  ),
});
