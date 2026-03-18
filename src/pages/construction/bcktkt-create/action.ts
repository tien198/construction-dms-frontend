import type { ActionFunctionArgs } from "react-router";
import { create_bcktkt_store } from "./create-store";

export function initBcktktAction(args: ActionFunctionArgs) {
  const state = create_bcktkt_store.getState();
  const submission = state.submission;
  console.log(submission, args);

  return null;
}
