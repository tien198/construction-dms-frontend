import { redirect, type ActionFunctionArgs } from "react-router";
import { create_bcktkt_store } from "../store/create-store";
import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { produce } from "immer";

export async function createBcktktAction(args: ActionFunctionArgs) {
  const conId = args.params["con-id"];
  const state = create_bcktkt_store.getState();
  const submission = produce(state.submission, (draft) => {
    draft.con_id = conId;
    draft.bid_package_snapshots = draft.bid_package_snapshots?.slice(2) ?? null;
  });

  const res = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(submission)),
  );

  if (!res.ok) {
    alert("Lỗi khi tạo tờ trình");
    return null;
  }

  return redirect(`/cong-trinh/bcktkt/${conId}/`);
}
