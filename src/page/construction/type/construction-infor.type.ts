import type z from "zod";
import type { BidPackageDto } from "./bid-package.type";
import type { ConstructionPeriod } from "./construction.type";
import type { constructionInforDtoSchema } from "../schema/construction-infor.zod";

export interface ConstructionInforDto
  extends z.infer<typeof constructionInforDtoSchema> {
  name: string;
  cost: number;
  costString: string;
  sourceOfFunds: string;
  constructionImplementationTime: {
    startDate: string;
    endDate: string;
  };
  existingConditionOfTheStructure: string;
  repairScope: string;

  bidPackages: BidPackageDto[];
  packagesAmount: number;
  period: ConstructionPeriod;
}
