import type z from "zod";
import type { nestedAdministrativeDocumentDtoSchema } from "../schema/nested-administrative-document.zod";

export interface NestedAdministrativeDocumentDto
  extends z.infer<typeof nestedAdministrativeDocumentDtoSchema> {
  id?: string;
  no: string;
  level: string;
  date: string;
}
