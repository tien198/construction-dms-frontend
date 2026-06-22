import { useBlocker, useFetcher, useNavigate, useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "../../../../api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import {
  create_tt_store as tt_store_api,
  create_tv_store as tv_store_api,
} from "../store/create-submission-store";
import { decision_store } from "../store/create-decision-store";
import type {
  AdministrativeDocument,
  BidPackageSnapshot,
  Decision,
} from "@/types/domain";
import { isCreatingStore } from "../Detail";
import { queryClient } from "@/tanstack-query-client";

export function useCreate() {
  const fetcher = useFetcher();
  const conId = useParams()["con-id"] as string;

  const [isTvCreating, setIsTvCreating] = useState(true);
  const [isTtCreating, setIsTtCreating] = useState(true);

  const handleSubmitTv = async () => {
    await fetcher.submit(null, {
      method: "post",
      action: `tv`,
    });
    setIsTvCreating(false);
  };

  const handleSubmitTt = async () => {
    await fetcher.submit(null, {
      method: "post",
      action: `tt`,
    });
    setIsTtCreating(false);
  };

  const invalidateKQ = useCallback(
    async (cb: Function) => {
      await queryClient.invalidateQueries({
        queryKey: ["kq-kh-lcnt", conId],
      });
      cb();
    },
    [conId, queryClient],
  );

  useEffect(() => {
    // action return truthy (success) and falsy (failed)
    if (fetcher.data) {
      if (!isTvCreating && !isTtCreating) {
        isCreatingStore.getState().toggleIsCreating(false);
        invalidateKQ(() => {
          nav("..", { relative: "route" });
        });
      }
    }
  }, [fetcher.data, isTvCreating, isTtCreating]);

  const nav = useNavigate();
  const handleCancel = () => {
    isCreatingStore.getState().toggleIsCreating(false);
    nav("..", { relative: "path" });
  };

  const blocker = useBlocker(
    ({ nextLocation }) => nextLocation.pathname === "/",
  );
  useEffect(() => {
    if (blocker.state === "blocked") {
      isCreatingStore.getState().toggleIsCreating(false);
      blocker.proceed();
    }
  }, [blocker.state]);

  // data has beean fetched in Detail page
  const { data: KQ } = useQuery<Decision | null>({
    queryKey: ["kq-kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KQ_KH_LCNT"),
    retry: false,
  });

  // query data from previous period decision
  const queryResult = useQuery<Decision | null>({
    queryKey: ["kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KH_LCNT"),
    retry: false,
  });

  useEffect(() => {
    let tv: BidPackageSnapshot | null = null;
    let tt: BidPackageSnapshot | null = null;
    let initialDecision: Partial<AdministrativeDocument> = {};
    if (!KQ && !queryResult.data) {
      return;
    }

    if (KQ) {
      const tv_sub = KQ.submissions.find(
        (sub) => sub.bid_package_snapshots?.[0].type === "TV",
      );
      tv = tv_sub?.bid_package_snapshots?.[0] ?? null;

      const tt_sub = KQ.submissions.find(
        (sub) => sub.bid_package_snapshots?.[0].type === "TT",
      );
      tt = tt_sub?.bid_package_snapshots?.[0] ?? null;
      if (!tv_sub) {
        setIsTvCreating(true);
      }
      if (!tt_sub) {
        setIsTtCreating(true);
      }

      if (tv_sub) {
        tv_store_api
          .getState()
          .addBidPackage("TV", tv_sub.bid_package_snapshots?.[0] ?? null);
        tv_store_api.getState().setAdministrative(tv_sub);
        setIsTvCreating(false);
      }
      if (tt_sub) {
        tt_store_api
          .getState()
          .addBidPackage("TT", tt_sub.bid_package_snapshots?.[0] ?? null);
        tt_store_api.getState().setAdministrative(tt_sub);
        setIsTtCreating(false);
      }

      initialDecision = {
        id: KQ.id,
        no: KQ.no,
        level: KQ.level,
        date: KQ.date,
        pursuant_to_dec_tct: KQ.pursuant_to_dec_tct,
        pursuant_to_dec_ttmn: KQ.pursuant_to_dec_ttmn,
      };
    }
    //
    if (queryResult.data) {
      const kh_lcnt_submission = decisionToSubmissionPost(queryResult.data);
      tv = tv ?? kh_lcnt_submission.bid_package_snapshots?.[0] ?? null;
      tt = tt ?? kh_lcnt_submission.bid_package_snapshots?.[1] ?? null;

      // Both tv and tt are belong to the same decision,
      // So that, merge them into one state to avoid duplicate re-render.
      if (!KQ) {
        initialDecision = {
          pursuant_to_dec_tct: queryResult.data.pursuant_to_dec_tct,
          pursuant_to_dec_ttmn: queryResult.data.pursuant_to_dec_ttmn,
        };
      }
    }

    tv_store_api.getState().addBidPackage("TV", tv);
    tt_store_api.getState().addBidPackage("TT", tt);

    decision_store.getState().reset(initialDecision);
  }, [KQ, queryResult.data]);

  useEffect(() => {
    isCreatingStore.getState().toggleIsCreating(true);
  }, []);

  return {
    // queryResult is KH_LCNT decision (previous period)
    queryResult,
    handleSubmitTv,
    handleSubmitTt,
    handleCancel,
    isTvCreating,
    isTtCreating,
    setIsTvCreating,
    setIsTtCreating,
  };
}
