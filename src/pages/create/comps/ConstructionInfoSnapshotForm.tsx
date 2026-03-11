import { useId } from "react";
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
import { PlusIcon } from "lucide-react";
import type { BidPackageSnapshot, ConstructionInfoSnapshot } from "@/types";
import type { ConstructionInfoSnapshotFormProps } from "./ConstructionInfoSnapshotForm.type";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";
import { Label } from "@/components/ui/label";

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
  values,
  onChange,
}: ConstructionInfoSnapshotFormProps) {
  const prefix = useId();

  const handleBidPkgChange = (
    bidIdx: number,
    field: keyof BidPackageSnapshot,
    value: unknown,
  ) => {
    const updated = [...(values.bid_package_snapshots ?? [])];
    updated[bidIdx] = { ...updated[bidIdx], [field]: value };
    onChange("bid_package_snapshots", updated);
  };

  const addBidPackage = () => {
    onChange("bid_package_snapshots", [
      ...(values.bid_package_snapshots ?? []),
      { ...EMPTY_BID_PACKAGE },
    ]);
  };

  const removeBidPackage = (bidIdx: number) => {
    const updated = (values.bid_package_snapshots ?? []).filter(
      (_, i) => i !== bidIdx,
    );
    onChange("bid_package_snapshots", updated);
  };

  const dummyBidPackage = values.bid_package_snapshots?.[0] ?? (EMPTY_BID_PACKAGE as BidPackageSnapshot);

  return (
    <div className="relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      <p className="mb-6 text-sm font-semibold text-foreground">
        Thông tin công trình
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Period */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-period`}>Giai đoạn (Period)</Label>
          <Select
            value={values.period ?? ""}
            onValueChange={(v) =>
              onChange("period", v as ConstructionInfoSnapshot["period"])
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
            onChange={(e) => onChange("name", e.target.value)}
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
            onChange={(e) => onChange("budget", Number(e.target.value))}
          />
        </div>

        {/* Budget string */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-budget-str`}>Ngân sách (chữ)</Label>
          <Input
            id={`${prefix}-budget-str`}
            placeholder="VD: Một tỷ đồng"
            value={values.budget_string}
            onChange={(e) => onChange("budget_string", e.target.value)}
          />
        </div>

        {/* Source of funds */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${prefix}-source`}>Nguồn vốn</Label>
          <Input
            id={`${prefix}-source`}
            placeholder="Nguồn vốn (VD: Ngân sách nhà nước)"
            value={values.source_of_funds}
            onChange={(e) => onChange("source_of_funds", e.target.value)}
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
              onChange("implementation_start_date", e.target.value)
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
              onChange("implementation_end_date", e.target.value)
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
              onChange("existing_condition_of_the_structure", e.target.value)
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
            onChange={(e) => onChange("repair_scope", e.target.value)}
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
            onChange={(e) => onChange("estimated_cost", Number(e.target.value))}
          />
        </div>

        {/* Estimated cost string */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${prefix}-est-cost-str`}>Dự toán (chữ)</Label>
          <Input
            id={`${prefix}-est-cost-str`}
            placeholder="VD: Hai tỷ đồng"
            value={values.estimated_cost_string}
            onChange={(e) => onChange("estimated_cost_string", e.target.value)}
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
        <BidPackageSnapshotForm
          index={0}
          values={dummyBidPackage}
          onChange={handleBidPkgChange}
          onRemove={removeBidPackage}
        />
      </div>
    </div>
  );
}
