import { Label } from "@/components/ui/label";
import { EditFormField } from "./EditFormField";

type Props = {
  index: number;
  bidPackage: any;
  onChange: (index: number, field: string, value: any) => void;
  disabled?: boolean;
};

export function BidPackageSnapshotForm({ index, bidPackage, onChange, disabled }: Props) {
  if (!bidPackage) return null;

  return (
    <div className="relative w-full rounded-lg border border-border bg-muted/30 p-4">
      <div className="h-6" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`type-${index}`}>Gói {bidPackage.type}</Label>
        </div>

        <span />
        
        <EditFormField
          htmlFor={`budget-${index}`}
          label="Giá thầu (số)"
          type="number"
          placeholder="0"
          value={bidPackage.budget ?? ""}
          onChange={(e) => onChange(index, "budget", Number(e.target.value))}
          disabled={disabled}
        />

        <EditFormField
          htmlFor={`budget-str-${index}`}
          label="Giá thầu (chữ)"
          placeholder="Một tỷ đồng"
          value={bidPackage.budget_str ?? ""}
          onChange={(e) => onChange(index, "budget_str", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor={`sel-time-${index}`}
          label="Thời gian chọn thầu"
          type="date"
          value={bidPackage.bidder_selection_time ?? ""}
          onChange={(e) => onChange(index, "bidder_selection_time", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor={`duration-${index}`}
          label="Thời gian thực hiện"
          placeholder="10 ngày"
          value={bidPackage.duration ?? ""}
          onChange={(e) => onChange(index, "duration", e.target.value)}
          disabled={disabled}
        />

        <EditFormField
          htmlFor={`bidder-${index}`}
          label="Nhà trúng thầu"
          placeholder="Chọn nhà thầu"
          value={bidPackage.successful_bidder_id ?? ""}
          onChange={(e) => onChange(index, "successful_bidder_id", e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
