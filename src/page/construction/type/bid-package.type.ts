import type z from "zod";
import type { Bidder } from "./bidder.type";
import type { BidPackageSchema } from "../schema/bid-package.zod";

export interface BidPackage extends z.infer<typeof BidPackageSchema> {
  type: "TV" | "TT" | "TC";
  projectOwner: string;
  bidPackageName: string;
  shortDescription: string;
  cost: number;
  costString: string;
  bidderSelectionTime: string;
  bidderSelectionMethod: string;
  successfulBidder?: Bidder;
  // contractType: string
  upTo: string;
  isCompleted: boolean;
}
