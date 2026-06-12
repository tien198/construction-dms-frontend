import { useState } from "react";
import { useStore } from "zustand";
import { edit_tt_store, edit_tv_store } from "../store/edit-store";
import type { Decision } from "@/types/domain";
import { decisionToSubmissionPost } from "@/ultil/decision-to-submision-post";
import { isDecEditingStore } from "./edit-hook";

export type ToggleEditingProps = {
  isCascadingDec?: boolean;
  isNeedConfirm?: boolean;
};

export function useDetailIsEditingToggle(initialDec?: Decision | null) {
  const [isTvEditing, setIsTvEditing] = useState(false);
  const [isTtEditing, setIsTtEditing] = useState(false);

  const { toggleIsEditing: isDecEditingToggle } = useStore(
    isDecEditingStore,
    (state) => state,
  );

  const reset_tt = useStore(edit_tt_store, (state) => state.reset);
  const reset_tv = useStore(edit_tv_store, (state) => state.reset);

  function handleToggleTvEditing({
    isCascadingDec = true,
    isNeedConfirm = true,
  }: ToggleEditingProps = {}) {
    if (isTvEditing && isNeedConfirm) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (!isConfirm) {
        return;
      }
      setIsTvEditing((prev) => !prev);

      initialDec &&
        reset_tv("KQ_KH_LCNT", decisionToSubmissionPost(initialDec, 0));
    } else {
      setIsTvEditing((prev) => !prev);
    }
    if (isCascadingDec && isTvEditing && !isTtEditing) {
      isDecEditingToggle(false);
    }
  }

  function handleToggleTtEditing({
    isCascadingDec = true,
    isNeedConfirm = true,
  }: ToggleEditingProps = {}) {
    if (isTtEditing && isNeedConfirm) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (!isConfirm) {
        return;
      }
      setIsTtEditing((prev) => !prev);

      initialDec &&
        reset_tt("KQ_KH_LCNT", decisionToSubmissionPost(initialDec, 1));
    } else {
      setIsTtEditing((prev) => !prev);
    }
    if (isCascadingDec && isTtEditing && !isTvEditing) {
      isDecEditingToggle(false);
    }
  }

  return {
    isTvEditing,
    isTtEditing,
    handleToggleTvEditing,
    handleToggleTtEditing,
  };
}
