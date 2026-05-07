import { useFetcher, useParams } from "react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { create_kq_kh_lcnt_store } from "../store/create-store";

export function useCreate() {
  const fetcher = useFetcher();
  const handleSubmit = () => {
    return fetcher.submit(null, {
      method: "post",
      encType: "application/json",
      action: "tao-moi",
    });
  };

  const handleCancel = () => {
    //
  };

  // query data from previous period decision
  const conId = useParams()["con-id"] as string;
  const { data } = useQuery({
    queryKey: ["kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KH_LCNT"),
  });

  const storeApi = create_kq_kh_lcnt_store;

  useEffect(() => {
    if (data?.result) {
      storeApi
        .getState()
        .setConstructionInfo(
          decisionToSubmissionPost(data.result).construction_info_snapshot!,
        );
    }
  }, [data?.result]);

  return {
    handleSubmit,
    handleCancel,
    storeApi,
  };
}
