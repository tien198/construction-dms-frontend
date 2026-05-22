import { useQuery } from "@tanstack/react-query";
import { getContractByBidPackageId } from "@/api/contract";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { AddButton } from "@/components/shared/add-btn";
import type { BidPackageSnapshot } from "@/types/domain";
import { ContractFormDialog } from "./contract-form-dialog";

type Props = {
  bidPackage: BidPackageSnapshot;
};

export function ContractSection({ bidPackage }: Props) {
  const { data } = useQuery({
    queryKey: ["contract", bidPackage.id],
    queryFn: () => getContractByBidPackageId(bidPackage.id),
  });

  if (!data) {
    return (
      <AddButton
        title="Thêm hợp đồng"
        onClick={() => {}}
        className="rounded-2xl bg-primary/70 py-1 px-6 hover:bg-primary"
        iconSize={15}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormField
        id="contract-no"
        label="Số hợp đồng"
        value={data.no}
        disabled
        readOnly
      />
      <DatePicker
        id="contract-signing-date"
        label="Ngày ký hợp đồng"
        date={data.signing_date ? new Date(data.signing_date) : undefined}
        setDate={() => {}}
        disabled
      />
      <span />
      <div className="text-right">
        <ContractFormDialog bidPackage={bidPackage} contract={data} />
      </div>
    </div>
  );
}
