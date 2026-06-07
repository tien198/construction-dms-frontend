import { SaveIcon } from "lucide-react";
import { ConstructionInfoSnapshotForm } from "../comps/construction-info-snapshot-form";
import { DocumentSide } from "../comps/document-side";
import { useFetcher } from "react-router";
import { create_construction_store } from "./create-store";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { Separator } from "@/components/ui/separator";
import { BidPackagesList } from "../section/bid-packager-drawer/bid-packages-list";
import StickyReveal from "@/components/form-ui/sticky-reveal-button";
import { Button } from "@/components/ui/button";

export namespace KhLcnt {
  export function Create() {
    const fetcher = useFetcher();
    const handleSubmit = () => {
      return fetcher.submit(null, {
        method: "post",
        encType: "application/json",
      });
    };

    const storeApi = create_construction_store;
    return (
      <FormLayout>
        <FormHeader>
          <FormTitle
            title="Tạo Công Trình mới"
            description="Nhập thông tin chi tiết để khởi tạo Tờ trình."
          />
          <ActionBtns>
            <StickyReveal
              stickyEl={() => (
                <Button onClick={() => handleSubmit()}>
                  <SaveIcon className="mr-2 h-4 w-4" />
                  Lưu Tờ trình
                </Button>
              )}
            />
          </ActionBtns>
        </FormHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Submission info + directly attached Decision */}
          <DocumentSide storeApi={storeApi} />
          {/* Right: Construction info snapshot */}
          <ConstructionInfoSnapshotForm storeApi={storeApi} />
        </div>
        <Separator className="my-5" />
        <BidPackagesList storeApi={storeApi} />
      </FormLayout>
    );
  }
}
