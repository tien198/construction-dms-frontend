import { useState } from "react";
import { useStore } from "zustand";
import { isCreatingStore } from "../Detail";

export function useCreateIsCreating() {
  const toggleIsCreating = useStore(
    isCreatingStore,
    (state) => state.toggleIsCreating,
  );
  const [isTvCreating, setIsTvCreating] = useState(false);
  const [isTtCreating, setIsTtCreating] = useState(false);

  function handleToggleTvCreating() {
    setIsTvCreating((prev) => !prev);
    toggleIsCreating(false);
  }

  function handleToggleTtCreating() {
    setIsTtCreating((prev) => !prev);
    toggleIsCreating(false);
  }

  return {
    isTvCreating,
    isTtCreating,
    handleToggleTvCreating,
    handleToggleTtCreating,
  };
}
