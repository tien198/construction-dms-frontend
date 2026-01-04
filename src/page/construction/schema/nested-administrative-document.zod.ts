import { optional, string, object } from "zod/mini";

export const nestedAdministrativeDocumentDtoSchema = object({
  id: optional(string()),
  no: string(),
  level: string(),
  date: string(),
});
