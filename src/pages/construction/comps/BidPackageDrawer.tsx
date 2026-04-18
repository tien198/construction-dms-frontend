import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";
import { useStore } from "zustand";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";

type Props = StoreApiInject;

export function BidPackageSideDrawer({ storeApi, disabled = false }: Props) {
  const bidPackagesList = useStore(
    storeApi,
    (state) =>
      state.submission.construction_info_snapshot!.bid_package_snapshots,
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
            {bidPackagesList?.map((_, id) => (
              <BidPackageSnapshotForm
                key={id}
                index={id}
                storeApi={storeApi}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
