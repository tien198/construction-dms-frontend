import {
  optional,
  union,
  literal,
  string,
  number,
  object,
  boolean,
  nullable,
  instanceof as zInstanceOf,
} from "zod/mini";
import { BidderSchema } from "./bidder.zod";

export const BidPackageSchema = object({
  type: union([literal("TV"), literal("TT"), literal("TC")]),
  projectOwner: string(),
  bidPackageName: string(),
  shortDescription: string(),
  cost: number(),
  costString: string(),
  bidderSelectionTime: nullable(zInstanceOf(Date)),
  bidderSelectionMethod: string(),
  successfulBidder: optional(BidderSchema),
  upTo: string(),
  isCompleted: boolean(),
});
