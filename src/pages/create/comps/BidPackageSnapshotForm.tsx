import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Trash2Icon } from "lucide-react";
import type { BidPackageSnapshot } from "@/types";
import { Label } from "@/components/ui/label";

interface BidPackageSnapshotFormProps {
  index: number;
  values: Omit<BidPackageSnapshot, "id">;
  onChange: (index: number, field: keyof BidPackageSnapshot, value: unknown) => void;
  onRemove: (index: number) => void;
}

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
        {/* Type */}
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
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-owner`}>Chủ đầu tư</Label>
          <Input
            id={`${prefix}-owner`}
            placeholder="Tên chủ đầu tư"
            value={values.project_owner}
            onChange={(e) => onChange(index, "project_owner", e.target.value)}
          />
        </div>

        {/* Bid package name */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-name`}>Tên gói thầu</Label>
          <Input
            id={`${prefix}-name`}
            placeholder="Tên gói thầu"
            value={values.bid_package_name}
            onChange={(e) => onChange(index, "bid_package_name", e.target.value)}
          />
        </div>

        {/* Short description */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-desc`}>Mô tả ngắn</Label>
          <Textarea
            id={`${prefix}-desc`}
            placeholder="Mô tả ngắn về gói thầu..."
            value={values.short_description}
            onChange={(e) => onChange(index, "short_description", e.target.value)}
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-budget`}>Ngân sách (số)</Label>
          <Input
            id={`${prefix}-budget`}
            type="number"
            placeholder="0"
            value={values.budget}
            onChange={(e) => onChange(index, "budget", Number(e.target.value))}
          />
        </div>

        {/* Budget string */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-budget-str`}>Ngân sách (chữ)</Label>
          <Input
            id={`${prefix}-budget-str`}
            placeholder="VD: Một tỷ đồng"
            value={values.budget_string}
            onChange={(e) => onChange(index, "budget_string", e.target.value)}
          />
        </div>

        {/* Bidder selection time */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-sel-time`}>Thời gian chọn thầu</Label>
          <Input
            id={`${prefix}-sel-time`}
            type="date"
            value={values.bidder_selection_time}
            onChange={(e) =>
              onChange(index, "bidder_selection_time", e.target.value)
            }
          />
        </div>

        {/* Bidder selection method */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-sel-method`}>Hình thức chọn thầu</Label>
          <Input
            id={`${prefix}-sel-method`}
            placeholder="VD: Đấu thầu rộng rãi"
            value={values.bidder_selection_method}
            onChange={(e) =>
              onChange(index, "bidder_selection_method", e.target.value)
            }
          />
        </div>

        {/* Successful bidder ID */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-bidder`}>ID nhà thầu trúng thầu</Label>
          <Input
            id={`${prefix}-bidder`}
            placeholder="(tuỳ chọn)"
            value={values.successful_bidder_id ?? ""}
            onChange={(e) =>
              onChange(
                index,
                "successful_bidder_id",
                e.target.value || null
              )
            }
          />
        </div>

        {/* Duration */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-duration`}>Thời gian thực hiện</Label>
          <Input
            id={`${prefix}-duration`}
            placeholder="VD: 12 tháng"
            value={values.duration}
            onChange={(e) => onChange(index, "duration", e.target.value)}
          />
        </div>

        {/* Estimated cost */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-est-cost`}>Dự toán (số)</Label>
          <Input
            id={`${prefix}-est-cost`}
            type="number"
            placeholder="0"
            value={values.estimated_cost}
            onChange={(e) =>
              onChange(index, "estimated_cost", Number(e.target.value))
            }
          />
        </div>

        {/* Estimated cost string */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-est-cost-str`}>Dự toán (chữ)</Label>
          <Input
            id={`${prefix}-est-cost-str`}
            placeholder="VD: Một tỷ đồng"
            value={values.estimated_cost_string}
            onChange={(e) =>
              onChange(index, "estimated_cost_string", e.target.value)
            }
          />
        </div>

        {/* Is completed */}
        <div className="flex items-center gap-2 sm:col-span-2">
          <input
            id={`${prefix}-completed`}
            type="checkbox"
            className="size-4 rounded border-border accent-primary"
            checked={values.is_completed}
            onChange={(e) => onChange(index, "is_completed", e.target.checked)}
          />
          <Label htmlFor={`${prefix}-completed`} className="cursor-pointer">
            Đã hoàn thành
          </Label>
        </div>
      </div>
    </div>
  );
}
