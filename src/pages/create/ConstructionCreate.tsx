import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "./comps/ConstructionInfoSnapshotForm";
import { DocumentSide } from "./comps/DocumentSide";
import { useFetcher } from "react-router";

export default function ConstructionCreate() {
  const fetcher = useFetcher();
  const handleSubmit = () => {
    return fetcher.submit(null, {
      method: "post",
      encType: "application/json",
    });
  };
  return (
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Tạo Công Trình mới
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Nhập thông tin chi tiết để khởi tạo Tờ trình.
          </p>
        </div>
        <StickyRevealButton onClick={() => handleSubmit()}>
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu Tờ trình
        </StickyRevealButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Submission info + directly attached Decision */}
        <DocumentSide />
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm />
      </div>
    </div>
  );
}
