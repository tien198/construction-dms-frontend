import { GET_CONSTRUCTIONS_LIST } from "@/lib/api-list/document-api-list";
import type { ConstructionResDto } from "./dto/get-construction-list.dto";

export async function getConstructions(): Promise<ConstructionResDto[]> {
  const res = await fetch(GET_CONSTRUCTIONS_LIST);
  if (!res.ok) {
    throw new Error("Failed to fetch constructions list");
  }
  return await res.json();
}
