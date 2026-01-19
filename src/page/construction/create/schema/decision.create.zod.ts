import { z, optional } from "zod/mini";
import { DecisionSchema } from "../../schema/decision.zod";

export const CreateDecisionSchema = z.extend(DecisionSchema, {
  isApproved: optional(DecisionSchema.shape.isApproved),
  isChangeConstructionInfor: optional(
    DecisionSchema.shape.isChangeConstructionInfor,
  ),
});
