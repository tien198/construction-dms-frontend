import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdministrativeDocumentFields } from "../../comps/AdministrativeDocumentFields";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../../comps/layout/form-layout";
import { ConstructionInfoSnapshotForm } from "../../comps/ConstructionInfoSnapshotForm";
import { useState } from "react";
import { useSubmit } from "react-router";
import type { StoreApi } from "zustand";
import type { CreateSubmissionStore } from "../../store-factory/create-submission.store.type";
import type { Decision } from "@/types";
import { decisionToSubmissionPost } from "../../ultil/decision-to-submision-post";

type Props = {
  storeApi: StoreApi<CreateSubmissionStore>;
  data: Decision;
};

// Detail also Edit form if `isEdit` is true
export function DetailComp({ data, storeApi }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit;

  const isEditToggle = () => {
    if (isEdit) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        setIsEdit((prev) => !prev);
        storeApi.getState().reset("KQ_KH_LCNT", decisionToSubmissionPost(data));
      }
    } else {
      setIsEdit((prev) => !prev);
    }
  };

  const submit = useSubmit();

  const handleSubmit = () => {
    setIsEdit(false);
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
          title="Chi tiết KQ KH LCNT"
          description="Thông tin chi tiết của báo cáo khảo sát thiết kế."
        />
        <ActionBtns>
          <Button variant="outline" onClick={isEditToggle}>
            <EditIcon className="mr-2 h-4 w-4" />
            {disabled ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
          </Button>
          {isEdit && (
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
            title="Tờ trình - Quyết định KQ KH LCNT"
            type="kq_kh_lcnt"
            storeApi={storeApi}
            disabled={disabled}
            decision={data}
          />
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} disabled={disabled} />
      </div>
    </FormLayout>
  );
}
