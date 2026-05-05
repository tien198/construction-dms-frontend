import type { ActionFunctionArgs } from "react-router";
import { edit_kq_kh_lcnt_store } from "../store/edit-store";

export function editKqKhLcntAction(args: ActionFunctionArgs) {
  const state = edit_kq_kh_lcnt_store.getState();
  const submission = state.submission;
  console.log(submission, args);

  return null;
}
