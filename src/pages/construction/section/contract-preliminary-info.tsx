import { DatePicker } from "@/components/form-ui/date-picker";
import { FormField } from "@/components/form-ui/form-field";
import { useQuery } from "@tanstack/react-query";
import { getContractByBidPackageId } from "@/api/contract";

type Props = {
  bidPackageId?: string | null;
};

export function ContractPreliminaryInfo({ bidPackageId }: Props) {
  const { data } = useQuery({
    queryKey: ["contract", bidPackageId],
    queryFn: () =>
      bidPackageId ? getContractByBidPackageId(bidPackageId) : null,
    // enabled: false,
    retry: false,
  });

  if (!data) {
    return (
      <div className="flex justify-center items-center h-10 w-full rounded-4xl bg-destructive/40">
        Chưa có thông tin hợp đồng
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );
}
