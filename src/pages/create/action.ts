import { redirect, type ActionFunctionArgs } from "react-router";
import { createSubmission_store } from "./store/create-submission.store";

export function initConstructionAction(args: ActionFunctionArgs) {
  const state = createSubmission_store.getState();
  const tv_sub = state.submission;
  const tt_sub = state.submission_tt;

  const init = {
    tv_sub,
    tt_sub,
  };

  console.log("tv_sub", tv_sub);
  console.log("tt_sub", tt_sub);
  console.log(init);
  args;
  return redirect("/");
}
