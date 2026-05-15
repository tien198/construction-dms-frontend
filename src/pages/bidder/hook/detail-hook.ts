import { getBidderByIdMock } from "@/mock-apis/bidder/bidder.api.mock";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useStore } from "zustand";
import { editBidderStore } from "../store/edit-bidder-store";

export function useDetail() {
  const id = useParams()["id"]!;
  const query = useQuery({
    queryKey: ["bidder", id],
    queryFn: () => getBidderByIdMock(id),
    enabled: !!id,
  });

  const resetBidderStore = useStore(editBidderStore, (state) => state.reset);
  useEffect(() => {
    if (query.data) {
      resetBidderStore(query.data);
    }
  }, [query.data, resetBidderStore]);

  return { query };
}
