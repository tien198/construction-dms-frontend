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
import { Separator } from "@/components/ui/separator";
import { PlusIcon, Trash2Icon } from "lucide-react";
import type { BidPackageSnapshot, ConstructionInfoSnapshot } from "@/types";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";
import { Label } from "@/components/ui/label";

type FormSnapshot = Omit<ConstructionInfoSnapshot, "id" | "bid_package_snapshots"> & {
  bid_package_snapshots: Omit<BidPackageSnapshot, "id">[];
};

interface ConstructionInfoSnapshotFormProps {
  index: number;
  values: FormSnapshot;
  onChange: (
    index: number,
    field: keyof ConstructionInfoSnapshot,
    value: unknown
  ) => void;
  onRemove: (index: number) => void;
}

const EMPTY_BID_PACKAGE: Omit<BidPackageSnapshot, "id"> = {
  type: "TV",
  project_owner: "",
  bid_package_name: "",
  short_description: "",
  budget: 0,
  budget_string: "",
  bidder_selection_time: "",
  bidder_selection_method: "",
  successful_bidder_id: null,
  duration: "",
  is_completed: false,
  estimated_cost: 0,
  estimated_cost_string: "",
};

export function ConstructionInfoSnapshotForm({
  index,
  values,
  onChange,
  onRemove,
}: ConstructionInfoSnapshotFormProps) {
  const prefix = `cis-${index}`;

  const handleBidPkgChange = (
    bidIdx: number,
    field: keyof BidPackageSnapshot,
    value: unknown
  ) => {
    const updated = [...(values.bid_package_snapshots ?? [])];
    updated[bidIdx] = { ...updated[bidIdx], [field]: value };
    onChange(index, "bid_package_snapshots", updated);
  };

  const addBidPackage = () => {
    onChange(index, "bid_package_snapshots", [
      ...(values.bid_package_snapshots ?? []),
      { ...EMPTY_BID_PACKAGE },
    ]);
  };

  const removeBidPackage = (bidIdx: number) => {
    const updated = (values.bid_package_snapshots ?? []).filter(
      (_, i) => i !== bidIdx
    );
    onChange(index, "bid_package_snapshots", updated);
  };

  return (
    <div className="relative rounded-xl border border-border bg-card/60 p-5 shadow-sm">
      {/* Remove button */}
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(index)}
        aria-label="Xoá thông tin công trình"
      >
        <Trash2Icon />
      </Button>

      <p className="mb-4 text-sm font-semibold text-foreground">
        Thông tin công trình #{index + 1}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Period */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-period`}>Giai đoạn (Period)</Label>
          <Select
            value={values.period}
            onValueChange={(v) =>
              onChange(index, "period", v as ConstructionInfoSnapshot["period"])
            }
          >
            <SelectTrigger id={`${prefix}-period`} className="w-full">
              <SelectValue placeholder="Chọn giai đoạn..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="KH">KH – Kế hoạch</SelectItem>
              <SelectItem value="TV">TV – Tư vấn</SelectItem>
              <SelectItem value="TT">TT – Thi công</SelectItem>
              <SelectItem value="BCKTKT">BCKTKT – Báo cáo KTKT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-name`}>Tên công trình</Label>
          <Input
            id={`${prefix}-name`}
            placeholder="Tên công trình"
            value={values.name}
            onChange={(e) => onChange(index, "name", e.target.value)}
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

        {/* Source of funds */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-source`}>Nguồn vốn</Label>
          <Input
            id={`${prefix}-source`}
            placeholder="Nguồn vốn (VD: Ngân sách nhà nước)"
            value={values.source_of_funds}
            onChange={(e) => onChange(index, "source_of_funds", e.target.value)}
          />
        </div>

        {/* Start date */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-start`}>Ngày bắt đầu thực hiện</Label>
          <Input
            id={`${prefix}-start`}
            type="date"
            value={values.implementation_start_date}
            onChange={(e) =>
              onChange(index, "implementation_start_date", e.target.value)
            }
          />
        </div>

        {/* End date */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-end`}>Ngày kết thúc thực hiện</Label>
          <Input
            id={`${prefix}-end`}
            type="date"
            value={values.implementation_end_date}
            onChange={(e) =>
              onChange(index, "implementation_end_date", e.target.value)
            }
          />
        </div>

        {/* Existing condition */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-condition`}>Hiện trạng công trình</Label>
          <Textarea
            id={`${prefix}-condition`}
            placeholder="Mô tả hiện trạng..."
            value={values.existing_condition_of_the_structure}
            onChange={(e) =>
              onChange(
                index,
                "existing_condition_of_the_structure",
                e.target.value
              )
            }
          />
        </div>

        {/* Repair scope */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-repair`}>Phạm vi sửa chữa</Label>
          <Textarea
            id={`${prefix}-repair`}
            placeholder="Phạm vi công việc sửa chữa..."
            value={values.repair_scope}
            onChange={(e) => onChange(index, "repair_scope", e.target.value)}
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
            placeholder="VD: Hai tỷ đồng"
            value={values.estimated_cost_string}
            onChange={(e) =>
              onChange(index, "estimated_cost_string", e.target.value)
            }
          />
        </div>
      </div>

      {/* Bid packages */}
      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">
          Gói thầu ({values.bid_package_snapshots?.length ?? 0})
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addBidPackage}
        >
          <PlusIcon />
          Thêm gói thầu
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {(values.bid_package_snapshots ?? []).map((bp, bidIdx) => (
          <BidPackageSnapshotForm
            key={bidIdx}
            index={bidIdx}
            values={bp}
            onChange={handleBidPkgChange}
            onRemove={removeBidPackage}
          />
        ))}
      </div>
    </div>
  );
}
