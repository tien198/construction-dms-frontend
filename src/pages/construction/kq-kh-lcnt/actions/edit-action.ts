import type { ActionFunctionArgs } from "react-router";
import { edit_tv_store, edit_tt_store } from "../store/edit-store";
// import { POST_ADD_SUBMISSION } from "@/lib/api-list/document-api-list";

export async function editKqKhLcntAction(args: ActionFunctionArgs) {
  // const conId = args.params["con-id"];

  const tv_state = edit_tv_store.getState();
  const tt_state = edit_tt_store.getState();
  const submission = { ...tv_state.submission, ...tt_state.submission };
  console.log(submission, args);

  return null;
}
