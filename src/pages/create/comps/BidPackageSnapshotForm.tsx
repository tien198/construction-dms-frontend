import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormText } from "@/components/form-ui/form-text";
import { Trash2Icon } from "lucide-react";
import type { BidPackageSnapshot } from "@/types";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-ui/form-field";

import type { BidPackageSnapshotFormProps } from "./BidPackageSnapshotForm.type";

export function BidPackageSnapshotForm({
  index,
  values,
  onChange,
  onRemove,
}: BidPackageSnapshotFormProps) {
  const prefix = `bid-pkg-${index}`;

  return (
    <div className="relative rounded-lg border border-border bg-muted/30 p-4">
      {/* Remove button */}
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-3 top-3 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(index)}
        aria-label="Xoá gói thầu"
      >
        <Trash2Icon />
      </Button>

      <p className="mb-4 text-sm font-semibold text-foreground">
        Gói thầu #{index + 1}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Type — Select, not an Input */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-type`}>Loại gói thầu</Label>
          <Select
            value={values.type}
            onValueChange={(v) =>
              onChange(index, "type", v as BidPackageSnapshot["type"])
            }
          >
            <SelectTrigger id={`${prefix}-type`} className="w-full">
              <SelectValue placeholder="Chọn loại..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TV">TV – Tư vấn</SelectItem>
              <SelectItem value="TT">TT – Thi công</SelectItem>
              <SelectItem value="TC">TC – Tổng thầu</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project owner */}
        <FormField
          htmlFor={`${prefix}-owner`}
          label="Chủ đầu tư"
          placeholder="Tên chủ đầu tư"
          value={values.project_owner}
          onChange={(e) => onChange(index, "project_owner", e.target.value)}
        />

        {/* Bid package name */}
        <FormField
          htmlFor={`${prefix}-name`}
          label="Tên gói thầu"
          placeholder="Tên gói thầu"
          value={values.bid_package_name}
          onChange={(e) => onChange(index, "bid_package_name", e.target.value)}
          fullWidth
        />

        {/* Short description */}
        <FormText
          htmlFor={`${prefix}-desc`}
          label="Mô tả ngắn"
          placeholder="Mô tả ngắn về gói thầu..."
          value={values.short_description}
          onChange={(e) => onChange(index, "short_description", e.target.value)}
          fullWidth
        />

        {/* Budget */}
        <FormField
          htmlFor={`${prefix}-budget`}
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
          value={String(values.budget)}
          onChange={(e) => onChange(index, "budget", Number(e.target.value))}
        />

        {/* Budget string */}
        <FormField
          htmlFor={`${prefix}-budget-str`}
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
          value={values.budget_string}
          onChange={(e) => onChange(index, "budget_string", e.target.value)}
        />

        {/* Bidder selection time */}
        <FormField
          htmlFor={`${prefix}-sel-time`}
          label="Thời gian chọn thầu"
          type="date"
          value={values.bidder_selection_time}
          onChange={(e) =>
            onChange(index, "bidder_selection_time", e.target.value)
          }
        />

        {/* Bidder selection method */}
        <FormField
          htmlFor={`${prefix}-sel-method`}
          label="Hình thức chọn thầu"
          placeholder="VD: Đấu thầu rộng rãi"
          value={values.bidder_selection_method}
          onChange={(e) =>
            onChange(index, "bidder_selection_method", e.target.value)
          }
        />

        {/* Successful bidder ID */}
        <FormField
          htmlFor={`${prefix}-bidder`}
          label="ID nhà thầu trúng thầu"
          placeholder="(tuỳ chọn)"
          value={values.successful_bidder_id ?? ""}
          onChange={(e) =>
            onChange(index, "successful_bidder_id", e.target.value || null)
          }
        />

        {/* Duration */}
        <FormField
          htmlFor={`${prefix}-duration`}
          label="Thời gian thực hiện"
          placeholder="VD: 12 tháng"
          value={values.duration}
          onChange={(e) => onChange(index, "duration", e.target.value)}
        />

        {/* Estimated cost */}
        <FormField
          htmlFor={`${prefix}-est-cost`}
          label="Dự toán (số)"
          type="number"
          placeholder="0"
          value={String(values.estimated_cost)}
          onChange={(e) =>
            onChange(index, "estimated_cost", Number(e.target.value))
          }
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor={`${prefix}-est-cost-str`}
          label="Dự toán (chữ)"
          placeholder="VD: Một tỷ đồng"
          value={values.estimated_cost_string}
          onChange={(e) =>
            onChange(index, "estimated_cost_string", e.target.value)
          }
        />
      </div>
    </div>
  );
}
