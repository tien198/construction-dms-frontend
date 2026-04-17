import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { edit_bcktkt_store } from "../store/edit-store";
import { useParams } from "react-router";
import type { Decision } from "@/types";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../ultil/decision-to-submision-post";
import { getDecisionByPer } from "../../api/get-decision-by-per.api";
import type { ResResult } from "@/lib/type/response-result.tyoe";

export function useDetailFunc() {
  const params = useParams();
  const constructionId = params["con-id"] as string;

  const { data, isLoading } = useQuery<ResResult<Decision | undefined>>({
    queryKey: ["bcktkt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "BCKTKT");
    },
  });

  const storeApi = edit_bcktkt_store;
  const reset = useStore(storeApi, (state) => state.reset);

  useEffect(() => {
    if (data?.result) {
      const submission = decisionToSubmissionPost(data.result);
      reset("BCKTKT", submission);
    }
  }, [data]);

  return {
    data,
    isLoading,
    storeApi,
    constructionId,
  };
}
