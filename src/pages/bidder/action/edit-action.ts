import { redirect, type ActionFunctionArgs } from "react-router";
import { BIDDER } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Bidder } from "@/types/domain";
import { editBidderStore } from "../store/edit-bidder-store";

export async function editAction(args: ActionFunctionArgs) {
  const bidder = editBidderStore.getState().bidder;

  const res = await fetch(
    BIDDER,
    genRequestInit(args.request.method, JSON.stringify(bidder)),
  );

  if (!res.ok) {
    alert("Lỗi khi cập nhật nhà thầu");
    return null;
  }
  const updatedBidder = (await res.json()) as ResResult<Bidder>;

  return redirect(`/nha-thau/${updatedBidder.result!.id}`);
}
