import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { edit_bcktkt_store } from "../store/edit-store";
import { useParams } from "react-router";
import type { Decision } from "@/types";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../tv-tt-detail/ultil/decision-to-submision-post";
import { getDecisionByPer } from "../../api/get-decision-by-per.api";

export function useDetailFunc() {
  const params = useParams();
  const constructionId = params["id"] as string;

  const { data, isLoading } = useQuery<Decision | undefined>({
    queryKey: ["bcktkt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "BCKTKT");
    },
  });

  const storeApi = edit_bcktkt_store;
  const reset = useStore(storeApi, (state) => state.reset);

  useEffect(() => {
    if (data) {
      const submission = decisionToSubmissionPost(data);
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
