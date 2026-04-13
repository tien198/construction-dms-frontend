import type { Decision } from "@/types";

export async function getDecisionByPer(
  conId: string,
  period: string,
): Promise<Decision | undefined> {
  // curl -X GET http://localhost:3000/api/document/decision/019d809f-122e-77a8-ae52-2dd6998ff23a/KH_TV_TT
  const res = await fetch(
    import.meta.env.VITE_API_URL + `/document/decision/${conId}/${period}`,
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch decision for period ${period}`);
  }
  return (await res.json()).result as Decision;
}
