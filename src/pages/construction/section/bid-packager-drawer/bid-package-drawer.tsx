import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BidPackage } from "./bid-package.tsx";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type.ts";
import { ContractPreliminaryInfo } from "../contract-preliminary-info.tsx";

type Props = StoreApiInject & {
  displayContract?: boolean;
};

export function BidPackageSideDrawer({
  storeApi,
  disabled = false,
  displayContract = false,
}: Props) {
  const bidPackagesList = useStore(
    storeApi,
    (state) => state.submission.bid_package_snapshots,
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Các gói thầu</Button>
      </DrawerTrigger>
      <DrawerContent
        id="bid-package-drawer-content"
        className="top-32 -translate-x-1/2 md:w-[1550px] max-w-[90vw] left-1/2!"
      >
        <div className="mx-auto w-full overflow-auto">
          <DrawerHeader>
            <DrawerTitle className="text-primary">Gói thầu</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-12 p-4 pb-14">
            {bidPackagesList?.map((bp, id) => (
              <div key={bp.bid_package_id}>
                <BidPackage
                  index={id}
                  storeApi={storeApi}
                  disabled={disabled}
                  displayContract={displayContract}
                />
                {displayContract && (
                  <ContractPreliminaryInfo bidPackageId={bp.bid_package_id} />
                )}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
