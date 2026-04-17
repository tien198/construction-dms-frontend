import { createStore, type StoreApi } from "zustand";

export type IsCreating = {
  isCreating: boolean;
  toggleIsCreating: () => void;
};

export const createIsCreatingStore = (): StoreApi<IsCreating> => {
  return createStore<IsCreating>((set) => ({
    isCreating: false,
    toggleIsCreating: () => set((state) => ({ isCreating: !state.isCreating })),
  }));
};
