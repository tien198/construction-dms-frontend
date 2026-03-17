import { redirect, type ActionFunctionArgs } from "react-router";
import {} from "../store-factory/create-submission.store";
import { create_construction_store } from "./create-store";

export function initConstructionAction(args: ActionFunctionArgs) {
  const state = create_construction_store.getState();
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
