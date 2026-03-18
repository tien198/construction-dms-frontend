import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { AdministrativeDocumentFields } from "../comps/AdministrativeDocumentFields";
import { useFetcher } from "react-router";
import { create_bcktkt_store } from "./create-store";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";

export function BcktktCreate() {
  const fetcher = useFetcher();
  const handleSubmit = () => {
    return fetcher.submit(null, {
      method: "post",
      encType: "application/json",
    });
  };

  const storeApi = create_bcktkt_store;

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle title="Tạo BCKTKT" description="Nhập thông tin BCKTKT." />
        <ActionBtns>
          <StickyRevealButton onClick={() => handleSubmit()}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu BCKTKT
          </StickyRevealButton>
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div className="flex flex-col gap-6">
          <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
            <p className="mb-6 text-sm font-semibold text-foreground">
              Tờ trình - Quyết định BCKTKT
            </p>
            <AdministrativeDocumentFields type="bcktkt" storeApi={storeApi} />
          </div>
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} />
      </div>
    </FormLayout>
  );
}
