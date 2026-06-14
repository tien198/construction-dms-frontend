import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Bidder } from "@/types/domain/bidder.type";

export async function getBiddersListMock(): Promise<ResResult<Bidder[]>> {
  return {
    result: [
      {
        id: "019e29b2-0daf-74ea-83dd-bd208155a153",
        name: "Tien đẹp trai",
        address: "TP. Hồ Chí Minh",
        representative_name: "Tien",
        representative_position: "Giám đốc",
        bank_account_number: "123456789",
        bank_name: "Sacombank",
        bank_branch: "Vũng Tàu",
        tax_id: "123456789",
        phone_number: "123456789",
        email: "tienvn998@gmail.com",
      },
    ],
  };
}

export async function getBidderByIdMock(
  id: string,
): Promise<ResResult<Bidder | null>> {
  const bidder = (await getBiddersListMock()).result.find(
    (bidder) => bidder.id === id,
  );
  return { result: bidder ?? null };
}

export async function createBidderMock(bidder: Omit<Bidder, "id">) {
  return {
    id: "019e29b2-0daf-74ea-83dd-bd208155a153",
    ...bidder,
  };
}

export async function updateBidderMock(id: string, bidder: Omit<Bidder, "id">) {
  return {
    id,
    ...bidder,
  };
}
