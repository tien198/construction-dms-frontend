import type { AdministrativeDocument } from "@/types/domain/administrative-document.type";
import { createStore } from "zustand";
import { produce } from "immer";
import { tt_store, tv_store } from "./create-submission-store";
import type { CreateSubmissionStore } from "@/store-factory/create-submission.store.type";
import type { RecursivePath } from "@/lib/type/recursion";
import { setValueByPath } from "@/lib/setValByPath";

export interface CreateDecisionStore {
  decision: AdministrativeDocument;
  setField: <K extends RecursivePath<AdministrativeDocument>>(
    fieldPath: K,
    value: any,
  ) => void;
  reset: (decision: Partial<AdministrativeDocument>) => void;
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
  decision: initialState,
  setField: (fieldPath, value) =>
    set((state) => ({
      ...state,
      decision: setValueByPath(state.decision, fieldPath, value),
    })),
  reset: (decision: Partial<AdministrativeDocument>) => {
    set(
      produce((draft: CreateDecisionStore) => {
        draft.decision = { ...initialState, ...decision };
      }),
    );
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

  tv_store.setState(updateSubmission);
  tt_store.setState(updateSubmission);
});
