import { redirect, type ActionFunctionArgs } from "react-router";
import { edit_tv_store, edit_tt_store } from "../store/edit-store";
import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
// import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";

export async function editTvAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];

  const tvSub = edit_tv_store.getState().submission;

  // create TV first
  const tvRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tvSub)),
  );

  if (!tvRes.ok) {
    alert("Lỗi khi tạo tờ trình TV");
    return null;
  }

  return redirect(`/cong-trinh/kq-kh-lcnt/${conId}`);
}

export async function editTtAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];
  const ttSub = edit_tt_store.getState().submission;

  // create TV first
  const ttRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );

  if (!ttRes.ok) {
    alert("Lỗi khi tạo tờ trình TV");
    return null;
  }

  return redirect(`/cong-trinh/kq-kh-lcnt/${conId}`);
}
