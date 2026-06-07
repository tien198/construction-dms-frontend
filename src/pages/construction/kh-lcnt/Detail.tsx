import { SaveIcon, EditIcon, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentSide } from "../comps/document-side";
import { ConstructionInfoSnapshotForm } from "../comps/construction-info-snapshot-form";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { useDetail } from "./hook/useDetail";
import { Separator } from "@/components/ui/separator";
import { BidPackagesList } from "../section/bid-packager-drawer/bid-packages-list";
import StickyReveal from "@/components/form-ui/sticky-reveal-button";
import { genDocument } from "@/api/gen-document";
import { useStore } from "zustand";
import type { Decision } from "@/types/domain";
import { exportDocx } from "@/ultil/export-file";

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

    const subId = useStore(storeApi, (state) => state.submission.id);

    if (isLoading) {
      return (
        <div className="p-8 text-center text-muted-foreground w-full">
          Đang tải dữ liệu...
        </div>
      );
    }

    if (!data)
      return (
        <div className="p-8 text-center text-muted-foreground w-full">
          Không tồn tại công trình có id: <i>"{conId}"</i>
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
            title="Kế hoạch LCNT"
            description="Thông tin chi tiết của kế hoạch LCNT."
          />
          <StickyReveal
            stickyEl={() => (
              <ActionBtns>
                <Button variant="outline" onClick={isEditToggle}>
                  <EditIcon className="mr-2 h-4 w-4" />
                  {disabled ? "Chỉnh sửa" : "Hủy"}
                </Button>
                {isEdit && (
                  <Button onClick={handleSubmit}>
                    <SaveIcon className="mr-2 h-4 w-4" />
                    Lưu Tờ trình
                  </Button>
                )}
                {disabled && (
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-white"
                    onClick={() => exportDocx(data)}
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Xuất file
                  </Button>
                )}
              </ActionBtns>
            )}
          />
        </FormHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Submission info + directly attached Decision */}
          <DocumentSide
            storeApi={storeApi}
            disabled={disabled}
            decision={data}
          />
          {/* Right: Construction info snapshot */}
          <ConstructionInfoSnapshotForm
            storeApi={storeApi}
            disabled={disabled}
          />
        </div>
        <Separator className="my-5" />
        <BidPackagesList storeApi={storeApi} disabled={disabled} />
      </FormLayout>
    );
  }
}
