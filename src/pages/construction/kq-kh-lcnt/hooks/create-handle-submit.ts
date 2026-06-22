import { useCallback, useEffect, useState } from "react";
import { useFetcher, useNavigate, useParams } from "react-router";

import { queryClient } from "@/tanstack-query-client";
import { isCreatingStore } from "../Detail";

export function useHandleSubmit() {
  const [isTvCreating, setIsTvCreating] = useState(true);
  const [isTtCreating, setIsTtCreating] = useState(true);

  const conId = useParams()["con-id"] as string;
  const fetcher = useFetcher();

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

  const nav = useNavigate();

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

  const handleCancel = () => {
    isCreatingStore.getState().toggleIsCreating(false);
    nav("..", { relative: "path" });
  };

  return {
    handleSubmitTv,
    handleSubmitTt,
    handleCancel,
    isTvCreating,
    isTtCreating,
    setIsTvCreating,
    setIsTtCreating,
  };
}
