import { optional, string, object } from "zod/mini";

export const NestedAdministrativeDocumentSchema = object({
  id: optional(string()),
  no: string(),
  level: string(),
  date: string(),
});
