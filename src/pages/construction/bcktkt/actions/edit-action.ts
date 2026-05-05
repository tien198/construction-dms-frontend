import type { ActionFunctionArgs } from "react-router";
import { edit_bcktkt_store } from "../store/edit-store";

export function editBcktktAction(args: ActionFunctionArgs) {
  const state = edit_bcktkt_store.getState();
  const submission = state.submission;
  console.log(submission, args);

  return null;
}
