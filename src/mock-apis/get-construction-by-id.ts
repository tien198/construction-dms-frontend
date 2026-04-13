import { getConstructions_mock } from "./get-constructions-list.mock";

export async function getConstructionById_mock(id: string) {
  const constructions = await getConstructions_mock();
  return constructions.find((c) => c.id === id);
}
