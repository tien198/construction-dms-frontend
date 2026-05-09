import { useFetcher, useParams } from "react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { tt_store, tv_store } from "../store/create-submission-store";

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

  // query data from previous period decision
  const conId = useParams()["con-id"] as string;
  const queryResult = useQuery({
    queryKey: ["kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KH_LCNT"),
    retry: false,
  });

  const tv_store_api = tv_store;
  const tt_store_api = tt_store;

  useEffect(() => {
    if (queryResult.data?.result) {
      const subPost = decisionToSubmissionPost(queryResult.data.result);
      const tv =
        subPost.bid_package_snapshots?.find((it) => it.type === "TV") ?? null;
      const tt =
        subPost.bid_package_snapshots?.find((it) => it.type === "TT") ?? null;

      tv_store_api.getState().addBidPackage("TV", tv);
      tt_store_api.getState().addBidPackage("TT", tt);
    }
  }, [queryResult.data?.result]);

  return {
    queryResult,
    handleSubmit,
    handleCancel,
    tv_store_api,
    tt_store_api,
  };
}
