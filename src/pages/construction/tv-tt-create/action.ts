import { redirect, type ActionFunctionArgs } from "react-router";
import { create_construction_store } from "./create-store";
import { POST_INIT_CONSTRUCTION } from "@/lib/api-list/document-api-list";
import { genRequestInit } from "@/lib/gen-request-init";
import type { ConstructionIdResDto } from "./construction-id.res-dto";

export async function initConstructionAction(args: ActionFunctionArgs) {
  const state = create_construction_store.getState();
  const tv_sub = state.submission;

  const initRes = await fetch(
    POST_INIT_CONSTRUCTION,
    genRequestInit(args.request.method, JSON.stringify(tv_sub)),
  );

  if (!initRes.ok) {
    alert("Lỗi khi tạo tờ trình");
    return null;
  }

  const conId = (await initRes.json()) as ConstructionIdResDto;

  return redirect(`/cong-trinh/tv-tt/${conId.value}`);
}
