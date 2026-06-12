import { redirect, type ActionFunctionArgs } from "react-router";
import { edit_tv_tt_store } from "./edit-store";
import { PUT_EDIT_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";

export async function editAction(args: ActionFunctionArgs) {
  const state = edit_tv_tt_store.getState();
  const tv_sub = state.submission;

  const res = await fetch(
    PUT_EDIT_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tv_sub)),
  );

  if (!res.ok) {
    alert("Lỗi khi cập nhật tờ trình");
    return null;
  }
  const conId = args.params["con-id"];
  return redirect(`/cong-trinh/kh-lcnt/${conId}/`);
}
