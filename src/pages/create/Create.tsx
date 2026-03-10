import { useState } from "react";
import { SaveIcon } from "lucide-react";
import { DecisionForm } from "./comps/DecisionForm";
import type { FormDecision } from "./comps/DecisionForm.type";
import type { FormSubmission } from "./comps/SubmissionForm.type";
import { ConstructionInfoSnapshotForm } from "./comps/ConstructionInfoSnapshotForm";
import type { FormSnapshot } from "./comps/ConstructionInfoSnapshotForm.type";
import type { ConstructionInfoSnapshot } from "@/types";
import StickyRevealButton from "@/components/sticky-reveal-button";

const EMPTY_SNAPSHOT: FormSnapshot = {
  period: "KH",
  name: "",
  budget: 0,
  budget_string: "",
  source_of_funds: "",
  implementation_start_date: "",
  implementation_end_date: "",
  existing_condition_of_the_structure: "",
  repair_scope: "",
  estimated_cost: 0,
  estimated_cost_string: "",
  bid_package_snapshots: [],
};

const EMPTY_SUBMISSION: FormSubmission = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct_id: null,
  pursuant_to_dec_ttmn_id: null,
  construction_infor_snapshot: { ...EMPTY_SNAPSHOT },
};

const EMPTY_DECISION: FormDecision = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct_id: null,
  pursuant_to_dec_ttmn_id: null,
  is_change_construction_infor: false,
  submissions: { ...EMPTY_SUBMISSION },
};

export default function Create() {
  const [data, setData] = useState<FormDecision>({
    ...EMPTY_DECISION,
  });

  const handleDecisionChange = (field: keyof FormDecision, value: unknown) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSnapshotChange = (
    field: keyof ConstructionInfoSnapshot,
    value: unknown,
  ) => {
    setData((prev) => {
      const snap = prev.submissions.construction_infor_snapshot;
      if (!snap) return prev;
      return {
        ...prev,
        submissions: {
          ...prev.submissions,
          construction_infor_snapshot: { ...snap, [field]: value },
        },
      };
    });
  };

  const onSubmit = () => {
    console.log("Submit Decision Data:", data);
  };

  return (
    <div className="w-full border bg-background p-6 shadow-sm md:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tạo mới Công Trình
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Nhập thông tin chi tiết để khởi tạo Công trình.
          </p>
        </div>
        {/* <Button onClick={onSubmit} className="p-4 self-start sm:self-auto"> */}
        <StickyRevealButton onClick={onSubmit}>
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu Công trình
        </StickyRevealButton>
        {/* </Button> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <DecisionForm values={data} onChange={handleDecisionChange} />
        </div>
        <ConstructionInfoSnapshotForm
          values={data.submissions.construction_infor_snapshot}
          onChange={handleSnapshotChange}
        />
      </div>
    </div>
  );
}
