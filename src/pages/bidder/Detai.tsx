import { BidderForm } from "./comp/bidderForm";
import { editBidderStore } from "./store/edit-bidder-store";
import { useDetail } from "./hook/detail-hook";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { EditIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Detail() {
  const { query, isEditing, isEditingToggle, handleSubmitEdit } = useDetail();

  if (query.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        Loadding ...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-12 py-16 bg-white rounded-[2.5rem] shadow-2xl shadow-accent-foreground ">
      <div className="flex items-center justify-between">
        <h1 className="mb-1 text-2xl font-semibold text-balance">
          Chi tiết nhà thầu
        </h1>
        <Button variant="outline" onClick={isEditingToggle}>
          <EditIcon className="h-4 w-4" />
          {!isEditing ? "Bật chỉnh sửa" : "Tắt chỉnh sửa"}
        </Button>
        {isEditing && (
          <StickyRevealButton onClick={handleSubmitEdit}>
            <SaveIcon className="h-4 w-4" />
            Lưu Tờ trình
          </StickyRevealButton>
        )}
      </div>

      <BidderForm disabled={!isEditing} storeApi={editBidderStore} />
    </div>
  );
}
