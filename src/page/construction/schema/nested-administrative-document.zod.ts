import {
  optional,
  string,
  object,
  instanceof as zInstanceOf,
  nullable,
} from "zod/mini";

export const NestedAdministrativeDocumentSchema = object({
  id: optional(string()),
  no: string(),
  level: string(),
  date: nullable(zInstanceOf(Date)),
});
