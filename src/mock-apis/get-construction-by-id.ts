import { getConstructions } from "./get-constructions-list";

export async function getConstructionById(id: string) {
  const constructions = await getConstructions();
  return constructions.find((c) => c.id === id);
}
