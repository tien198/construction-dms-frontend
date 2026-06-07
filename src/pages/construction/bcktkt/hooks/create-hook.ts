import { useFetcher, useParams } from "react-router";
import { create_bcktkt_store } from "../store/create-store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "@/api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "@/ultil/decision-to-submision-post";
import { useStore } from "zustand";
import { initialBidPackage } from "@/store-factory/initial-state";

export function useCreate() {
  const fetcher = useFetcher();
  const handleSubmit = () => {
    return fetcher.submit(null, {
      method: "post",
      encType: "application/json",
    });
  };

  const handleCancel = () => {
    //
  };

  const conId = useParams()["con-id"] as string;
  const { data } = useQuery({
    queryKey: ["kq-kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KQ_KH_LCNT"),
  });

  const storeApi = create_bcktkt_store;
  const setConstructionInfo = useStore(
    storeApi,
    (state) => state.setConstructionInfo,
  );

  const addBidPackage = useStore(storeApi, (state) => state.addBidPackage);

  useEffect(() => {
    if (!data) {
      return;
    }
    const tv_sub = decisionToSubmissionPost(data);
    if (tv_sub.construction_info_snapshot) {
      setConstructionInfo(tv_sub.construction_info_snapshot);
    }
    if (tv_sub.bid_package_snapshots) {
      const bp = tv_sub.bid_package_snapshots[0];
      addBidPackage(bp.type, bp);
    }

    const tt_sub = decisionToSubmissionPost(data, 1);
    if (tt_sub.bid_package_snapshots) {
      const bp = tt_sub.bid_package_snapshots[0];
      addBidPackage(bp.type, bp);
    }

    addBidPackage("TC", initialBidPackage("TC"));
  }, [data]);

  return {
    decision: data,
    handleSubmit,
    handleCancel,
    storeApi,
  };
}
