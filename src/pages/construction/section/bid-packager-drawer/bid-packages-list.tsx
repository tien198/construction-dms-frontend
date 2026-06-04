import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { BidPackage } from "./bid-package.tsx";

type Props = StoreApiInject & {
  displayContract?: boolean;
  displayBidder?: boolean;
};

export function BidPackagesList({
  storeApi,
  disabled,
  displayBidder,
  displayContract,
}: Props) {
  const bidPackagesList = useStore(
    storeApi,
    (state) => state.submission.bid_package_snapshots,
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {bidPackagesList?.map((bp, id) => (
        <BidPackage
          key={bp.bid_package_id}
          index={id}
          storeApi={storeApi}
          disabled={disabled}
          displayBidder={displayBidder}
          displayContract={displayContract}
        />
      ))}
    </div>
  );
}
