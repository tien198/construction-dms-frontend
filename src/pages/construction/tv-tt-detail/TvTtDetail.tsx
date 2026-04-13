import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentSide } from "../comps/DocumentSide";
import { edit_tv_tt_store } from "./edit-store";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { useParams, useSubmit } from "react-router";
import type { Decision } from "@/types";
import { getDecisionByPer } from "./api/get-decision-by-per.api";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "./ultil/decision-to-submision-post";
import type { SubmissionPost } from "../types/submission-post.type";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";

export default function SubmissionEdit() {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit;
  const params = useParams();
  const id = params["con-id"] as string;
  const { data, isLoading } = useQuery<(Decision | undefined)[]>({
    queryKey: ["tv-tt", id],
    queryFn: async () => {
      const [tv, tt] = await Promise.all([
        getDecisionByPer(id, "KH_TV_TT"),
        getDecisionByPer(id, "KH_TV_TT"),
      ]);
      // Fetch mock data
      return [tv, tt];
    },
  });

  const storeApi = edit_tv_tt_store;
  const reset = useStore(storeApi, (state) => state.reset);
  const tvDec = data?.[0];
  const ttDec = data?.[1];

  let tvSubmission: SubmissionPost | undefined;
  if (tvDec) {
    tvSubmission = decisionToSubmissionPost(tvDec);
  }
  let ttSubmission: SubmissionPost | undefined;
  if (ttDec) {
    ttSubmission = decisionToSubmissionPost(ttDec);
  }
  useEffect(() => {
    if (tvSubmission) reset("TV", tvSubmission);
    if (ttSubmission) reset("TT", ttSubmission);
  }, [tvDec, ttDec]);

  const isEditToggle = () => {
    if (isEdit) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        setIsEdit((prev) => !prev);
        storeApi.getState().reset("TV", tvSubmission);
        storeApi.getState().reset("TT", ttSubmission);
      }
    } else {
      setIsEdit((prev) => !prev);
    }
  };

  const submit = useSubmit();

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Đang tải dữ liệu...
      </div>
    );
  }

  if (!data?.[0] || !data?.[1])
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Không tồn tại công trình có id: {id}
      </div>
    );

  const handleSubmit = () => {
    setIsEdit(false);
    submit(null, { method: "PUT", encType: "application/json" });
  };

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Chi tiết Tờ trình"
          description="Thông tin chi tiết của tờ trình."
        />
        <ActionBtns>
          <Button variant="outline" onClick={isEditToggle}>
            <EditIcon className="mr-2 h-4 w-4" />
            {disabled ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
          </Button>
          {isEdit && (
            <StickyRevealButton onClick={handleSubmit}>
              <SaveIcon className="mr-2 h-4 w-4" />
              Lưu Tờ trình
            </StickyRevealButton>
          )}
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Submission info + directly attached Decision */}
        <DocumentSide
          storeApi={storeApi}
          disabled={disabled}
          tvDec={tvDec}
          ttDec={ttDec}
        />
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} disabled={disabled} />
      </div>
    </FormLayout>
  );
}
