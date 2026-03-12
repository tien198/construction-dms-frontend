import { createStore } from "zustand";
import { initialState } from "./initial-state";
import type { CreateSubmission } from "./create-submission.store.type";

export const createSubmission_store = createStore<CreateSubmission>((set) => ({
  submission: initialState,
  setField: (field, value) =>
    set((state) => ({
      ...state,
      submission: { ...state.submission, [field]: value },
    })),
  updateSubmission: (updates) =>
    set((state) => ({
      ...state,
      submission: { ...state.submission, ...updates },
    })),
  reset: () => set({ submission: initialState }),
}));
