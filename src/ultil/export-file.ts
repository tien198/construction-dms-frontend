import type { Decision } from "@/types/domain";
import { genDocument } from "@/api/gen-document";

export function exportDocx(dec: Decision) {
  dec.submissions.forEach(async (sub) => {
    await genDocument(sub.id, "submission");
    await genDocument(sub.id, "decision");
  });
}
