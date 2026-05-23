import { useFetcher, type FetcherFormProps } from "react-router";
import { DatePicker } from "@/components/form-ui/date-picker";
import { FormField } from "@/components/form-ui/form-field";
import type { Contract } from "@/types/domain";

type Props = {
  contract: Partial<Contract>;
  setContractField: <K extends keyof Contract>(
    key: K,
    value: Partial<Contract>[K],
  ) => void;
  formFooter: () => React.ReactNode;
} & FetcherFormProps;

export function ContractForm({
  contract,
  setContractField,
  formFooter,
  ...props
}: Props) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="flex flex-col gap-5 justify-between" {...props}>
      <input
        type="hidden"
        name="bid_package_id"
        value={contract.bid_package_id}
      />
      <FormField
        id="contract-no"
        label="Số hợp đồng"
        name="no"
        value={contract.no}
        onChange={(e) => setContractField("no", e.target.value)}
        fullWidth
      />
      <input type="hidden" name="signing_date" value={contract.signing_date} />
      <DatePicker
        id="contract-signing-date"
        label="Ngày ký hợp đồng"
        date={
          contract.signing_date ? new Date(contract.signing_date) : undefined
        }
        setDate={(date) =>
          setContractField("signing_date", date?.toISOString())
        }
      />
      {formFooter()}
    </fetcher.Form>
  );
}
