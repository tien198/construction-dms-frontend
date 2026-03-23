/*
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
*/
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";

type Props = {
  index: number;
} & StoreApiInject;

export function BidPackageSnapshotForm({
  index,
  storeApi,
  disabled = false,
}: Props) {
  const bp = useStore(
    storeApi,
    (state) =>
      state.submission.construction_infor_snapshot!.bid_package_snapshots[
        index
      ],
  );

  const setBidPackage = useStore(storeApi, (state) => state.setBidPackage);

  return (
    <div className="relative w-full rounded-lg border border-border bg-muted/30 p-4">
      {/* Remove button */}
      {/* 
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-3 top-3 text-muted-foreground hover:text-destructive"
        aria-label="Xoá gói thầu"
      >
        <Trash2Icon />
      </Button>
 */}
      <div className="h-6" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Type — Select, not an Input */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="type">Gói {bp.type}</Label>
        </div>

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

        <span />
        {/* est_cost */}
        <FormField
          htmlFor="est_cost"
          label="Giá thầu (số)"
          type="number"
          placeholder="0"
          value={bp.est_cost}
          onChange={(e) =>
            setBidPackage(bp.type, "est_cost", Number(e.target.value))
          }
          disabled={disabled}
        />

        {/* est_cost string */}
        <FormField
          htmlFor="est_cost-str"
          label="Giá thầu (chữ)"
          placeholder="Một tỷ đồng"
          value={bp.est_cost_str}
          onChange={(e) =>
            setBidPackage(bp.type, "est_cost_str", e.target.value)
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
        <FormField
          htmlFor="sel-time"
          label="Thời gian chọn thầu"
          type="date"
          value={bp.bidder_selection_time}
          onChange={(e) =>
            setBidPackage(bp.type, "bidder_selection_time", e.target.value)
          }
          disabled={disabled}
        />

        {/* Bidder selection method */}
        {/* <FormField
          htmlFor="sel-method"
          label="Hình thức chọn thầu"
          placeholder="VD: Đấu thầu rộng rãi"
          disabled={disabled}
        /> */}

        {/* Duration */}
        <FormField
          htmlFor="duration"
          label="Thời gian thực hiện"
          placeholder="10 ngày"
          value={bp.duration}
          onChange={(e) => setBidPackage(bp.type, "duration", e.target.value)}
          disabled={disabled}
        />

        {/* Successful bidder ID */}
        <FormField
          htmlFor="bidder"
          label="Nhà trúng thầu"
          placeholder="Chọn nhà thầu"
          value={bp.successful_bidder_id ?? ""}
          onChange={(e) =>
            setBidPackage(bp.type, "successful_bidder_id", e.target.value)
          }
          disabled={disabled}
        />
      </div>
    </div>
  );
}
