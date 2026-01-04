import type z from "zod";
import type { BidderDto } from "./bidder.type";
import type { bidPackageDtoSchema } from "../schema/bid-package.zod";

export interface BidPackageDto extends z.infer<typeof bidPackageDtoSchema> {
  type: "TV" | "TT" | "TC";
  projectOwner: string;
  bidPackageName: string;
  shortDescription: string;
  cost: number;
  costString: string;
  bidderSelectionTime: string;
  bidderSelectionMethod: string;
  successfulBidder?: BidderDto;
  // contractType: string
  upTo: string;
  isCompleted: boolean;
}
