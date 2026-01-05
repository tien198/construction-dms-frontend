import type z from "zod";
import type { BankAccount } from "./bankAccount.type";
import type { BidderSchema } from "../schema/bidder.zod";

export interface Bidder extends z.infer<typeof BidderSchema> {
  name: string;
  legalRepresentative: { name: string; position: string };
  address: string;
  phone: string;
  email: string;
  taxCode: string;
  bankAccount: BankAccount;
}
