import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdministrativeDocumentFields } from "../comps/AdministrativeDocumentFields";
import { edit_bcktkt_store } from "./edit-store";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { useParams, useSubmit } from "react-router";
import type { Decision } from "@/types";
import { getDecisionByPer } from "@/mock-apis/get-decision-by-per";
import { useStore } from "zustand";
import { decisionToSubmissionPost } from "../tv-tt-detail/ultil/decision-to-submision-post";

export default function BcktktDetail() {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit;
  const params = useParams();
  const id = params["id"] as string;

  const { data, isLoading } = useQuery<Decision | undefined>({
    queryKey: ["bcktkt", id],
    queryFn: async () => {
      return await getDecisionByPer(id, "BCKTKT");
    },
  });

  const storeApi = edit_bcktkt_store;
  const reset = useStore(storeApi, (state) => state.reset);

  useEffect(() => {
    if (data) {
      const submission = decisionToSubmissionPost(data);
      reset("BCKTKT", submission);
    }
  }, [data]);

  const submit = useSubmit();

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Đang tải dữ liệu...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Không tồn tại công trình có id: {id}
      </div>
    );
  }

  const handleSubmit = () => {
    setIsEdit(false);
    submit(null, { method: "PUT", encType: "application/json" });
  };

  return (
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Chi tiết BCKTKT
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Thông tin chi tiết của báo cáo khảo sát thiết kế.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEdit(!isEdit)}>
            <EditIcon className="mr-2 h-4 w-4" />
            {disabled ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
          </Button>
          {isEdit && (
            <StickyRevealButton onClick={handleSubmit}>
              <SaveIcon className="mr-2 h-4 w-4" />
              Lưu BCKTKT
            </StickyRevealButton>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div className="flex flex-col gap-6">
          <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
            <p className="mb-6 text-sm font-semibold text-foreground">
              Tờ trình - Quyết định BCKTKT
            </p>
            <AdministrativeDocumentFields type="bcktkt" storeApi={storeApi} />
          </div>
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} disabled={disabled} />
      </div>
    </div>
  );
}
