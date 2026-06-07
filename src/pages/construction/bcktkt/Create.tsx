import { SaveIcon } from "lucide-react";
import { ConstructionInfoSnapshotForm } from "../comps/construction-info-snapshot-form";
import { AdministrativeDocumentFields } from "../comps/administrative-document";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { Button } from "@/components/ui/button";
import { useCreate } from "./hooks/create-hook";
import { Separator } from "@/components/ui/separator";
import { BidPackagesListBcktkt } from "./section/bid-ackages-list.bcktkt";
import StickyReveal from "@/components/form-ui/sticky-reveal-button";

export function Create() {
  const { handleSubmit, handleCancel, storeApi, decision } = useCreate();

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle title="Tạo BCKTKT" description="Nhập thông tin BCKTKT." />

        <StickyReveal
          stickyEl={() => (
            <ActionBtns>
              <Button
                variant="outline"
                className="bg-accent text-accent-foreground hover:bg-destructive hover:text-white"
                onClick={() => handleCancel()}
              >
                Hủy
              </Button>
              <Button onClick={() => handleSubmit()}>
                <SaveIcon className="mr-2 h-4 w-4" />
                Lưu BCKTKT
              </Button>
            </ActionBtns>
          )}
        />
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div>
          <AdministrativeDocumentFields
            title="Tờ trình - Quyết định BCKTKT"
            type="bcktkt"
            storeApi={storeApi}
            decision={decision}
          />
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} />
      </div>
      <Separator className="my-5" />
      <BidPackagesListBcktkt storeApi={storeApi} displayContract />
    </FormLayout>
  );
}
