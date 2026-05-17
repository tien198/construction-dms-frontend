import { BIDDER } from "@/lib/api-list/document-api-list";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Bidder } from "@/types/domain";

export async function getBidderList() {
  const res = await fetch(BIDDER);
  if (!res.ok) {
    throw new Error(`Failed to fetch bidder`);
  }
  const { result } = (await res.json()) as ResResult<Bidder[]>;
  return result;
}

export async function getBidderById(id: string) {
  const res = await fetch(BIDDER + "/" + id);
  if (!res.ok) {
    throw new Error(`Failed to fetch bidder ${id}`);
  }
  const { result } = (await res.json()) as ResResult<Bidder>;
  return result;
}
