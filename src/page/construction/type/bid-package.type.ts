import type { BidderDto } from "./bidder.type";

export interface BidPackageDto {
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
