import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";

export function BidPackageSideDrawer() {
  const bidPackagesList = useStore(
    createSubmission_store,
    (state) =>
      state.submission.construction_infor_snapshot!.bid_package_snapshots,
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Các gói thầu</Button>
      </DrawerTrigger>
      <DrawerOverlay className="bg-black/60" />
      <DrawerContent className="top-32 -translate-x-1/2 md:w-[1550px] left-1/2!">
        <div className="mx-auto w-full overflow-auto">
          <DrawerHeader>
            <DrawerTitle className="text-primary">Gói thầu</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-12 p-4 pb-14">
            {bidPackagesList.map((_, id) => (
              <BidPackageSnapshotForm key={id} index={id} />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
