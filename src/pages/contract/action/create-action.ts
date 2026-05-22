import { createContract } from "@/api/contract";
import type { Contract } from "@/types/domain";
import type { ActionFunctionArgs } from "react-router";

export async function createAction(args: ActionFunctionArgs) {
  const contractData = Object.fromEntries(
    (await args.request.formData()).entries(),
  ) as unknown as Contract;
  try {
    await createContract(contractData);
  } catch (error) {
    alert("Lỗi khi tạo hợp đồng");
  }

  return null;
}
