import { Button } from "@/components/ui/button";
import { ContractForm } from "./contract-form";
import { DialogWrapper } from "@/components/shared/dialog-wraper";
import { useRef } from "react";
import { useStore, type StoreApi } from "zustand";
import {
  contractFormStoreFactory,
  type ContractFormStore,
} from "./contract-form.store.factory";

import type { Contract } from "@/types/domain";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

type Props = {
  contract: Contract;
  bidPackage: BidPackageSnapshotPost;
};

export function EditContractFormDialog({ contract, bidPackage }: Props) {
  const contractStoreRef = useRef<StoreApi<ContractFormStore>>(null);
  if (!contractStoreRef.current) {
    contractStoreRef.current = contractFormStoreFactory(contract);
  }

  const contractStore = contractStoreRef.current;
  const {
    contract: contractState,
    setField,
    reset,
  } = useStore(contractStore, (state) => state);

  function resetForm() {
    reset(contract);
  }

  return (
    <DialogWrapper
      dialogTitle={() => (
        <div className="flex items-center justify-between gap-10">
          <span>Chỉnh sửa hợp đồng</span>
          <Button type="button" variant="destructive" onClick={resetForm}>
            Reset
          </Button>
        </div>
      )}
      dialogDescription={`gói thầu ${bidPackage.type}`}
      triggerElement={() => (
        <span className="duration-200 text-sm px-6 py-1 border border-black rounded-2xl bg-brand-light text-brand hover:bg-destructive hover:text-white">
          Chỉnh sửa hợp đồng
        </span>
      )}
      dialogContent={() => (
        <ContractForm
          contract={contractState}
          setContractField={setField}
          method="put"
          // pass bid_package_id to the the search param to invalid query  ["contract", bid_package_id] after mutation
          action={`/hop-dong/chinh-sua/${contract.id}?bid_package_id=${bidPackage.bid_package_id}`}
          formFooter={() => (
            <Button
              type="submit"
              className="bg-primary hover:bg-accent hover:text-primary hover:border-primary"
            >
              Cập nhật
            </Button>
          )}
        />
      )}
    />
  );
}
