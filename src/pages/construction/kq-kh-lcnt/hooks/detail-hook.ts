import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { edit_tv_store, edit_tt_store } from "../store/edit-store";
import { useParams } from "react-router";
import type { Decision } from "@/types/domain";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";
import type { ResResult } from "@/lib/type/response-result.tyoe";
import { decision_store } from "../store/create-decision-store";

export function useDetail() {
  const params = useParams();
  const constructionId = params["con-id"] as string;

  const hasFetched = useRef(false);
  const { data, isLoading, isFetched } = useQuery<
    ResResult<Decision | undefined>
  >({
    queryKey: ["kq-kh-lcnt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "KQ_KH_LCNT");
    },
    enabled: !hasFetched.current,
    retry: false,
  });

  const reset_decision = useStore(decision_store, (state) => state.reset);

  const reset_tv = useStore(edit_tv_store, (state) => state.reset);
  const reset_tt = useStore(edit_tt_store, (state) => state.reset);

  useEffect(() => {
    if (data?.result) {
      const tv_sub = decisionToSubmissionPost(data.result, 0);
      const tt_sub = decisionToSubmissionPost(data.result, 1);
      reset_tv("KQ_KH_LCNT", tv_sub);
      reset_tt("KQ_KH_LCNT", tt_sub);
      reset_decision(data.result);
    }
  }, [data]);

  if (isFetched) {
    hasFetched.current = true;
  }

  return {
    data,
    isLoading,
    constructionId,
  };
}
