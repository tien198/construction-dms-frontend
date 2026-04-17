import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentSide } from "../comps/DocumentSide";
import { ConstructionInfoSnapshotForm } from "../comps/ConstructionInfoSnapshotForm";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { useDetail } from "./hook/useDetail";

export namespace KhLcnt {
  export function Detail() {
    const {
      conId,
      isLoading,
      data,
      isEdit,
      setIsEdit,
      isEditToggle,
      disabled,
      submit,
      storeApi,
    } = useDetail();

    if (isLoading) {
      return (
        <div className="p-8 text-center text-muted-foreground w-full">
          Đang tải dữ liệu...
        </div>
      );
    }

    if (!data?.result)
      return (
        <div className="p-8 text-center text-muted-foreground w-full">
          Không tồn tại công trình có id: {conId}
        </div>
      );

    const handleSubmit = () => {
      setIsEdit(false);
      submit(null, { method: "PUT", encType: "application/json" });
    };

    return (
      <FormLayout>
        <FormHeader>
          <FormTitle
            title="Chi tiết Tờ trình"
            description="Thông tin chi tiết của tờ trình."
          />
          <ActionBtns>
            <Button variant="outline" onClick={isEditToggle}>
              <EditIcon className="mr-2 h-4 w-4" />
              {disabled ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
            </Button>
            {isEdit && (
              <StickyRevealButton onClick={handleSubmit}>
                <SaveIcon className="mr-2 h-4 w-4" />
                Lưu Tờ trình
              </StickyRevealButton>
            )}
          </ActionBtns>
        </FormHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Submission info + directly attached Decision */}
          <DocumentSide
            storeApi={storeApi}
            disabled={disabled}
            decision={data.result}
          />
          {/* Right: Construction info snapshot */}
          <ConstructionInfoSnapshotForm
            storeApi={storeApi}
            disabled={disabled}
          />
        </div>
      </FormLayout>
    );
  }
}
