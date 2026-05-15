import { BidderForm } from "./comp/bidderForm";
import { createBidderStore } from "./store/create-bidder-store";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";

export function Create() {
  return (
    <div className="mx-auto max-w-3xl px-12 py-16 bg-white rounded-[2.5rem] shadow-2xl shadow-accent-foreground ">
      <h1 className="mb-1 text-2xl font-semibold text-balance">
        Thêm Nhà Thầu
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Điền đầy đủ thông tin nhà thầu vào biểu mẫu bên dưới.
      </p>
      <BidderForm
        storeApi={createBidderStore}
        footer={() => (
          <StickyRevealButton type="submit">Thêm Nhà Thầu</StickyRevealButton>
        )}
      />
    </div>
  );
}
