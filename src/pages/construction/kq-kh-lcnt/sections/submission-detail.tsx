import { BidPackage } from "../../section/bid-packager-drawer/bid-package";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { ContractSection } from "../../section/contract-section";
import { SideEl } from "../../comps/side-element.tsx";

type SubmissionDetailProps = StoreApiInject & {
  isEditing?: boolean;
  editAction?: () => React.ReactNode;
};

export function SubmissionDetail({
  storeApi,
  disabled = false,
  isEditing = true,
  editAction,
}: SubmissionDetailProps) {
  const sub = useStore(storeApi, (state) => state.submission);
  const bidPackage = sub.bid_package_snapshots?.[0];

  return (
    <div className="col-span-2 grid grid-cols-2 gap-6 border border-border rounded-4xl py-4 px-3 bg-brand">
      <div className="col-span-2 flex justify-end px-3 gap-3 items-center">
        {!disabled && editAction?.()}
      </div>
      <SideEl>
        <SubmissionSideEl
          storeApi={storeApi}
          disabled={disabled || !isEditing}
        />
      </SideEl>
      <SideEl>
        <BidPackage
          index={0}
          storeApi={storeApi}
          disabled={disabled || !isEditing}
          displayBidder
        />
      </SideEl>
      <span />
      {bidPackage && disabled && (
        <SideEl>
          <ContractSection bidPackage={bidPackage} />
        </SideEl>
      )}
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
