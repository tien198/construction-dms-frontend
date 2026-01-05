import type z from "zod";
import type { BankAccountSchema } from "../schema/bankAccount.zod";

export interface BankAccount extends z.infer<typeof BankAccountSchema> {
  accountNumber: string;
  bankName: string;
  branch: string;
}
