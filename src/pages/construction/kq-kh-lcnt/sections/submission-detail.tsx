import { BidPackage } from "../../section/bid-packager-drawer/bid-package";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { FormField } from "@/components/form-ui/form-field";
import { DatePicker } from "@/components/form-ui/date-picker";
import { ContractSection } from "../../section/contract-section";
import { SideEl } from "../../comps/side-element.tsx";
import { EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmissionDetailProps = StoreApiInject & {
  isEditing: boolean;
  onToggleEditing: () => void;
  editAction: () => React.ReactNode;
};

export function SubmissionDetail({
  storeApi,
  disabled,
  isEditing,
  onToggleEditing,
  editAction,
}: SubmissionDetailProps) {
  const sub = useStore(storeApi, (state) => state.submission);
  const bidPackage = sub.bid_package_snapshots?.[0];

  return (
    <div className="col-span-2 grid grid-cols-2 gap-6 border border-border rounded-4xl py-4 px-3 bg-brand">
      <div className="col-span-2 flex justify-end px-3 gap-3 items-center">
        {!disabled && (
          <EditToggleBtn
            isEditing={isEditing}
            onToggleEditing={onToggleEditing}
          />
        )}
        {isEditing && editAction()}
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

type ToggleBtnProps = {
  isEditing: boolean;
  onToggleEditing: () => void;
};

function EditToggleBtn({ isEditing, onToggleEditing }: ToggleBtnProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggleEditing}
      className={`hover:text-white hover:bg-primary ${isEditing && "text-destructive hover:bg-destructive hover:text-white"}`}
    >
      <EditIcon className="mr-2 h-4 w-4" />
      {isEditing ? "Hủy" : "Chỉnh sửa"}
    </Button>
  );
}
