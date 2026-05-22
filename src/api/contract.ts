import { CONTRACT } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ResResult } from "@/lib/type/response-result.tyoe";
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
  const res = await fetch(`${CONTRACT}?bid_package_id=${bidPackageId}`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch contract with bid package id: "${bidPackageId}"`,
    );
  }
  const { result } = (await res.json()) as ResResult<Contract>;
  if (!result) {
    throw new Error(
      `Contract with bid package id: "${bidPackageId}" is not found`,
    );
  }
  return result;
}

export async function updateContract(id: string, data: Contract) {
  const res = await fetch(
    `${CONTRACT}/${id}`,
    genRequestInit("put", JSON.stringify(data)),
  );
  if (!res.ok) {
    throw new Error(`Failed to update contract with id: "${id}"`);
  }
  const { result } = (await res.json()) as ResResult<Contract>;
  return result;
}

export async function createContract(data: Contract) {
  const res = await fetch(
    CONTRACT,
    genRequestInit("post", JSON.stringify(data)),
  );
  if (!res.ok) {
    throw new Error(`Failed to create contract`);
  }
  const { result } = (await res.json()) as ResResult<Contract>;
  return result;
}
