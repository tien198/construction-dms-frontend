import { Separator } from "@/components/ui/separator";
import { EditFormText } from "./EditFormText";
import { EditFormField } from "./EditFormField";
import { BidPackageSideDrawer } from "./BidPackageDrawer";

type Props = {
  infor: any;
  onChange: (field: string, value: any) => void;
  onBidPackageChange: (index: number, field: string, value: any) => void;
  disabled?: boolean;
};

export function ConstructionInfoSnapshotForm({ infor, onChange, onBidPackageChange, disabled }: Props) {
  if (!infor) return null;

  return (
    <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      <p className="mb-6 text-sm font-semibold text-foreground">
        Thông tin công trình
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <EditFormField
          htmlFor="name"
          label="Tên công trình"
          placeholder="Tên công trình"
          fullWidth
          value={infor.name ?? ""}
          onChange={(e) => onChange("name", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor="budget"
          label="Chi phí sửa chữa dự kiến (số)"
          type="number"
          placeholder="0"
          value={infor.budget ?? ""}
          onChange={(e) => onChange("budget", Number(e.target.value))}
          disabled={disabled}
        />

        <EditFormField
          htmlFor="budget-str"
          label="Chi phí sửa chữa dự kiến (chữ)"
          placeholder="Một tỷ đồng"
          value={infor.budget_str ?? ""}
          onChange={(e) => onChange("budget_str", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor="source"
          label="Nguồn vốn"
          placeholder="2026"
          value={infor.source_of_funds ?? ""}
          onChange={(e) => onChange("source_of_funds", e.target.value)}
          disabled={disabled}
        />
        <span />
        <Separator className="col-span-2" />

        <EditFormField
          htmlFor="start-date"
          label="Ngày bắt đầu thực hiện"
          type="date"
          value={infor.impl_start_date ?? ""}
          onChange={(e) => onChange("impl_start_date", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor="end-date"
          label="Ngày kết thúc thực hiện"
          type="date"
          value={infor.impl_end_date ?? ""}
          onChange={(e) => onChange("impl_end_date", e.target.value)}
          disabled={disabled}
        />

        <EditFormText
          htmlFor="existing-condition"
          label="Hiện trạng công trình"
          placeholder="Mô tả hiện trạng..."
          fullWidth
          value={infor.existing_condition_of_the_structure ?? ""}
          onChange={(e) => onChange("existing_condition_of_the_structure", e.target.value)}
          disabled={disabled}
        />

        <EditFormText
          htmlFor="repair-scope"
          label="Phạm vi sửa chữa"
          className="bg-accent"
          placeholder="Phạm vi công việc sửa chữa..."
          fullWidth
          value={infor.repair_scope ?? ""}
          onChange={(e) => onChange("repair_scope", e.target.value)}
          disabled={disabled}
        />
      </div>

      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <BidPackageSideDrawer 
          bidPackagesList={infor.bid_package_snapshots} 
          onChange={onBidPackageChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
