import { create } from "zustand";
import type { Submission } from "../../../types/submission.type";
import { initialState } from "./initial-state";

export interface CreateStoreState extends Partial<Submission> {
  setField: <K extends keyof Submission>(
    field: K,
    value: Submission[K],
  ) => void;
  updateSubmission: (updates: Partial<Submission>) => void;
  reset: () => void;
}

export const useCreateStore = create<CreateStoreState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  updateSubmission: (updates) => set((state) => ({ ...state, ...updates })),
  reset: () => set(initialState),
}));
