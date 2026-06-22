import { useFetcher, useNavigate, useParams } from "react-router";
import { create_bcktkt_store } from "../store/create-store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "@/api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "@/ultil/decision-to-submision-post";
import { useStore } from "zustand";
import { initialBidPackage } from "@/store-factory/initial-state";
import { isCreatingStore } from "../Detail";
import { queryClient } from "@/tanstack-query-client";

export function useCreate() {
  const fetcher = useFetcher();
  const nav = useNavigate();
  const handleSubmit = async () => {
    isCreatingStore.getState().toggleIsCreating(false);

    await fetcher.submit(null, {
      method: "post",
      encType: "application/json",
    });
    await queryClient.invalidateQueries({
      queryKey: ["bcktkt", conId],
    });
  };

  const handleCancel = () => {
    isCreatingStore.getState().toggleIsCreating();
    nav(-1);
  };

  const conId = useParams()["con-id"] as string;
  const { data, dataUpdatedAt } = useQuery({
    queryKey: ["kq-kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KQ_KH_LCNT"),
    retry: false,
  });

  const storeApi = create_bcktkt_store;
  const setConstructionInfo = useStore(
    storeApi,
    (state) => state.setConstructionInfo,
  );

  const addBidPackage = useStore(storeApi, (state) => state.addBidPackage);

  useEffect(() => {
    if (!data && dataUpdatedAt > 0) {
      alert("Tạo QĐ KQ_KH_LCNT trước khi tạo BCKTKT");
      isCreatingStore.getState().toggleIsCreating(false);
      nav(`/cong-trinh/kq-kh-lcnt/${conId}`);
      return;
    } else if (data && data.submissions?.length < 2) {
      alert("QĐ KQ_KH_LCNT phải có đủ 2 TTr trước khi tạo BCKTKT");
      isCreatingStore.getState().toggleIsCreating(false);
      nav(`/cong-trinh/kq-kh-lcnt/${conId}`);
      return;
    }
  }, []);

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
