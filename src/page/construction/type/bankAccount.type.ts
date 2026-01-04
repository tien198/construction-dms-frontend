import type z from "zod";
import type { bankAccountDtoSchema } from "../schema/bankAccount.zod";

export interface BankAccountDto extends z.infer<typeof bankAccountDtoSchema> {
  accountNumber: string;
  bankName: string;
  branch: string;
}
