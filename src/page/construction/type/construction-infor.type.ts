import type z from "zod";
import type { BidPackage } from "./bid-package.type";
import type { ConstructionInforSchema } from "../schema/construction-infor.zod";
import type { ConstructionPeriod } from "./construction.type";

export interface ConstructionInfor
  extends z.infer<typeof ConstructionInforSchema> {
  name: string;
  cost: number;
  costString: string;
  sourceOfFunds: string;
  constructionImplementationTime: {
    startDate: Date | null;
    endDate: Date | null;
  };
  existingConditionOfTheStructure: string;
  repairScope: string;

  bidPackages: BidPackage[];
  packagesAmount: number;
  period: ConstructionPeriod;
}
