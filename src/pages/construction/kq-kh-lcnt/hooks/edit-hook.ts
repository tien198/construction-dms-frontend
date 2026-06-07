import { getDecisionByPer } from "@/api/get-decision-by-per.api";
import { isEditingStoreFactory } from "@/store-factory/is-editing-store-factory";
import { decisionToSubmissionPost } from "@/ultil/decision-to-submision-post";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSubmit } from "react-router";
import { useStore } from "zustand";
import { edit_tt_store, edit_tv_store } from "../store/edit-store";

const isEditingStore = isEditingStoreFactory();

export function useEdit() {
  const { isEditing, toggleIsEditing } = useStore(
    isEditingStore,
    (state) => state,
  );
  const disabled = !isEditing;

  const params = useParams();
  const constructionId = params["con-id"] as string;

  const { data } = useQuery({
    queryKey: ["kq-kh-lcnt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "KQ_KH_LCNT");
    },
    enabled: false,
    retry: false,
  });

  const reset_tt = useStore(edit_tt_store, (state) => state.reset);
  const reset_tv = useStore(edit_tv_store, (state) => state.reset);

  const isEditingToggle = () => {
    if (isEditing) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        toggleIsEditing();
        if (data) {
          reset_tt("KQ_KH_LCNT", decisionToSubmissionPost(data, 0));
          reset_tv("KQ_KH_LCNT", decisionToSubmissionPost(data, 1));
        }
      }
    } else {
      toggleIsEditing();
    }
  };

  const submit = useSubmit();

  const handleSubmit = () => {
    toggleIsEditing(false);
    submit(null, {
      method: "PUT",
      encType: "application/json",
      action: "chinh-sua",
    });
  };

  return {
    decision: data,
    disabled,
    isEditingToggle,
    handleSubmit,
  };
}
