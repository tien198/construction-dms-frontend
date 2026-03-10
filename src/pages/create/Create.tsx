import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, SaveIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { DecisionForm } from "./comps/DecisionForm";
import type {
  Construction,
  Decision,
  Submission,
  ConstructionInfoSnapshot,
  BidPackageSnapshot,
} from "@/types";

type FormSnapshot = Omit<
  ConstructionInfoSnapshot,
  "id" | "bid_package_snapshots"
> & {
  bid_package_snapshots: Omit<BidPackageSnapshot, "id">[];
};

type FormSubmission = Omit<Submission, "id" | "construction_infor_snapshot"> & {
  id: string;
  construction_infor_snapshot: FormSnapshot | null;
};

type FormDecision = Omit<Decision, "submissions"> & {
  submissions: FormSubmission[];
};

interface FormConstruction extends Omit<Construction, "decisions"> {
  decisions: FormDecision[];
}

const EMPTY_DECISION: FormDecision = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct_id: null,
  pursuant_to_dec_ttmn_id: null,
  is_change_construction_infor: false,
  submissions: [],
};

export default function Create() {
  const [data, setData] = useState<FormConstruction>({
    id: "",
    decisions: [{ ...EMPTY_DECISION }],
  });

  const handleDecisionChange = (
    index: number,
    field: keyof FormDecision,
    value: unknown,
  ) => {
    const newDecisions = [...data.decisions];
    newDecisions[index] = { ...newDecisions[index], [field]: value };
    setData((prev) => ({ ...prev, decisions: newDecisions }));
  };

  const addDecision = () => {
    setData((prev) => ({
      ...prev,
      decisions: [...prev.decisions, { ...EMPTY_DECISION }],
    }));
  };

  const removeDecision = (index: number) => {
    setData((prev) => ({
      ...prev,
      decisions: prev.decisions.filter((_, i) => i !== index),
    }));
  };

  const onSubmit = () => {
    console.log("Submit Construction Data:", data);
  };

  return (
    <div className="w-full border bg-background p-6 shadow-sm md:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tạo mới Công trình
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Nhập thông tin chi tiết để khởi tạo một công trình với các quyết
            định, tờ trình, và gói thầu.
          </p>
        </div>
        <Button onClick={onSubmit} className="self-start sm:self-auto">
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu công trình
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="space-y-8">
          {/* Construction Base Info */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Thông tin chung</h2>
            <div className="flex flex-col gap-2 lg:max-w-sm">
              <Label htmlFor="construction-id">Mã công trình (ID)</Label>
              <Input
                id="construction-id"
                placeholder="Ví dụ: CT-001"
                value={data.id}
                onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>
          </div>

          {/* Decisions List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-semibold">
                Danh sách Quyết định ({data.decisions.length})
              </h2>
              <Button onClick={addDecision} variant="secondary" size="sm">
                <PlusIcon className="mr-2 h-4 w-4" />
                Thêm Quyết định
              </Button>
            </div>

            {data.decisions.length === 0 ? (
              <div className="rounded-lg border border-dashed py-12 text-center text-muted-foreground">
                Chưa có quyết định nào. Bấm nút "Thêm Quyết định" để bắt đầu.
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {data.decisions.map((decision, idx) => (
                  <DecisionForm
                    key={`decision-${idx}`}
                    index={idx}
                    values={decision}
                    onChange={handleDecisionChange}
                    onRemove={removeDecision}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
