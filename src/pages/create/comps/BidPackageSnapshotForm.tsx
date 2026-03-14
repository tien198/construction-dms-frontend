import { Button } from "@/components/ui/button";

import { FormText } from "@/components/form-ui/form-text";
import { Trash2Icon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";

type Props = {
  index: number;
};

export function BidPackageSnapshotForm({ index }: Props) {
  const bp = useStore(
    createSubmission_store,
    (state) =>
      state.submission.construction_infor_snapshot.bid_package_snapshots[index],
  );

  // const setField = useStore(createSubmission_store, (state) => state.setField);

  return (
    <div className="relative w-full rounded-lg border border-border bg-muted/30 p-4">
      {/* Remove button */}
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-3 top-3 text-muted-foreground hover:text-destructive"
        aria-label="Xoá gói thầu"
      >
        <Trash2Icon />
      </Button>

      <div className="h-6" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Type — Select, not an Input */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="type">Gói {bp.type}</Label>
        </div>

        {/* Project owner */}
        <FormField
          htmlFor={`owner`}
          label="Chủ đầu tư"
          placeholder="Tên chủ đầu tư"
          value={bp.project_owner}
        />

        {/* Bid package name */}
        <FormField
          htmlFor={`name`}
          label="Tên gói thầu"
          placeholder="Tên gói thầu"
          value={bp.bid_package_name}
          fullWidth
        />

        {/* Short description */}
        <FormText
          htmlFor={`desc`}
          label="Mô tả ngắn"
          placeholder="Mô tả ngắn về gói thầu..."
          value={bp.short_description}
          fullWidth
        />

        {/* Budget */}
        <FormField
          htmlFor={`budget`}
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
          value={bp.budget}
        />

        {/* Budget string */}
        <FormField
          htmlFor={`budget-str`}
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
          value={bp.budget_str}
        />

        {/* Estimated cost */}
        <FormField
          htmlFor={`est-cost`}
          label="Dự toán (số)"
          type="number"
          placeholder="0"
          value={bp.est_cost}
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor={`est-cost-str`}
          label="Dự toán (chữ)"
          placeholder="Một tỷ đồng"
          value={bp.est_cost_str}
        />

        {/* Bidder selection time */}
        <FormField
          htmlFor={`sel-time`}
          label="Thời gian chọn thầu"
          type="date"
          value={bp.bidder_selection_time}
        />

        {/* Bidder selection method */}
        {/* <FormField
          htmlFor={`sel-method`}
          label="Hình thức chọn thầu"
          placeholder="VD: Đấu thầu rộng rãi"
        /> */}

        {/* Successful bidder ID */}
        <FormField
          htmlFor={`bidder`}
          label="Nhà trúng thầu"
          placeholder="Chọn nhà thầu"
          value={bp.successful_bidder_id ?? ""}
        />

        {/* Duration */}
        <FormField
          htmlFor={`duration`}
          label="Thời gian thực hiện"
          placeholder="10 ngày"
          value={bp.duration}
        />
      </div>
    </div>
  );
}
