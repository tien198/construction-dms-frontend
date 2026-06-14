import type { Bidder } from "@/types/domain/bidder.type";
import type { BidderStore } from "./bidder.store.type";
import { createStore, type StoreApi } from "zustand";
import { produce } from "immer";

const initial: Bidder = {
  id: null,
  name: "",
  address: "",
  representative_name: "",
  representative_position: "",
  bank_account_number: "",
  bank_name: "Sacombank",
  bank_branch: "Vũng Tàu",
  tax_id: "",
  phone_number: "",
  email: "",
};

export const bidderStoreFactory = (): StoreApi<BidderStore> => {
  return createStore<BidderStore>((set) => ({
    bidder: initial,

    setField: (field, value) =>
      set((state) =>
        produce(state, (draft) => {
          draft.bidder[field] = value;
        }),
      ),

    reset: (bidder = initial) => set({ bidder }),
  }));
};
