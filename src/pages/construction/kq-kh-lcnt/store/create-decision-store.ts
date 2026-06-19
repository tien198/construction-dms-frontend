import type { AdministrativeDocument } from "@/types/domain/decision/administrative-document.type";
import { createStore } from "zustand";
import { produce } from "immer";
import type { CreateSubmissionStore } from "@/store-factory/create-submission.store.type";
import type { RecursivePath } from "@/lib/type/recursion";
import { setValueByPath } from "@/lib/setValByPath";

import { create_tt_store, create_tv_store } from "./create-submission-store";
import { edit_tt_store, edit_tv_store } from "./edit-store";

export interface CreateDecisionStore {
  isEdit: boolean;
  decision: AdministrativeDocument;
  setField: <K extends RecursivePath<AdministrativeDocument>>(
    fieldPath: K,
    value: any,
  ) => void;
  reset: (decision: Partial<AdministrativeDocument>) => void;
  resetIsEdit: () => void;
}

const initialState: AdministrativeDocument = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct: null,
  pursuant_to_dec_ttmn: null,
};

// used for both create and edit ( we will not create if it exist already )
export const decision_store = createStore<CreateDecisionStore>((set) => ({
  isEdit: false,
  decision: initialState,
  setField: (fieldPath, value) =>
    set((state) => ({
      ...state,
      decision: setValueByPath(state.decision, fieldPath, value),
      isEdit: true,
    })),
  reset: (decision: Partial<AdministrativeDocument>) => {
    set(
      produce((draft: CreateDecisionStore) => {
        draft.decision.id = decision.id ?? "";
        draft.decision.no = decision.no ?? "";
        draft.decision.level = decision.level ?? "";
        draft.decision.date = decision.date ?? "";
        draft.decision.pursuant_to_dec_tct =
          decision.pursuant_to_dec_tct ?? null;
        draft.decision.pursuant_to_dec_ttmn =
          decision.pursuant_to_dec_ttmn ?? null;
      }),
    );
  },
  resetIsEdit: () => {
    set((state) => ({
      ...state,
      isEdit: false,
    }));
  },
}));

decision_store.subscribe((state) => {
  const { decision } = state;

  const updateSubmission = produce((draft: CreateSubmissionStore) => {
    draft.submission.pursuant_to_dec_tct_id =
      decision.pursuant_to_dec_tct?.id ?? null;
    draft.submission.pursuant_to_dec_ttmn_id =
      decision.pursuant_to_dec_ttmn?.id ?? null;
    draft.submission.directly_decision = {
      id: decision.id,
      no: decision.no,
      period: "KQ_KH_LCNT",
    };
  });

  create_tv_store.setState(updateSubmission);
  create_tt_store.setState(updateSubmission);

  edit_tv_store.setState(updateSubmission);
  edit_tt_store.setState(updateSubmission);
});
