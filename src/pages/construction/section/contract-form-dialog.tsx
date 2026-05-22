import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { BidPackageSnapshot, Contract } from "@/types/domain";
import { Button } from "@/components/ui/button";
import { ContractForm } from "./contract-form";

type Props = {
  contract: Contract;
  bidPackage: BidPackageSnapshot;
};

export function ContractFormDialog({ contract, bidPackage }: Props) {
  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger className="duration-200 text-sm px-6 py-1 border border-black rounded-2xl bg-brand-light text-brand hover:bg-destructive hover:text-white">
        Chỉnh sửa hợp đồng
      </DialogTrigger>
      <DialogContent className="px-8 py-14">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa hợp đồng</DialogTitle>
          <DialogDescription>gói thầu {bidPackage.type}</DialogDescription>
        </DialogHeader>
        <ContractForm
          contract={contract}
          method="put"
          // pass bid_package_id to the the search param to invalid query  ["contract", bid_package_id] after mutation
          action={`/hop-dong/chinh-sua/${contract.id}?bid_package_id=${bidPackage.id}`}
          formFooter={() => (
            <Button
              type="submit"
              className="bg-primary hover:bg-accent hover:text-primary hover:border-primary"
            >
              Cập nhật
            </Button>
          )}
        />
      </DialogContent>
    </Dialog>
  );
}
