import type { Decision } from "@/types/domain";
import { getConstructionById_mock } from "./get-construction-by-id";

export async function getDecisionByPer_mock(
  conId: string,
  per: string,
): Promise<Decision | undefined> {
  const con = await getConstructionById_mock(conId);
  if (!con) return undefined;
  const dec = con.decisions.find((d: Decision) => d.period === per);
  return dec;
}
