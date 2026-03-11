import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BidPackageSnapshotForm } from "./BidPackageSnapshotForm";

export function BidPackageSideDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Các gói thầu</Button>
      </DrawerTrigger>
      <DrawerContent className="mt-4 md:max-h-[95vh]">
        <div className="mx-auto w-full overflow-auto">
          <DrawerHeader>
            <DrawerTitle className="text-primary">Gói thầu</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-12 p-4 pb-14">
            <BidPackageSnapshotForm />
            <BidPackageSnapshotForm />
            <BidPackageSnapshotForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
