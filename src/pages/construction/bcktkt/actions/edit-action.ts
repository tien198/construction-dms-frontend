import type { ActionFunctionArgs } from "react-router";
import { edit_bcktkt_store } from "../store/edit-store";
import { PUT_EDIT_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { produce } from "immer";

export async function editBcktktAction(args: ActionFunctionArgs) {
  const state = edit_bcktkt_store.getState();
  const submission = produce(state.submission!, (draft) => {
    draft.bid_package_snapshots =
      draft.bid_package_snapshots?.filter(
        (snapshot) => snapshot.type === "TC",
      ) ?? null;
  });
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
