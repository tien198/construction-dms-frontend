import { useEffect } from "react";
import { useBlocker } from "react-router";
import { isCreatingStore } from "../Detail";

export function useAccessAndLeaveCreatePage() {
  const blocker = useBlocker(
    ({ nextLocation }) => nextLocation.pathname === "/",
  );
  useEffect(() => {
    if (blocker.state === "blocked") {
      isCreatingStore.getState().toggleIsCreating(false);
      blocker.proceed();
    }
  }, [blocker.state]);

  useEffect(() => {
    isCreatingStore.getState().toggleIsCreating(true);
  }, []);

  return;
}
