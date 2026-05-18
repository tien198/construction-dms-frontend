import { useState } from "react";
import { FormField } from "@/components/form-ui/form-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Bidder } from "@/types/domain";
import { BiddersList } from "./bidders-list";
import { useStore } from "zustand";
import type { StoreApiInject } from "@/store-factory/store-api-inject.type";
import type { BidPackageType } from "@/types/domain/decision/bid-package-snapshot.type";

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  bidPackageType: BidPackageType;
  disabled: boolean;
  selectedBidderId: string | null;
} & StoreApiInject;

export function BidderSelectionDialog({
  id,
  label,
  placeholder,
  bidPackageType,
  storeApi,
  disabled,
  selectedBidderId,
}: Props) {
  const [bidder, setBidder] = useState<Bidder | null>(null);
  const setBidPackageField = useStore(
    storeApi,
    (state) => state.setBidPackageField,
  );
  function handleSetBidder(bidder: Bidder) {
    setBidder(bidder);
    setBidPackageField(bidPackageType, "successful_bidder_id", bidder.id);
  }

  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger disabled={disabled}>
        <FormField
          id={id}
          label={label}
          value={bidder?.name ?? ""}
          placeholder={placeholder ?? "Chọn nhà thầu"}
          disabled={disabled}
          readOnly
        />
      </DialogTrigger>
      <DialogContent className="max-w-[90vw]! md:max-w-[30vw]!">
        <DialogHeader>
          <DialogTitle>Chọn Nhà Thầu</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="max-h-[80vh]! min-h-96! overflow-y-auto">
            <BiddersList
              handleSetBidder={handleSetBidder}
              selectedBidderId={selectedBidderId}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
