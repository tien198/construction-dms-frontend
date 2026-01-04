import {
  optional,
  union,
  literal,
  string,
  number,
  object,
  boolean,
} from "zod/mini";
import { bidderDtoSchema } from "./bidder.zod";

export const bidPackageDtoSchema = object({
  type: union([literal("TV"), literal("TT"), literal("TC")]),
  projectOwner: string(),
  bidPackageName: string(),
  shortDescription: string(),
  cost: number(),
  costString: string(),
  bidderSelectionTime: string(),
  bidderSelectionMethod: string(),
  successfulBidder: optional(bidderDtoSchema),
  upTo: string(),
  isCompleted: boolean(),
});
