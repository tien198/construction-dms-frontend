import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  edit_tv_store as tv_store_api,
  edit_tt_store as tt_store_api,
} from "../store/edit-store";
import { useParams } from "react-router";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";
import { decision_store } from "../store/create-decision-store";

export function useDetail() {
  const params = useParams();
  const constructionId = params["con-id"] as string;

  const hasFetched = useRef(false);
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["kq-kh-lcnt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "KQ_KH_LCNT");
    },
    enabled: !hasFetched.current,
    retry: false,
  });

  const reset_decision = useStore(decision_store, (state) => state.reset);

  useEffect(() => {
    // if there is not enongh 2 sumbission, redirect to create page
    if (data && data.submissions.length === 2) {
      const tv_sub = decisionToSubmissionPost(data, 0);
      const tt_sub = decisionToSubmissionPost(data, 1);
      tv_store_api.getState().setAdministrative(data.submissions[0]);
      tt_store_api.getState().setAdministrative(data.submissions[1]);
      tv_store_api
        .getState()
        .addBidPackage("TC", tv_sub.bid_package_snapshots?.[0] ?? null);
      tt_store_api
        .getState()
        .addBidPackage("TT", tt_sub.bid_package_snapshots?.[0] ?? null);
      reset_decision(data);
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
