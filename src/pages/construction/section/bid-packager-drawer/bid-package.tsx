import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";

import { DatePicker } from "@/components/form-ui/date-picker";
import { BidderSelectionDialog } from "../../comps/bidder-selection-dialog";
import { ContractPreliminaryInfo } from "../contract-preliminary-info";
import { monthFormat } from "@/ultil/month-format";

type Props = {
  index: number;
  displayBidder?: boolean;
  displayContract?: boolean;
} & StoreApiInject;

export function BidPackage({
  index,
  storeApi,
  disabled = false,
  displayBidder = false,
  displayContract = false,
}: Props) {
  const bp = useStore(
    storeApi,
    (state) => state.submission.bid_package_snapshots?.[index],
  );

  const setBidPackageField = useStore(
    storeApi,
    (state) => state.setBidPackageField,
  );

  if (!bp) {
    return <></>;
  }

  return (
    <div className="rounded-4xl border border-border bg-white p-6 flex flex-col gap-6 justify-around">
      <div className="relative w-full rounded-lg border border-border bg-muted/30 p-4">
        <div className="h-6" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Type — Select, not an Input */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="type">Gói {bp.type}</Label>
          </div>

          <span />

          {/* Bid package name */}
          {/* 
        <FormField
          htmlFor="name"
          label="Tên gói thầu"
          placeholder="Tên gói thầu"
          value={bp.bid_package_name}
          fullWidth
          onChange={(e) =>
            setBidPackage(bp.type, "bid_package_name", e.target.value)
          }
          disabled={disabled}
        />
         */}

          {/* Short description */}
          {/* 
        <FormText
          htmlFor="desc"
          label="Mô tả ngắn"
          placeholder="Mô tả ngắn về gói thầu..."
          value={bp.short_description}
          fullWidth
          onChange={(e) =>
            setBidPackage(bp.type, "short_description", e.target.value)
          }
          disabled={disabled}
        />
         */}

          {/* est_cost */}
          <FormField
            id="est_cost"
            label="Giá thầu (số)"
            type="number"
            placeholder="0"
            value={bp.est_cost}
            onChange={(e) =>
              setBidPackageField(bp.type, "est_cost", Number(e.target.value))
            }
            disabled={disabled}
          />

          {/* est_cost string */}
          <FormField
            id="est_cost-str"
            label="Giá thầu (chữ)"
            placeholder="Một tỷ đồng"
            value={bp.est_cost_str}
            onChange={(e) =>
              setBidPackageField(bp.type, "est_cost_str", e.target.value)
            }
            disabled={disabled}
          />

          {/* Estimated cost */}
          {/* 
        <FormField
          htmlFor="est-cost"
          label="Dự toán (số)"
          type="number"
          placeholder="0"
          value={bp.est_cost}
          onChange={(e) =>
            setBidPackage(bp.type, "est_cost", Number(e.target.value))
          }
          disabled={disabled}
        />
         */}

          {/* Estimated cost string */}
          {/* 
        <FormField
          htmlFor="est-cost-str"
          label="Dự toán (chữ)"
          placeholder="Một tỷ đồng"
          value={bp.est_cost_str}
          onChange={(e) =>
            setBidPackage(bp.type, "est_cost_str", e.target.value)
          }
          disabled={disabled}
        />
*/}

          {/* Bidder selection time */}
          <div className="col-span-2 text-sm grid grid-cols-2 gap-6 items-center flex-1">
            <div>
              <p className=" font-medium">
                Thời gian bắt đầu tổ chức lựa chọn nhà thầu:
              </p>
              <p className="bg-accent rounded-xl px-6 py-1 border">
                {monthFormat(bp.bidder_selection_time)}
              </p>
            </div>
            <DatePicker
              id="sel-time"
              date={
                bp.bidder_selection_time
                  ? new Date(bp.bidder_selection_time)
                  : undefined
              }
              setDate={(date) =>
                setBidPackageField(bp.type, "bidder_selection_time", date)
              }
              disabled={disabled}
            />
          </div>

          {/* Bidder selection method */}
          {/* <FormField
          htmlFor="sel-method"
          label="Hình thức chọn thầu"
          placeholder="VD: Đấu thầu rộng rãi"
          disabled={disabled}
        /> */}

          {/* Duration */}
          <FormField
            id="duration"
            label="Thời gian thực hiện"
            placeholder="10 ngày"
            value={bp.duration}
            onChange={(e) =>
              setBidPackageField(bp.type, "duration", e.target.value)
            }
            disabled={disabled}
          />

          {/* Successful bidder ID */}
          {displayBidder && (
            <BidderSelectionDialog
              bidPackageType={bp.type}
              id="bidder"
              label="Nhà trúng thầu"
              placeholder="Chọn nhà thầu"
              selectedBidderId={bp.successful_bidder_id}
              storeApi={storeApi}
              disabled={disabled}
            />
          )}
        </div>
      </div>
      {displayContract && (
        <ContractPreliminaryInfo bidPackageId={bp.bid_package_id} />
      )}
    </div>
  );
}
