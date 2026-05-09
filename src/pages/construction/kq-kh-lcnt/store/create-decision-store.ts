import type { AdministrativeDocument } from "@/types/domain/administrative-document.type";
import { createStore } from "zustand";
import { produce } from "immer";

interface DecisionStore {
  decision: AdministrativeDocument;
  setField: <K extends keyof AdministrativeDocument>(
    field: K,
    value: AdministrativeDocument[K],
  ) => void;
}

const initialState: AdministrativeDocument = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct: null,
  pursuant_to_dec_ttmn: null,
};

export const decision_store = createStore<DecisionStore>((set) => ({
  decision: initialState,
  setField: (field, value) =>
    set(
      produce((state: DecisionStore) => {
        state.decision[field] = value;
      }),
    ),
}));
