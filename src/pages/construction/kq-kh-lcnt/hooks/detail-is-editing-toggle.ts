import { useState } from "react";
import { useStore } from "zustand";
import { edit_tt_store, edit_tv_store } from "../store/edit-store";
import type { Decision } from "@/types/domain";
import { decisionToSubmissionPost } from "@/ultil/decision-to-submision-post";

export function useDetailIsEditingToggle(
  isDecEditingToggle: (setTo?: boolean) => void,
  initialDec?: Decision | null,
) {
  const [isTvEditing, setIsTvEditing] = useState(false);
  const [isTtEditing, setIsTtEditing] = useState(false);

  const reset_tt = useStore(edit_tt_store, (state) => state.reset);
  const reset_tv = useStore(edit_tv_store, (state) => state.reset);

  function handleToggleTvEditing() {
    if (isTvEditing) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (!isConfirm) {
        return;
      }
      setIsTvEditing((prev) => !prev);
      console.log(isTvEditing, isTtEditing);

      if (isTvEditing && !isTtEditing) {
        isDecEditingToggle(false);
      }
      initialDec &&
        reset_tv("KQ_KH_LCNT", decisionToSubmissionPost(initialDec, 0));
    } else {
      setIsTvEditing((prev) => !prev);
    }
  }

  function handleToggleTtEditing() {
    if (isTtEditing) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (!isConfirm) {
        return;
      }
      setIsTtEditing((prev) => !prev);
      if (isTtEditing && !isTvEditing) {
        isDecEditingToggle(false);
      }
      initialDec &&
        reset_tt("KQ_KH_LCNT", decisionToSubmissionPost(initialDec, 1));
    } else {
      setIsTtEditing((prev) => !prev);
    }
  }

  return {
    isTvEditing,
    isTtEditing,
    handleToggleTvEditing,
    handleToggleTtEditing,
  };
}
