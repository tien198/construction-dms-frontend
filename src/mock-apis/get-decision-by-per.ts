import type { Decision } from "@/types";
import { getConstructionById } from "./get-construction-by-id";

export async function getDecisionByPer(
  conId: string,
  per: string,
): Promise<Decision | undefined> {
  const con = await getConstructionById(conId);
  if (!con) return undefined;
  const dec = con.decisions.find((d) => d.period === per);
  return dec;
}
