import { redirect, type ActionFunctionArgs } from "react-router";
import { createBidderStore } from "../store/create-bidder-store";
import { BIDDER } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Bidder } from "@/types/domain";

export async function createAction(args: ActionFunctionArgs) {
  const bidder = createBidderStore.getState().bidder;
  const res = await fetch(
    BIDDER,
    genRequestInit(args.request.method, JSON.stringify(bidder)),
  );

  if (!res.ok) {
    alert("Lỗi khi tạo nhà thầu");
    return null;
  }
  const createdBidder = (await res.json()) as ResResult<Bidder>;

  return redirect(`/nha-thau/${createdBidder.result!.id}`);
}
