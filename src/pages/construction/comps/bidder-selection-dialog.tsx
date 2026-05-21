import { useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getBiddersList } from "@/api/get-bidder";

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

  const query = useQuery({
    queryKey: ["bidders"],
    queryFn: () => getBiddersList(),
  });

  useEffect(() => {
    const bidder = query.data?.find((bidder) => bidder.id === selectedBidderId);
    if (bidder) {
      handleSetBidder(bidder);
    }
  }, [query.data, selectedBidderId]);

  if (query.isLoading || query.isFetching) {
    return (
      <div className="h-full flex items-center justify-center text-white">
        Tải nhà thầu...
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="h-full flex items-center justify-center text-red-500">
        Lỗi khi tải danh sách nhà thầu
      </div>
    );
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
              biddersList={query.data ?? []}
              handleSetBidder={handleSetBidder}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
