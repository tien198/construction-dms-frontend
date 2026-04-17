import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { edit_tv_tt_store } from "../edit-store";
import { useParams, useSubmit } from "react-router";
import type { Decision } from "@/types";
import { getDecisionByPer } from "../../api/get-decision-by-per.api";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../ultil/decision-to-submision-post";
import type { SubmissionPost } from "../../types/submission-post.type";
import type { ResResult } from "@/lib/type/response-result.tyoe";

export function useDetail() {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit;
  const params = useParams();
  const conId = params["con-id"] as string;
  const { data, isLoading } = useQuery<ResResult<Decision | undefined>>({
    queryKey: ["kh-lcnt", conId],
    queryFn: async () => getDecisionByPer(conId, "KH_LCNT"),
  });

  const storeApi = edit_tv_tt_store;
  const reset = useStore(storeApi, (state) => state.reset);
  const khDec = data?.result;

  let khSubmission: SubmissionPost | undefined;
  if (khDec) {
    khSubmission = decisionToSubmissionPost(khDec);
  }

  useEffect(() => {
    if (khSubmission) reset("KH_LCNT", khSubmission);
  });

  const isEditToggle = () => {
    if (isEdit) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        setIsEdit((prev) => !prev);
        storeApi.getState().reset("KH_LCNT", khSubmission);
      }
    } else {
      setIsEdit((prev) => !prev);
    }
  };

  const submit = useSubmit();

  return {
    conId,
    isLoading,
    data,
    isEdit,
    setIsEdit,
    isEditToggle,
    disabled,
    submit,
    storeApi,
  };
}
