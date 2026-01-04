import type z from "zod";
import type { BankAccountDto } from "./bankAccount.type";
import type { bidderDtoSchema } from "../schema/bidder.zod";

export interface BidderDto extends z.infer<typeof bidderDtoSchema> {
  name: string;
  legalRepresentative: { name: string; position: string };
  address: string;
  phone: string;
  email: string;
  taxCode: string;
  bankAccount: BankAccountDto;
}
