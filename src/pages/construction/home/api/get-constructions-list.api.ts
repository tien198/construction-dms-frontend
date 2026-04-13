import type { ConstructionResDto } from "./dto/get-construction-list.dto";

export async function getConstructions(): Promise<ConstructionResDto[]> {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/document/constructions-list",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch constructions list");
  }
  return await res.json();
}
