import { type ActionFunctionArgs } from "react-router";
import {
  create_tt_store,
  create_tv_store,
} from "../store/create-submission-store";
import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import { produce } from "immer";
import { decision_store } from "../store/create-decision-store";
import type { ResResult } from "@/lib/type/response-result.tyoe";

type CreateActionResult = {
  isSuccess: boolean;
};
export async function createTvAction(
  args: ActionFunctionArgs,
): Promise<CreateActionResult> {
  const conId = args.params["con-id"];

  const tvSub = produce(create_tv_store.getState().submission, (draft) => {
    draft.con_id = conId!;
  });

  console.log(tvSub);
  // create TV first
  const tvRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tvSub)),
  );

  if (!tvRes.ok) {
    alert("Lỗi khi tạo tờ trình TV");
    return { isSuccess: false };
  }
  const res = (await tvRes.json()) as ResResult<string>;
  decision_store.getState().setField("id", res.result);

  return { isSuccess: true };
}

export async function createTtAction(
  args: ActionFunctionArgs,
): Promise<CreateActionResult> {
  const conId = args.params["con-id"];

  const ttSub = produce(create_tt_store.getState().submission, (draft) => {
    draft.con_id = conId!;
  });
  console.log(ttSub);

  const ttRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(ttSub)),
  );

  if (!ttRes.ok) {
    alert("Lỗi khi tạo tờ trình TT");
    return { isSuccess: false };
  }
  const res = (await ttRes.json()) as ResResult<string>;
  decision_store.getState().setField("id", res.result);

  return { isSuccess: true };
}
