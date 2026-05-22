import { CONTRACT } from "@/lib/api-list/document-api-list";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import { mockGetContractByBidPackageId } from "@/mock-apis/get-contract";
import type { Contract } from "@/types/domain";

export async function getContractsList() {
  const res = await fetch(CONTRACT);
  if (!res.ok) {
    throw new Error(`Failed to fetch contract`);
  }
  const { result } = (await res.json()) as ResResult<Contract[]>;
  return result;
}

export async function getContractByBidPackageId(bidPackageId: string) {
  const { result } = await mockGetContractByBidPackageId(bidPackageId);
  return result;

  // const res = await fetch(`${CONTRACT}?bid_package_id=${bidPackageId}`);
  // if (!res.ok) {
  //   throw new Error(
  //     `Failed to fetch contract with bid package id: "${bidPackageId}"`,
  //   );
  // }
  // const { result } = (await res.json()) as ResResult<Contract>;
  // if (!result) {
  //   throw new Error(
  //     `Contract with bid package id: "${bidPackageId}" is not found`,
  //   );
  // }
  // return result;
}
