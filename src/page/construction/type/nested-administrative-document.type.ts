import type z from "zod";
import type { NestedAdministrativeDocumentSchema } from "../schema/nested-administrative-document.zod";

export interface NestedAdministrativeDocumentDto
  extends z.infer<typeof NestedAdministrativeDocumentSchema> {
  id?: string;
  no: string;
  level: string;
  date: string;
}
