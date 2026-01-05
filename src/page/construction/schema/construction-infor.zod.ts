import { string, number, array, object } from "zod/mini";
import { BidPackageSchema } from "./bid-package.zod";
import { ConstructionPeriodSchema } from "./construction.zod";

export const ConstructionInforSchema = object({
  name: string(),
  cost: number(),
  costString: string(),
  sourceOfFunds: string(),
  constructionImplementationTime: object({
    startDate: string(),
    endDate: string(),
  }),
  existingConditionOfTheStructure: string(),
  repairScope: string(),
  bidPackages: array(BidPackageSchema),
  packagesAmount: number(),
  period: ConstructionPeriodSchema,
});
