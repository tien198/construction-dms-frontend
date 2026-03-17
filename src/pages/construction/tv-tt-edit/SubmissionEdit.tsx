import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentSide } from "../comps/DocumentSide";
import { edit_submission_store } from "./edit-store";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { useParams } from "react-router";
import type { Decision } from "@/types";
import { getDecisionByPer } from "@/mock-apis/get-decision-by-per";

export default function SubmissionEdit() {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit;
  const params = useParams();
  const id = params["id"] as string;
  const { data, isLoading } = useQuery<(Decision | undefined)[]>({
    queryKey: ["construction", id],
    queryFn: async () => {
      const [tv, tt] = await Promise.all([
        getDecisionByPer(id, "TV"),
        getDecisionByPer(id, "TT"),
      ]);
      // Fetch mock data
      return [tv, tt];
    },
  });

  const storeApi = edit_submission_store;

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Đang tải dữ liệu...
      </div>
    );
  }

  if (!data?.[0] && !data?.[1])
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Không tồn tại công trình có id: {id}
      </div>
    );

  const [tvDec, ttDec] = data;
  const handleSubmit = () => {
    // Handle submitting the edited data using TanStack Query mutation or similar here.
    setIsEdit(false); // Assuming we turn editing off, or if disabled=isEdit then wait...
  };

  return (
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Chi tiết Tờ trình
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Thông tin chi tiết của tờ trình.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEdit(!isEdit)}>
            <EditIcon className="mr-2 h-4 w-4" />
            Toggle isEdit (current: {String(disabled)})
          </Button>
          <StickyRevealButton onClick={handleSubmit}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu Tờ trình
          </StickyRevealButton>
        </div>
      </div>

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
    </div>
  );
}
