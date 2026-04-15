import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import { DocumentSide } from "../comps/DocumentSide";
import { useFetcher } from "react-router";
import { create_construction_store } from "./create-store";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";

export default function KhLcnt_Create() {
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
          <StickyRevealButton onClick={() => handleSubmit()}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu Tờ trình
          </StickyRevealButton>
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Submission info + directly attached Decision */}
        <DocumentSide storeApi={storeApi} />
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} />
      </div>
    </FormLayout>
  );
}
