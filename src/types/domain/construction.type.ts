import type { Decision } from "./decision.type";

export interface Construction {
  id: string;
  decisions: Decision[];
}

export type ConstructionPeriod = "KH_LCNT" | "KQ_KH_LCNT" | "BCKTKT" | "TC";
