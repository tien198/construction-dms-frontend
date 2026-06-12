import { redirect, type ActionFunctionArgs } from "react-router";
import { tt_store } from "../store/create-submission-store";
import { tv_store } from "../store/create-submission-store";
import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { produce } from "immer";

export async function createKqKhLcntAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];

  const tvSub = produce(tv_store.getState().submission, (draft) => {
    draft.con_id = conId!;
  });

  // create TV first
  const tvRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tvSub)),
  );

  if (!tvRes.ok) {
    alert("Lỗi khi tạo tờ trình TV");
    return null;
  }

  // then, get decision_id, create TT according existing decision
  const decId = (await tvRes.json()).value as string;

  const ttSub = produce(tt_store.getState().submission, (draft) => {
    draft.directly_decision.id = decId;
    draft.con_id = conId!;
  });

  const ttRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );

  if (!tvRes.ok || !ttRes.ok) {
    alert("Lỗi khi tạo 2 tờ trình");
    return null;
  }

  return redirect(`/cong-trinh/kq-kh-lcnt/${conId}/`);
}
