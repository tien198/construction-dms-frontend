import { createStore, type StoreApi } from "zustand";

export type IsCreating = {
  isCreate: boolean;
  toggleIsCreate: (setTo?: boolean) => void;
};

export const createIsCreatingStore = (): StoreApi<IsCreating> => {
  return createStore<IsCreating>((set) => ({
    isCreate: false,
    toggleIsCreate: (setTo?: boolean) =>
      set((state) => ({ isCreate: setTo ?? !state.isCreate })),
  }));
};
