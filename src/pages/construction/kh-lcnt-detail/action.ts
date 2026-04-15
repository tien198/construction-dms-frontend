import type { ActionFunctionArgs } from "react-router";
import { edit_tv_tt_store } from "./edit-store";

export async function editAction(args: ActionFunctionArgs) {
  const state = edit_tv_tt_store.getState();
  const tv_sub = state.submission;
  const init = {
    tv_sub,
    args,
  };

  console.log("init", init);
  return null;
}
