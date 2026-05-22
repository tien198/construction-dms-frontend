import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Contract } from "@/types/domain";

export async function mockGetContractByBidPackageId(
  bidPackageId: string,
): Promise<ResResult<Contract>> {
  // await new Promise((resolve) => resolve);

  return {
    result: {
      id: "contract-1",
      bid_package_id: bidPackageId,
      no: "contract-1",
      signing_date: "2022-12-21",
    },
  };
}
