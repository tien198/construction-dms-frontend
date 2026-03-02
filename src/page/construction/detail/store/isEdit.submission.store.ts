import { create } from "zustand";
import type { ConstructionPeriod } from "../../type/construction.type";

interface IsEditSubmissionStore {
  editingPeriods: ConstructionPeriod[];
  setEditing: (period: ConstructionPeriod) => void;
  unsetEditing: (period: ConstructionPeriod) => void;
  isEditing: (period: ConstructionPeriod) => boolean;
}

export const useIsEditSubmissionStore = create<IsEditSubmissionStore>(
  (set, get) => ({
    editingPeriods: [],

    setEditing: (period) =>
      set((state) => ({
        editingPeriods: state.editingPeriods.includes(period)
          ? state.editingPeriods
          : [...state.editingPeriods, period],
      })),

    unsetEditing: (period) =>
      set((state) => ({
        editingPeriods: state.editingPeriods.filter((p) => p !== period),
      })),

    isEditing: (period) => get().editingPeriods.includes(period),
  }),
);
