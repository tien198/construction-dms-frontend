import { createStore, type StoreApi } from "zustand";

export type IsCreating = {
  isCreating: boolean;
  toggleIsCreating: (setTo?: boolean) => void;
};

export const isCreatingStoreFactory = (
  isCreating = false,
): StoreApi<IsCreating> => {
  return createStore<IsCreating>((set) => ({
    isCreating,
    toggleIsCreating: (setTo?: boolean) =>
      set((state) => ({ isCreating: setTo ?? !state.isCreating })),
  }));
};
