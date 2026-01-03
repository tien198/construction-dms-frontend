export interface BidderDto {
  name: string;
  legalRepresentative: { name: string; position: string };
  address: string;
  phone: string;
  email: string;
  taxCode: string;
  bankAccount: {
    accountNumber: string;
    bankName: string;
    branch: string;
  };
}
