import { create } from "zustand";

type IsCreating = {
  isCreating: boolean;
  toggleIsCreating: () => void;
};

export const useIsCreating = create<IsCreating>((set) => ({
  isCreating: false,
  toggleIsCreating: () => set((state) => ({ isCreating: !state.isCreating })),
}));
