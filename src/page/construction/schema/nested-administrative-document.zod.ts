import { optional, string, object, instanceof as zInstanceOf } from "zod/mini";

export const NestedAdministrativeDocumentSchema = object({
  id: optional(string()),
  no: string(),
  level: string(),
  date: zInstanceOf(Date),
});
