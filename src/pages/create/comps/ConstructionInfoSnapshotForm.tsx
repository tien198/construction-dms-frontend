import { useId } from "react";
import { Separator } from "@/components/ui/separator";
import { FormText } from "@/components/form-ui/form-text";
import { FormField } from "@/components/form-ui/form-field";
import { BidPackageSideDrawer } from "./BidPackageDrawer";

export function ConstructionInfoSnapshotForm() {
  const prefix = useId();

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
          fullWidth
        />

        {/* Budget */}
        <FormField
          htmlFor={`${prefix}-budget`}
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
        />

        {/* Budget string */}
        <FormField
          htmlFor={`${prefix}-budget-str`}
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
        />

        {/* Estimated cost */}
        <FormField
          htmlFor={`${prefix}-est-cost`}
          label="Dự toán (số)"
          type="number"
          placeholder="0"
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor={`${prefix}-est-cost-str`}
          label="Dự toán (chữ)"
          placeholder="VD: Hai tỷ đồng"
        />

        {/* Source of funds */}
        <FormField
          htmlFor={`${prefix}-source`}
          label="Nguồn vốn"
          placeholder="Nguồn vốn (VD: 2026)"
        />
        <span />
        <Separator className="col-span-2" />

        {/* Start date */}
        <FormField
          htmlFor={`${prefix}-start`}
          label="Ngày bắt đầu thực hiện"
          type="date"
        />

        {/* End date */}
        <FormField
          htmlFor={`${prefix}-end`}
          label="Ngày kết thúc thực hiện"
          type="date"
        />

        {/* Existing condition */}
        <FormText
          htmlFor={`${prefix}-condition`}
          label="Hiện trạng công trình"
          placeholder="Mô tả hiện trạng..."
          fullWidth
        />

        {/* Repair scope */}
        <FormText
          htmlFor={`${prefix}-repair`}
          label="Phạm vi sửa chữa"
          className="bg-accent"
          placeholder="Phạm vi công việc sửa chữa..."
          fullWidth
        />
      </div>

      {/* Bid packages */}
      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <BidPackageSideDrawer />
      </div>
      {/* 
      <div className="flex flex-col gap-3">
        <BidPackageSnapshotForm />
      </div> */}
    </div>
  );
}
