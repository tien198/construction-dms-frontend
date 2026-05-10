import { BidPackage } from "../../comps/BidPackage";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import type { PropsWithChildren } from "react";
import { FormField } from "@/components/form-ui/form-field";

export function SubmissionDetail({ storeApi }: StoreApiInject) {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-6 border border-border rounded-4xl py-4 px-3 bg-brand">
      <SideEl>
        <SubmissionSideEl storeApi={storeApi} />
      </SideEl>
      <SideEl>
        <BidPackage index={0} storeApi={storeApi} />
      </SideEl>
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
      <FormField
        id="date"
        label="Ngày"
        type="date"
        value={sub.date}
        onChange={(e) => setField("date", e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
