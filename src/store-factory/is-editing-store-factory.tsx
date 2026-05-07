import { createStore, type StoreApi } from "zustand";

export type IsEditing = {
  isEditing: boolean;
  toggleIsEditing: (setTo?: boolean) => void;
};

export const isEditingStoreFactory = (): StoreApi<IsEditing> => {
  return createStore<IsEditing>((set) => ({
    isEditing: false,
    toggleIsEditing: (setTo?: boolean) =>
      set((state) => ({ isEditing: setTo ?? !state.isEditing })),
  }));
};
