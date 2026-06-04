import type { Contract } from "@/types/domain";
import { Button } from "@/components/ui/button";
import { ContractForm } from "./contract-form";
import { DialogWrapper } from "@/components/shared/dialog-wraper";
import { useEffect, useRef } from "react";
import { useStore, type StoreApi } from "zustand";
import {
  contractFormStoreFactory,
  type ContractFormStore,
} from "./contract-form.store.factory";
import { PlusIcon } from "lucide-react";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

type Props = {
  contract: Contract | null;
  bidPackage: BidPackageSnapshotPost;
};

export function CreateContractFormDialog({ contract, bidPackage }: Props) {
  const contractStoreRef = useRef<StoreApi<ContractFormStore>>(null);
  if (!contractStoreRef.current) {
    contractStoreRef.current = contractFormStoreFactory(contract);
  }

  const contractStore = contractStoreRef.current;
  const { contract: contractState, setField } = useStore(
    contractStore,
    (state) => state,
  );

  useEffect(() => {
    if (bidPackage.bid_package_id) {
      setField("bid_package_id", bidPackage.bid_package_id);
    }
  }, [bidPackage.bid_package_id, setField]);

  return (
    <DialogWrapper
      dialogTitle={() => "Thêm hợp đồng"}
      dialogDescription={`gói thầu ${bidPackage.type}`}
      triggerElement={() => (
        <div className="flex items-center gap-2 duration-200 text-sm px-6 py-1 border border-black rounded-2xl bg-brand-light text-brand hover:bg-primary hover:text-white">
          <PlusIcon size={14} />
          Thêm hợp đồng
        </div>
      )}
      dialogContent={() => (
        <ContractForm
          contract={contractState}
          setContractField={setField}
          method="post"
          // pass bid_package_id to the the search param to invalid query  ["contract", bid_package_id] after mutation
          action={`/hop-dong/tao-moi?bid_package_id=${bidPackage.bid_package_id}`}
          formFooter={() => (
            <Button
              type="submit"
              className="bg-primary hover:bg-accent hover:text-primary hover:border-primary"
            >
              Thêm
            </Button>
          )}
        />
      )}
    />
  );
}
