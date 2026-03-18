import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { AdministrativeDocumentFields } from "../comps/AdministrativeDocumentFields";
import { useFetcher } from "react-router";
import { create_bcktkt_store } from "./create-store";

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
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Tạo BCKTKT
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Nhập thông tin BCKTKT.
          </p>
        </div>
        <StickyRevealButton onClick={() => handleSubmit()}>
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu BCKTKT
        </StickyRevealButton>
      </div>

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
    </div>
  );
}
