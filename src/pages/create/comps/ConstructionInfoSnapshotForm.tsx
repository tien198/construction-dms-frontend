import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormText } from "@/components/form-ui/form-text";
import { PlusIcon } from "lucide-react";
import type { BidPackageSnapshot } from "@/types";
import type { ConstructionInfoSnapshotFormProps } from "./ConstructionInfoSnapshotForm.type";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";
import { FormField } from "@/components/form-ui/form-field";

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

  const dummyBidPackage =
    values.bid_package_snapshots?.[0] ??
    (EMPTY_BID_PACKAGE as BidPackageSnapshot);

  return (
    <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      <p className="mb-6 text-sm font-semibold text-foreground">
        Thông tin công trình
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <FormField
          htmlFor={`${prefix}-name`}
          label="Tên công trình"
          placeholder="Tên công trình"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
          fullWidth
        />

        {/* Budget */}
        <FormField
          htmlFor={`${prefix}-budget`}
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
          value={String(values.budget)}
          onChange={(e) => onChange("budget", Number(e.target.value))}
        />

        {/* Budget string */}
        <FormField
          htmlFor={`${prefix}-budget-str`}
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
          value={values.budget_string}
          onChange={(e) => onChange("budget_string", e.target.value)}
        />

        {/* Source of funds */}
        <FormField
          htmlFor={`${prefix}-source`}
          label="Nguồn vốn"
          placeholder="Nguồn vốn (VD: 2026)"
          value={values.source_of_funds}
          onChange={(e) => onChange("source_of_funds", e.target.value)}
          fullWidth
        />

        {/* Start date */}
        <FormField
          htmlFor={`${prefix}-start`}
          label="Ngày bắt đầu thực hiện"
          type="date"
          value={values.implementation_start_date}
          onChange={(e) =>
            onChange("implementation_start_date", e.target.value)
          }
        />

        {/* End date */}
        <FormField
          htmlFor={`${prefix}-end`}
          label="Ngày kết thúc thực hiện"
          type="date"
          value={values.implementation_end_date}
          onChange={(e) => onChange("implementation_end_date", e.target.value)}
        />

        {/* Existing condition */}
        <FormText
          htmlFor={`${prefix}-condition`}
          label="Hiện trạng công trình"
          placeholder="Mô tả hiện trạng..."
          value={values.existing_condition_of_the_structure}
          onChange={(e) =>
            onChange("existing_condition_of_the_structure", e.target.value)
          }
          fullWidth
        />

        {/* Repair scope */}
        <FormText
          htmlFor={`${prefix}-repair`}
          label="Phạm vi sửa chữa"
          className="bg-accent"
          placeholder="Phạm vi công việc sửa chữa..."
          value={values.repair_scope}
          onChange={(e) => onChange("repair_scope", e.target.value)}
          fullWidth
        />

        {/* Estimated cost */}
        <FormField
          htmlFor={`${prefix}-est-cost`}
          label="Dự toán (số)"
          type="number"
          placeholder="0"
          value={String(values.estimated_cost)}
          onChange={(e) => onChange("estimated_cost", Number(e.target.value))}
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor={`${prefix}-est-cost-str`}
          label="Dự toán (chữ)"
          placeholder="VD: Hai tỷ đồng"
          value={values.estimated_cost_string}
          onChange={(e) => onChange("estimated_cost_string", e.target.value)}
        />
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
