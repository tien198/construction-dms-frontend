import { string, object } from "zod/mini";

export const bankAccountDtoSchema = object({
  accountNumber: string(),
  bankName: string(),
  branch: string(),
});
