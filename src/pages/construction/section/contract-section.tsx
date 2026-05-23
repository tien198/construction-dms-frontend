import { useQuery } from "@tanstack/react-query";
import { getContractByBidPackageId } from "@/api/contract";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { EditContractFormDialog } from "./edit-contract-form-dialog";
import { CreateContractFormDialog } from "./create-contract-form-dialog";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

type Props = {
  bidPackage: BidPackageSnapshotPost;
};

export function ContractSection({ bidPackage }: Props) {
  const { data } = useQuery({
    queryKey: ["contract", bidPackage.id],
    queryFn: () =>
      bidPackage.id ? getContractByBidPackageId(bidPackage.id) : null,
  });

  if (!data) {
    return <CreateContractFormDialog bidPackage={bidPackage} contract={null} />;
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
        <EditContractFormDialog bidPackage={bidPackage} contract={data} />
      </div>
    </div>
  );
}
