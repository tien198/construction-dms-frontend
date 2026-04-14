import { redirect, type ActionFunctionArgs } from "react-router";
import { create_construction_store } from "./create-store";
import {
  POST_ADD_SUBMISSION,
  POST_INIT_CONSTRUCTION,
} from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ConstructionIdResDto } from "./construction-id.res-dto";

export async function initConstructionAction(args: ActionFunctionArgs) {
  const state = create_construction_store.getState();
  const tv_sub = state.submission;
  const tt_sub = state.submission_tt;

  const initRes = await fetch(
    POST_INIT_CONSTRUCTION,
    genRequestInit(args.request.method, JSON.stringify(tv_sub)),
  );

  if (!initRes.ok) {
    alert("Lỗi khi tạo tờ trình");
    return null;
  }

  const conId = (await initRes.json()) as ConstructionIdResDto;
  //
  const tt_sub_with_con_id = { ...tt_sub, con_id: conId.value };
  const addSubmissionRes = await fetch(
    POST_ADD_SUBMISSION,
    genRequestInit(args.request.method, JSON.stringify(tt_sub_with_con_id)),
  );

  if (!addSubmissionRes.ok) {
    alert("Lỗi khi tạo tờ trình");
    return null;
  }

  return redirect(`/cong-trinh/tv-tt/${conId.value}`);
}
