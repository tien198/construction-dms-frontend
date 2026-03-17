import { getConstructionById } from "./get-construction-by-id";

export async function getDecisionByPer(conId: string, per: string) {
  const con = await getConstructionById(conId);
  if (!con) return null;
  const dec = con.decisions.find((d) => d.period === per);
  return dec;
}
