import { useQuery } from "@tanstack/react-query";
import { getContractByBidPackageId } from "@/api/contract";
import { EditContractFormDialog } from "./edit-contract-form-dialog";
import { CreateContractFormDialog } from "./create-contract-form-dialog";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";
import { ContractPreliminaryInfo } from "./contract-preliminary-info";

type Props = {
  bidPackage: BidPackageSnapshotPost;
};

export function ContractSection({ bidPackage }: Props) {
  const { data } = useQuery({
    queryKey: ["contract", bidPackage.bid_package_id],
    queryFn: () =>
      bidPackage.bid_package_id
        ? getContractByBidPackageId(bidPackage.bid_package_id)
        : null,
  });

  if (!data) {
    return <CreateContractFormDialog bidPackage={bidPackage} contract={null} />;
  }

  return (
    <>
      <ContractPreliminaryInfo bidPackageId={bidPackage.bid_package_id!} />
      <div className="text-right">
        <EditContractFormDialog bidPackage={bidPackage} contract={data} />
      </div>
    </>
  );
}
