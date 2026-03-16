import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getConstructions } from "@/mock-apis/get-constructions-list";
import { DocumentSide } from "./comps/DocumentSide";
import { ConstructionInfoSnapshotForm } from "./comps/ConstructionInfoSnapshotForm";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmissionEdit() {
  const [isEdit, setIsEdit] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["construction", "sub-1"],
    queryFn: async () => {
      const list = getConstructions();
      // Fetch mock data
      return list[0].decisions[0].submissions;
    }
  });

  const [submissionTv, setSubmissionTv] = useState<any>(null);
  const [submissionTt, setSubmissionTt] = useState<any>(null);
  const [constructionInfo, setConstructionInfo] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setSubmissionTv(data);
      setSubmissionTt({ ...data, type: "tt" });
      setConstructionInfo(data.construction_infor_snapshot);
    }
  }, [data]);

  if (isLoading || !submissionTv) {
    return <div className="p-8 text-center text-muted-foreground w-full">Đang tải dữ liệu...</div>;
  }

  const handleAdminDocChange = (field: string, value: any, type: string) => {
    const setState = type === "tv" ? setSubmissionTv : setSubmissionTt;
    setState((prev: any) => {
      if (field.includes(".")) {
        const [obj, key] = field.split(".");
        return {
          ...prev,
          [obj]: {
            ...prev[obj],
            [key]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleConstructionInfoChange = (field: string, value: any) => {
    setConstructionInfo((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleBidPackageChange = (index: number, field: string, value: any) => {
    setConstructionInfo((prev: any) => {
      const newBidPackages = [...prev.bid_package_snapshots];
      newBidPackages[index] = { ...newBidPackages[index], [field]: value };
      return { ...prev, bid_package_snapshots: newBidPackages };
    });
  };

  const handleSubmit = () => {
    // Handle submitting the edited data using TanStack Query mutation or similar here.
    setIsEdit(false); // Assuming we turn editing off, or if disabled=isEdit then wait...
  };

  return (
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Chi tiết Tờ trình
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Thông tin chi tiết của tờ trình.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEdit(!isEdit)}>
            <EditIcon className="mr-2 h-4 w-4" />
            Toggle isEdit (current: {String(isEdit)})
          </Button>
          <StickyRevealButton onClick={handleSubmit}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu Tờ trình
          </StickyRevealButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Submission info + directly attached Decision */}
        <DocumentSide 
          submissionTv={submissionTv}
          submissionTt={submissionTt}
          onChange={handleAdminDocChange}
          disabled={isEdit} 
        />
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm 
          infor={constructionInfo}
          onChange={handleConstructionInfoChange}
          onBidPackageChange={handleBidPackageChange}
          disabled={isEdit} 
        />
      </div>
    </div>
  );
}
