import { string, object } from "zod/mini";
import { BankAccountSchema } from "./bankAccount.zod";

export const BidderSchema = object({
  name: string(),
  legalRepresentative: object({
    name: string(),
    position: string(),
  }),
  address: string(),
  phone: string(),
  email: string(),
  taxCode: string(),
  bankAccount: BankAccountSchema,
});
