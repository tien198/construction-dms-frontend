import { BidderForm } from "./comp/bidderForm";
import { editBidderStore } from "./store/edit-bidder-store";
import { useDetail } from "./hook/detail-hook";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";

export function Detail() {
  const { query } = useDetail();

  if (query.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        Loadding ...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-12 py-16 bg-white rounded-[2.5rem] shadow-2xl shadow-accent-foreground ">
      <h1 className="mb-1 text-2xl font-semibold text-balance">
        Chi tiết nhà thầu
      </h1>

      <BidderForm
        disabled
        storeApi={editBidderStore}
        footer={() => (
          <StickyRevealButton type="submit">Lưu thay đổi</StickyRevealButton>
        )}
      />
    </div>
  );
}
