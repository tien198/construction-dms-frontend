import { createStore, type StoreApi } from "zustand";

export type IsEditing = {
  isEdit: boolean;
  toggleIsEdit: (setTo?: boolean) => void;
};

export const createIsEditingStore = (): StoreApi<IsEditing> => {
  return createStore<IsEditing>((set) => ({
    isEdit: false,
    toggleIsEdit: (setTo?: boolean) =>
      set((state) => ({ isEdit: setTo ?? !state.isEdit })),
  }));
};
