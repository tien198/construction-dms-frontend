import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { BidPackage } from "../../section/bid-packager-drawer/bid-package";

type Props = StoreApiInject & {
  displayContract?: boolean;
};

export function BidPackagesListBcktkt({
  storeApi,
  disabled,
  displayContract,
}: Props) {
  const bidPackagesList = useStore(
    storeApi,
    (state) => state.submission.bid_package_snapshots,
  );

  const completed = [];
  const inProgress = [];
  if (bidPackagesList) {
    for (let i = 0; i < bidPackagesList.length; i++) {
      const bp = bidPackagesList[i];
      if (bp.type !== "TC") completed.push(i);
      else if (bp.type === "TC") inProgress.push(i);
    }

    // completed.reverse();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-full text-center pt-10">
        <span className="text-lg bg-accent px-10 py-1 rounded-4xl">
          Các phần công việc đã thực hiện
        </span>
      </div>
      {completed?.map((bpIndex) => (
        <BidPackage
          key={bidPackagesList?.[bpIndex]?.bid_package_id}
          index={bpIndex}
          storeApi={storeApi}
          displayBidder
          displayContract={displayContract}
        />
      ))}
      <div className="col-span-full text-center pt-10">
        <span className="text-lg bg-accent px-10 py-1 rounded-4xl">
          Các phần công việc đang trong quá trình LCNT
        </span>
      </div>
      {inProgress?.map((bpIndex) => (
        <BidPackage
          key={bidPackagesList?.[bpIndex]?.bid_package_id}
          index={bpIndex}
          storeApi={storeApi}
          disabled={disabled}
          displayContract={displayContract}
        />
      ))}
    </div>
  );
}
