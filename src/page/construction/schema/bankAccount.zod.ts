import { string, object } from "zod/mini";

export const BankAccountSchema = object({
  accountNumber: string(),
  bankName: string(),
  branch: string(),
});
