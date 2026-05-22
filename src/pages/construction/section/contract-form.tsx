import { useFetcher, type FetcherFormProps } from "react-router";
import { DatePicker } from "@/components/form-ui/date-picker";
import { FormField } from "@/components/form-ui/form-field";
import type { Contract } from "@/types/domain";
import { useRef } from "react";
import { useStore, type StoreApi } from "zustand";
import {
  contractFormStoreFactory,
  type ContractFormStore,
} from "./contract-form.store.factory";

type Props = {
  contract: Contract;
  formFooter: () => React.ReactNode;
} & FetcherFormProps;

export function ContractForm({ contract, formFooter, ...props }: Props) {
  const contractStoreRef = useRef<StoreApi<ContractFormStore>>(null);
  if (!contractStoreRef.current) {
    contractStoreRef.current = contractFormStoreFactory(contract);
  }

  const contractStore = contractStoreRef.current;
  const { contract: contractState, setField } = useStore(
    contractStore,
    (state) => state,
  );

  const fetcher = useFetcher();
  return (
    <fetcher.Form className="flex flex-col gap-5 justify-between" {...props}>
      <FormField
        id="contract-no"
        label="Số hợp đồng"
        name="no"
        value={contractState.no}
        onChange={(e) => setField("no", e.target.value)}
        fullWidth
      />
      <DatePicker
        id="contract-signing-date"
        label="Ngày ký hợp đồng"
        name="signing_date"
        date={new Date(contractState.signing_date)}
        setDate={(date) => setField("signing_date", date?.toISOString() ?? "")}
      />
      {formFooter()}
    </fetcher.Form>
  );
}
