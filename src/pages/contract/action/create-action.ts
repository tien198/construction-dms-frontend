import { createContract } from "@/api/contract";
import { queryClient } from "@/tanstack-query-client";
import type { Contract } from "@/types/domain";
import type { ActionFunctionArgs } from "react-router";

export async function createAction(args: ActionFunctionArgs) {
  const contractData = Object.fromEntries(
    (await args.request.formData()).entries(),
  ) as unknown as Contract;

  const bid_package_id = new URL(args.request.url).searchParams.get(
    "bid_package_id",
  );
  try {
    await createContract(contractData);
    queryClient.invalidateQueries({
      queryKey: ["contract", bid_package_id],
    });
  } catch (error) {
    alert("Lỗi khi tạo hợp đồng");
  }

  return null;
}
