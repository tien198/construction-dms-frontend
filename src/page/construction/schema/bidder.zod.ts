import { string, object } from "zod/mini";
import { bankAccountDtoSchema } from "./bankAccount.zod";

export const bidderDtoSchema = object({
  name: string(),
  legalRepresentative: object({
    name: string(),
    position: string(),
  }),
  address: string(),
  phone: string(),
  email: string(),
  taxCode: string(),
  bankAccount: bankAccountDtoSchema,
});
