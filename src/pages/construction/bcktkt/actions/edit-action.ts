import type { ActionFunctionArgs } from "react-router";
import { edit_bcktkt_store } from "../store/edit-store";
import { PUT_EDIT_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";

export async function editBcktktAction(args: ActionFunctionArgs) {
  const state = edit_bcktkt_store.getState();
  const submission = state.submission;
  console.log(submission, args);

  const res = await fetch(
    PUT_EDIT_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(submission)),
  );

  if (!res.ok) {
    alert("Lỗi khi sửa tờ trình BCKTKT");
    return null;
  }

  // queryClient.invalidateQueries({ queryKey: ["kq-kh-lcnt", conId] });

  return;
}
