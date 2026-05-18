import { redirect, type ActionFunctionArgs } from "react-router";
import { BIDDER } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import type { Bidder } from "@/types/domain";
import { editBidderStore } from "../store/edit-bidder-store";
import { queryClient } from "@/tanstack-query-client";

export async function editAction(args: ActionFunctionArgs) {
  const bidder = editBidderStore.getState().bidder;

  const res = await fetch(
    BIDDER + "/" + bidder.id,
    genRequestInit(args.request.method, JSON.stringify(bidder)),
  );

  if (!res.ok) {
    alert("Lỗi khi cập nhật nhà thầu");
    return null;
  }
  const result = (await res.json()) as ResResult<Bidder>;
  const updatedBidder = result.result;

  queryClient.invalidateQueries({ queryKey: ["bidders"] });
  queryClient.invalidateQueries({ queryKey: ["bidder", updatedBidder?.id] });

  return redirect(`/nha-thau/${updatedBidder.id}`);
}
