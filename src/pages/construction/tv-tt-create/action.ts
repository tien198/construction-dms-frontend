import { redirect, type ActionFunctionArgs } from "react-router";
import { create_construction_store } from "./create-store";
import { POST_INIT_CONSTRUCTION } from "@/lib/api-list/document-api-list";

export async function initConstructionAction(args: ActionFunctionArgs) {
  const state = create_construction_store.getState();
  const tv_sub = state.submission;
  const tt_sub = state.submission_tt;

  const initFunc = fetch(
    POST_INIT_CONSTRUCTION,
    genRequestInit(args.request.method, JSON.stringify(tv_sub)),
  );

  const addSubmisionFunc = fetch(
    import.meta.env.VITE_API_URL + "/document/add-submission",
    genRequestInit(args.request.method, JSON.stringify(tt_sub)),
  );

  const [initRes, addSubmissionRes] = await Promise.all([
    initFunc,
    addSubmisionFunc,
  ]);

  if (!initRes.ok) {
    console.error("Failed to initialize construction");
    return redirect("/cong-trinh/tao-moi");
  }

  if (!addSubmissionRes.ok) {
    console.error("Failed to add submission");
    return redirect("/cong-trinh/tao-moi");
  }

  return redirect("/");
}

function genRequestInit(method: string, bodyStr: string): RequestInit {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyStr,
  };
}
