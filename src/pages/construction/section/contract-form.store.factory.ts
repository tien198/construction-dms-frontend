import { createStore } from "zustand";
import type { Contract } from "@/types/domain";
import { produce } from "immer";

const initialContract: Partial<Contract> = {
  id: null,
  bid_package_id: "",
  no: "",
  signing_date: undefined,
};

export type ContractFormStore = {
  contract: Partial<Contract>;
  setField: <K extends keyof Contract>(k: K, v: Partial<Contract>[K]) => void;
  reset: (init: Contract) => void;
};

export function contractFormStoreFactory(init?: Contract | null) {
  return createStore<ContractFormStore>((set) => ({
    contract: init ?? initialContract,
    setField: <K extends keyof Contract>(k: K, v: Partial<Contract>[K]) =>
      set(
        produce((draft: ContractFormStore) => {
          draft.contract[k] = v;
        }),
      ),
    reset: (init: Contract) => set({ contract: init ?? initialContract }),
  }));
}
