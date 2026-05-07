import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { Button } from "@/components/ui/button";
import { useCreate } from "./hooks/create-hook";
import { DecisionSection } from "./sections/decision-section";

export function Create() {
  const { handleSubmit, handleCancel, storeApi } = useCreate();

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Tạo KQ KH LCNT"
          description="Nhập thông tin KQ KH LCNT."
        />
        <ActionBtns>
          <Button
            variant="outline"
            className="bg-accent text-accent-foreground hover:bg-destructive hover:text-white"
            onClick={() => handleCancel()}
          >
            Hủy
          </Button>
          <StickyRevealButton onClick={() => handleSubmit()}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu KQ KH LCNT
          </StickyRevealButton>
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div className="flex flex-col gap-6">
          <DecisionSection storeApi={storeApi} />
          {/* <AdministrativeDocumentFields
            title="Tờ trình - Quyết định BCKTKT"
            type="kq_kh_lcnt"
            storeApi={storeApi}
          /> */}
        </div>
        {/* Right: Construction info snapshot */}
        {/* <ConstructionInfoSnapshotForm storeApi={storeApi} /> */}
      </div>
    </FormLayout>
  );
}
