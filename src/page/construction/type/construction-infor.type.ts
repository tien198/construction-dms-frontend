import type { BidPackageDto } from "./bid-package.type";
import type { ConstructionPeriod } from "./construction.type";

export interface ConstructionInforDto {
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
