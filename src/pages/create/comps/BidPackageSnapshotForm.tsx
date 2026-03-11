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
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-ui/form-field";

export function BidPackageSnapshotForm() {
  return (
    <div className="relative rounded-lg border border-border bg-muted/30 p-4">
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

      <p className="mb-4 text-sm font-semibold text-foreground">Gói thầu</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Type — Select, not an Input */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`type`}>Loại gói thầu</Label>
          <Select>
            <SelectTrigger id={`type`} className="w-full">
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
          htmlFor={`owner`}
          label="Chủ đầu tư"
          placeholder="Tên chủ đầu tư"
        />

        {/* Bid package name */}
        <FormField
          htmlFor={`name`}
          label="Tên gói thầu"
          placeholder="Tên gói thầu"
          fullWidth
        />

        {/* Short description */}
        <FormText
          htmlFor={`desc`}
          label="Mô tả ngắn"
          placeholder="Mô tả ngắn về gói thầu..."
          fullWidth
        />

        {/* Budget */}
        <FormField
          htmlFor={`budget`}
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
        />

        {/* Budget string */}
        <FormField
          htmlFor={`budget-str`}
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
        />

        {/* Estimated cost */}
        <FormField
          htmlFor={`est-cost`}
          label="Dự toán (số)"
          type="number"
          placeholder="0"
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor={`est-cost-str`}
          label="Dự toán (chữ)"
          placeholder="VD: Một tỷ đồng"
        />

        {/* Bidder selection time */}
        <FormField
          htmlFor={`sel-time`}
          label="Thời gian chọn thầu"
          type="date"
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
        />

        {/* Duration */}
        <FormField
          htmlFor={`duration`}
          label="Thời gian thực hiện"
          placeholder="VD: 12 tháng"
        />
      </div>
    </div>
  );
}
