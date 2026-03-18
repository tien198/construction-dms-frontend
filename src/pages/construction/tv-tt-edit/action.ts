import type { ActionFunctionArgs } from "react-router";
import { edit_submission_store } from "./edit-store";

export async function editAction(args: ActionFunctionArgs) {
  const state = edit_submission_store.getState();
  const tv_sub = state.submission;
  const tt_sub = state.submission_tt;
  const init = {
    tv_sub,
    tt_sub,
    args,
  };

  console.log("init", init);
  return null;
}
