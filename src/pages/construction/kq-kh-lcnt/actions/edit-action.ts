import { type ActionFunctionArgs } from "react-router";
import { edit_tv_store, edit_tt_store } from "../store/edit-store";
import { PUT_EDIT_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { queryClient } from "@/tanstack-query-client";

export async function editTvAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];

  const tvSub = edit_tv_store.getState().submission;

  console.log("tv", tvSub);

  const tvRes = await fetch(
    PUT_EDIT_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tvSub)),
  );

  if (!tvRes.ok) {
    alert("Lỗi khi sửa tờ trình TV");
    return null;
  }

  // queryClient.invalidateQueries({ queryKey: ["kq-kh-lcnt", conId] });

  return;
}

export async function editTtAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];
  const ttSub = edit_tt_store.getState().submission;

  console.log("tt", ttSub);

  const ttRes = await fetch(
    PUT_EDIT_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );

  if (!ttRes.ok) {
    alert("Lỗi khi sửa tờ trình TV");
    return null;
  }

  // queryClient.invalidateQueries({ queryKey: ["kq-kh-lcnt", conId] });

  return;
}
