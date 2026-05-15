import type { Bidder } from "@/types/domain/bidder.type";
import type { StoreApi } from "zustand";

export type BidderStore = {
  bidder: Bidder;
  setField: <K extends keyof Bidder>(field: K, value: Bidder[K]) => void;
  reset: (bidder?: Bidder) => void;
};

export type BidderStoreApi = StoreApi<BidderStore>;
