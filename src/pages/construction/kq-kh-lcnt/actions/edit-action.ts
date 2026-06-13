import { type ActionFunctionArgs } from "react-router";
import { edit_tv_store, edit_tt_store } from "../store/edit-store";
import { PUT_EDIT_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { decision_store } from "../store/create-decision-store";

export async function editTvAction(args: ActionFunctionArgs) {
  const tvSub = edit_tv_store.getState().submission;
  const { isEdit: isDecEdit, resetIsEdit: resetIsDecEdit } =
    decision_store.getState();

  const searchQuery = isDecEdit ? "?isDecEdit=true" : "";
  console.log("tv", tvSub);

  const tvRes = await fetch(
    PUT_EDIT_SUBMISSION + searchQuery,
    genRequestInit(args.request.method, JSON.stringify(tvSub)),
  );

  if (!tvRes.ok) {
    alert("Lỗi khi sửa tờ trình TV");
    return null;
  }

  resetIsDecEdit();

  // queryClient.invalidateQueries({ queryKey: ["kq-kh-lcnt", conId] });

  return;
}

export async function editTtAction(args: ActionFunctionArgs) {
  const ttSub = edit_tt_store.getState().submission;

  const { isEdit: isDecEdit, resetIsEdit: resetIsDecEdit } =
    decision_store.getState();

  const searchQuery = isDecEdit ? "?isDecEdit=true" : "";
  console.log("tt", ttSub);

  const ttRes = await fetch(
    PUT_EDIT_SUBMISSION + searchQuery,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );

  if (!ttRes.ok) {
    alert("Lỗi khi sửa tờ trình TV");
    return null;
  }

  resetIsDecEdit();

  // queryClient.invalidateQueries({ queryKey: ["kq-kh-lcnt", conId] });

  return;
}
