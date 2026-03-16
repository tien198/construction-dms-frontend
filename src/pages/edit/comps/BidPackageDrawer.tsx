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

type Props = {
  bidPackagesList: any[];
  onChange: (index: number, field: string, value: any) => void;
  disabled?: boolean;
};

export function BidPackageSideDrawer({ bidPackagesList, onChange, disabled }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" disabled={disabled}>Các gói thầu</Button>
      </DrawerTrigger>
      <DrawerOverlay className="bg-black/60" />
      <DrawerContent className="top-32 -translate-x-1/2 md:w-[1550px] max-w-[90vw] left-1/2!">
        <div className="mx-auto w-full overflow-auto">
          <DrawerHeader>
            <DrawerTitle className="text-primary">Gói thầu</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-12 p-4 pb-14">
            {bidPackagesList?.map((bp, id) => (
              <BidPackageSnapshotForm 
                key={id} 
                index={id} 
                bidPackage={bp} 
                onChange={onChange}
                disabled={disabled} 
              />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
