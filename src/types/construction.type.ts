import type { Decision } from "./decision.type";

export interface Construction {
  id: string;
  decisions: Decision[];
}
