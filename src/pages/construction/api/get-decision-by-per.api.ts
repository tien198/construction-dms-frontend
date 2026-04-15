import type { Decision } from "@/types";

import { GET_DECISION_BY_PER } from "@/lib/api-list/document-api-list";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { ConstructionPeriod } from "@/types/construction.type";

export async function getDecisionByPer(
  conId: string,
  period: ConstructionPeriod,
): Promise<ResResult<Decision | undefined>> {
  // curl -X GET http://localhost:3000/api/document/decision/019d809f-122e-77a8-ae52-2dd6998ff23a/KH_TV_TT
  const res = await fetch(`${GET_DECISION_BY_PER}/${conId}/${period}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch decision for period ${period}`);
  }
  return (await res.json()) as ResResult<Decision>;
}
