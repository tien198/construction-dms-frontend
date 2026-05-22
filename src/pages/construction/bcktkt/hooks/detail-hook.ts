import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { edit_bcktkt_store } from "../store/edit-store";
import { useParams } from "react-router";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";

export function useDetailFunc() {
  const params = useParams();
  const constructionId = params["con-id"] as string;

  const hasFetched = useRef(false);
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["bcktkt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "BCKTKT");
    },
    enabled: !hasFetched.current,
    retry: false,
  });

  const storeApi = edit_bcktkt_store;
  const reset = useStore(storeApi, (state) => state.reset);

  useEffect(() => {
    if (data) {
      const submission = decisionToSubmissionPost(data);
      reset("BCKTKT", submission);
    }
  }, [data]);

  if (isFetched) {
    hasFetched.current = true;
  }

  return {
    data,
    isLoading,
    storeApi,
    constructionId,
  };
}
