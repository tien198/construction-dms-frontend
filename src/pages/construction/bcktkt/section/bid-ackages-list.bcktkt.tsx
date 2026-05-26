import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { BidPackage } from "../../section/bid-packager-drawer/bid-package";
import { useEffect, useState } from "react";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

type Props = StoreApiInject & {
  displayContract?: boolean;
  displayBidder?: boolean;
};

export function BidPackagesListBcktkt({
  storeApi,
  disabled,
  displayBidder,
  displayContract,
}: Props) {
  const bidPackagesList = useStore(
    storeApi,
    (state) => state.submission.bid_package_snapshots,
  );

  const completed = [0, 1];
  const inProgress = [2];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-full text-center pt-10">
        <span className="text-lg bg-accent px-10 py-1 rounded-4xl">
          Các phần công việc đã thực hiện
        </span>
      </div>
      {completed?.map((bpIndex) => (
        <BidPackage
          key={bidPackagesList?.[bpIndex]?.id}
          index={bpIndex}
          storeApi={storeApi}
          disabled
          displayBidder={displayBidder}
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
          key={bidPackagesList?.[bpIndex]?.id}
          index={bpIndex}
          storeApi={storeApi}
          disabled={disabled}
          displayBidder={displayBidder}
          displayContract={displayContract}
        />
      ))}
    </div>
  );
}
