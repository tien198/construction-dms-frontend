import { createStore } from "zustand";
import { initialState } from "./initial-state";
import { setValueByPath } from "@/lib/setValByPath";
import type { CreateSubmissionStore } from "./create-submission.store.type";

export const createSubmission_store = createStore<CreateSubmissionStore>(
  (set) => ({
    submission: initialState,
    setField: (field, value) =>
      set((state) => {
        const shallowCoppy = setValueByPath(state.submission, field, value);
        return { ...state, submission: shallowCoppy };
      }),

    reset: () => set({ submission: initialState }),
  }),
);
