import { string, number, array, object } from "zod/mini";
import { bidPackageDtoSchema } from "./bid-package.zod";
import { constructionPeriodSchema } from "./construction.zod";

export const constructionInforDtoSchema = object({
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
  bidPackages: array(bidPackageDtoSchema),
  packagesAmount: number(),
  period: constructionPeriodSchema,
});
