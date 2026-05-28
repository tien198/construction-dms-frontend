import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdministrativeDocumentFields } from "../../comps/administrative-document";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../../comps/layout/form-layout";
import { ConstructionInfoSnapshotForm } from "../../comps/construction-info-snapshot-form";
import { useSubmit } from "react-router";
import { useStore, type StoreApi } from "zustand";
import type { CreateSubmissionStore } from "../../../../store-factory/create-submission.store.type";
import type { Decision } from "@/types/domain";
import { decisionToSubmissionPost } from "../../../../ultil/decision-to-submision-post";
import { isEditingStoreFactory } from "../../../../store-factory/is-editing-store-factory";
import { Separator } from "@/components/ui/separator";
import { BidPackagesListBcktkt } from "./bid-ackages-list.bcktkt";

type Props = {
  storeApi: StoreApi<CreateSubmissionStore>;
  data: Decision;
};

const isEditingStore = isEditingStoreFactory();

// Detail also Edit form if `isEdit` is true
export function DetailSection({ data, storeApi }: Props) {
  const { isEditing, toggleIsEditing } = useStore(
    isEditingStore,
    (state) => state,
  );
  const disabled = !isEditing;

  const isEditToggle = () => {
    if (isEditing) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        toggleIsEditing();
        storeApi.getState().reset("BCKTKT", decisionToSubmissionPost(data));
      }
    } else {
      toggleIsEditing();
    }
  };

  const submit = useSubmit();

  const handleSubmit = () => {
    toggleIsEditing(false);
    submit(null, {
      method: "PUT",
      encType: "application/json",
      action: "chinh-sua",
    });
  };

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Chi tiết BCKTKT"
          description="Thông tin chi tiết của báo cáo khảo sát thiết kế."
        />
        <ActionBtns>
          <Button variant="outline" onClick={isEditToggle}>
            <EditIcon className="mr-2 h-4 w-4" />
            {disabled ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
          </Button>
          {isEditing && (
            <StickyRevealButton onClick={handleSubmit}>
              <SaveIcon className="mr-2 h-4 w-4" />
              Lưu BCKTKT
            </StickyRevealButton>
          )}
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div className="flex flex-col gap-6">
          <AdministrativeDocumentFields
            title="Tờ trình - Quyết định BCKTKT"
            type="bcktkt"
            storeApi={storeApi}
            disabled={disabled}
            decision={data}
          />
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} disabled={disabled} />
      </div>

      <Separator className="my-5" />
      <BidPackagesListBcktkt
        storeApi={storeApi}
        displayContract
        disabled={disabled}
      />
    </FormLayout>
  );
}
