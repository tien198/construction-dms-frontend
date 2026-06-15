import { Separator } from "@/components/ui/separator";
import { FormText } from "@/components/form-ui/form-text";
import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../store-factory/store-api-inject.type";
import { DatePicker } from "@/components/form-ui/date-picker";
import { monthFormat } from "@/ultil/month-format";

type Props = StoreApiInject;

export function ConstructionInfoSnapshotForm({
  storeApi,
  disabled = false,
}: Props) {
  const infor = useStore(
    storeApi,
    (state) => state.submission.construction_info_snapshot,
  );

  const setField = useStore(storeApi, (state) => state.setField);

  if (!infor) {
    return <div>Chưa có thông tin công trình.</div>;
  }

  return (
    <div className="bg-brand relative rounded-4xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      <p className="mb-6 text-sm font-semibold text-foreground">
        Thông tin công trình
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <FormField
          id="name"
          label="Tên công trình"
          placeholder="Tên công trình"
          fullWidth
          value={infor.name}
          onChange={(e) =>
            setField("construction_info_snapshot.name", e.target.value)
          }
          disabled={disabled}
        />

        {/* est_cost */}
        <FormField
          id="est_cost"
          label="Chi phí sửa chữa dự kiến (số)"
          type="number"
          placeholder="0"
          value={infor.est_cost}
          onChange={(e) =>
            setField(
              "construction_info_snapshot.est_cost",
              Number(e.target.value),
            )
          }
          disabled={disabled}
        />

        {/* est_cost string */}
        <FormField
          id="est_cost-str"
          label="Chi phí sửa chữa dự kiến (chữ)"
          placeholder="Một tỷ đồng"
          value={infor.est_cost_str}
          onChange={(e) =>
            setField("construction_info_snapshot.est_cost_str", e.target.value)
          }
          disabled={disabled}
        />

        {/* Source of funds */}
        <FormField
          id="source"
          label="Nguồn vốn"
          placeholder="2026"
          value={infor.source_of_funds}
          onChange={(e) =>
            setField(
              "construction_info_snapshot.source_of_funds",
              e.target.value,
            )
          }
          disabled={disabled}
        />
        <span />
        <Separator className="col-span-2" />

        <div className="col-span-2 text-sm flex gap-6 items-center flex-1">
          <p className=" font-medium">
            Thời gian thực hiện (dựa trên ngày bắt đầu và kết thúc):
          </p>
          <p className="bg-accent rounded-xl px-6 py-1 border">
            {implDurationFormat(infor.impl_start_date, infor.impl_end_date)}
          </p>
        </div>

        {/* Start date */}
        <DatePicker
          id="start-date"
          label="Ngày bắt đầu thực hiện"
          date={
            infor.impl_start_date ? new Date(infor.impl_start_date) : undefined
          }
          setDate={(date) =>
            setField("construction_info_snapshot.impl_start_date", date)
          }
          disabled={disabled}
        />

        {/* End date */}
        <DatePicker
          id="end-date"
          label="Ngày kết thúc thực hiện"
          date={infor.impl_end_date ? new Date(infor.impl_end_date) : undefined}
          setDate={(date) =>
            setField("construction_info_snapshot.impl_end_date", date)
          }
          disabled={disabled}
        />

        {/* Existing condition */}
        <FormText
          id="existing-condition"
          label="Hiện trạng công trình"
          placeholder="Mô tả hiện trạng..."
          fullWidth
          value={infor.existing_condition_of_the_structure}
          onChange={(e) =>
            setField(
              "construction_info_snapshot.existing_condition_of_the_structure",
              e.target.value,
            )
          }
          disabled={disabled}
        />

        {/* Repair scope */}
        <FormText
          id="repair-scope"
          label="Phạm vi sửa chữa"
          className="bg-accent"
          placeholder="Phạm vi công việc sửa chữa..."
          fullWidth
          value={infor.repair_scope}
          onChange={(e) =>
            setField("construction_info_snapshot.repair_scope", e.target.value)
          }
          disabled={disabled}
        />
      </div>

      {/* Bid packages */}
      {/* <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <BidPackageSideDrawer
          storeApi={storeApi}
          disabled={disabled}
          displayContract
        />
      </div> */}
      {/* 
      <div className="flex flex-col gap-3">
        <BidPackageSnapshotForm />
      </div> */}
    </div>
  );
}

function implDurationFormat(
  startDate: string | null = null,
  endDate: string | null = null,
): string {
  let cta = "";
  if (!startDate && !endDate) {
    cta = "Chọn ngày bắt đầu và kết thúc";
  } else if (!startDate) {
    cta = "Chọn ngày bắt đầu";
  } else if (!endDate) {
    cta = "Chọn ngày kết thúc";
  }
  if (!startDate || !endDate) return cta;

  const startMonth = monthFormat(startDate).toLowerCase();
  const endMonth = monthFormat(endDate).toLowerCase();
  const endYear = new Date(endDate).getFullYear();
  return `Từ ${startMonth} - ${endMonth} năm ${endYear}`;
}
