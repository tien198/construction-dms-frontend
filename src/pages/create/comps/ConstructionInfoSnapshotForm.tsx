import { Separator } from "@/components/ui/separator";
import { FormText } from "@/components/form-ui/form-text";
import { FormField } from "@/components/form-ui/form-field";
import { BidPackageSideDrawer } from "./BidPackageDrawer";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";

export function ConstructionInfoSnapshotForm() {
  const infor = useStore(
    createSubmission_store,
    (state) => state.submission.construction_infor_snapshot,
  );

  return (
    <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      <p className="mb-6 text-sm font-semibold text-foreground">
        Thông tin công trình
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <FormField
          htmlFor="name"
          label="Tên công trình"
          placeholder="Tên công trình"
          fullWidth
          value={infor.name}
        />

        {/* Budget */}
        <FormField
          htmlFor="budget"
          label="Ngân sách (số)"
          type="number"
          placeholder="0"
          value={infor.budget}
        />

        {/* Budget string */}
        <FormField
          htmlFor="budget-str"
          label="Ngân sách (chữ)"
          placeholder="VD: Một tỷ đồng"
          value={infor.budget_str}
        />

        {/* Estimated cost */}
        <FormField
          htmlFor="est-cost"
          label="Dự toán (số)"
          type="number"
          placeholder="0"
          value={infor.est_cost}
        />

        {/* Estimated cost string */}
        <FormField
          htmlFor="est-cost-str"
          label="Dự toán (chữ)"
          placeholder="Hai tỷ đồng"
          value={infor.est_cost_str}
        />

        {/* Source of funds */}
        <FormField
          htmlFor="source"
          label="Nguồn vốn"
          placeholder="VD: 2026"
          value={infor.source_of_funds}
        />
        <span />
        <Separator className="col-span-2" />

        {/* Start date */}
        <FormField
          htmlFor="start-date"
          label="Ngày bắt đầu thực hiện"
          type="date"
          value={infor.impl_start_date}
        />

        {/* End date */}
        <FormField
          htmlFor="end-date"
          label="Ngày kết thúc thực hiện"
          type="date"
          value={infor.impl_end_date}
        />

        {/* Existing condition */}
        <FormText
          htmlFor="existing-condition"
          label="Hiện trạng công trình"
          placeholder="Mô tả hiện trạng..."
          fullWidth
          value={infor.existing_condition_of_the_structure}
        />

        {/* Repair scope */}
        <FormText
          htmlFor="repair-scope"
          label="Phạm vi sửa chữa"
          className="bg-accent"
          placeholder="Phạm vi công việc sửa chữa..."
          fullWidth
          value={infor.repair_scope}
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
