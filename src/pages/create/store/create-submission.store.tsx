import { create } from "zustand";
import { initialState } from "./initial-state";
import type { CreateStoreState } from "./create-submission.store.type";

export const useCreateStore = create<CreateStoreState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  updateSubmission: (updates) => set((state) => ({ ...state, ...updates })),
  reset: () => set(initialState),
}));
