import { redirect, type ActionFunctionArgs } from "react-router";
import { createSubmission_store } from "./store/create-submission.store";

export function initConstructionAction(args: ActionFunctionArgs) {
  const state = createSubmission_store.getState();
  const tv_sub = state.submission;
  const tt_sub = state.submission_tt;
  args;
  console.log("ACTION_RUNNING_V2");
  console.log("tv_sub", tv_sub);
  console.log("tt_sub", tt_sub);
  return redirect("/");
}
