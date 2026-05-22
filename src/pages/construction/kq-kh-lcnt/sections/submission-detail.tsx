import { BidPackage } from "../../comps/bid-package.tsx";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import type { PropsWithChildren } from "react";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { ContractSection } from "./contract-section.tsx";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getDecisionByPer } from "@/api/get-decision-by-per.api.ts";

export function SubmissionDetail({ storeApi, disabled }: StoreApiInject) {
  const params = useParams();
  const constructionId = params["con-id"] as string;

  const { data } = useQuery({
    queryKey: ["kq-kh-lcnt", constructionId],
    queryFn: async () => {
      return await getDecisionByPer(constructionId, "KQ_KH_LCNT");
    },
    enabled: false,
    retry: false,
  });

  const bidPackageId = data?.submissions[0]?.bid_package_snapshots?.[0]?.id;

  return (
    <div className="col-span-2 grid grid-cols-2 gap-6 border border-border rounded-4xl py-4 px-3 bg-brand">
      <SideEl>
        <SubmissionSideEl storeApi={storeApi} disabled={disabled} />
      </SideEl>
      <SideEl>
        <BidPackage
          index={0}
          storeApi={storeApi}
          disabled={disabled}
          hasBidder
        />
      </SideEl>
      <span />
      {bidPackageId && disabled && (
        <SideEl>
          <ContractSection bidPackageId={bidPackageId} />
        </SideEl>
      )}
    </div>
  );
}

// side element
function SideEl(props: PropsWithChildren) {
  return (
    <div>
      <div className=" bg-brand bg-card p-5 shadow-xl shadow-accent-foreground rounded-xl border border-border w-full">
        {props.children}
      </div>
    </div>
  );
}

function SubmissionSideEl(props: StoreApiInject) {
  const sub = useStore(props.storeApi, (state) => state.submission);
  const setField = useStore(props.storeApi, (state) => state.setField);
  const disabled = props.disabled;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 px-5 py-7">
      <FormField
        id="no"
        label="Số T.Tr"
        placeholder="01/TTr-..."
        value={sub.no}
        onChange={(e) => setField("no", e.target.value)}
        disabled={disabled}
        fullWidth
      />
      <span />
      <DatePicker
        id="date"
        label="Ngày"
        date={sub.date ? new Date(sub.date) : undefined}
        setDate={(date) => setField("date", date)}
        disabled={disabled}
      />
    </div>
  );
}
