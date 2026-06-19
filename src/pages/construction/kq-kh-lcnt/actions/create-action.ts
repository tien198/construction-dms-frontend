import { type ActionFunctionArgs } from "react-router";
import { tt_store } from "../store/create-submission-store";
import { tv_store } from "../store/create-submission-store";
import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { produce } from "immer";

type CreateActionResult = {
  isSuccess: boolean;
};
export async function createTvAction(
  args: ActionFunctionArgs,
): Promise<CreateActionResult> {
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
    return { isSuccess: false };
  }
  return { isSuccess: true };
}

export async function createTtAction(
  args: ActionFunctionArgs,
): Promise<CreateActionResult> {
  const conId = args.params["con-id"];

  const ttSub = produce(tt_store.getState().submission, (draft) => {
    draft.con_id = conId!;
  });
  console.log(ttSub);

  const ttRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );
  console.log(ttRes);

  if (!ttRes.ok) {
    alert("Lỗi khi tạo tờ trình TT");
    return { isSuccess: false };
  }
  return { isSuccess: true };
}
