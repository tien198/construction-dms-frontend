import { useQuery } from "@tanstack/react-query";
import { getContractByBidPackageId } from "@/api/get-contract";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { AddButton } from "@/components/shared/add-btn";

type Props = {
  bidPackageId: string;
};

export function ContractSection({ bidPackageId }: Props) {
  const { data } = useQuery({
    queryKey: ["contract", bidPackageId],
    queryFn: () => getContractByBidPackageId(bidPackageId),
  });

  // if (!data) {
  return (
    <AddButton
      title="Thêm hợp đồng"
      onClick={() => {}}
      className="rounded-2xl bg-primary/70 py-1 px-6 hover:bg-primary"
      iconSize={15}
    />
  );
  // }

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
    </div>
  );
}
