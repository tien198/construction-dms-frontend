import { SaveIcon } from "lucide-react";
import { DecisionForm } from "./comps/DecisionForm";
import type { FormDecision } from "./comps/DecisionForm.type";
import type { FormSubmission } from "./comps/SubmissionForm.type";
import { ConstructionInfoSnapshotForm } from "./comps/ConstructionInfoSnapshotForm";
import type { FormSnapshot } from "./comps/ConstructionInfoSnapshotForm.type";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";

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
  const handleDecisionChange = () => {
    // State removed - UI only
  };

  const handleSnapshotChange = () => {
    // State removed - UI only
  };

  return (
    <div className="w-full border p-6 shadow-sm md:p-8 bg-wood-grain">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground sm:text-3xl">
            Tạo mới Công Trình
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Nhập thông tin chi tiết để khởi tạo Công trình.
          </p>
        </div>
        {/* <Button className="p-4 self-start sm:self-auto"> */}
        <StickyRevealButton>
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu Công trình
        </StickyRevealButton>
        {/* </Button> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <DecisionForm
            values={EMPTY_DECISION}
            onChange={handleDecisionChange}
          />
        </div>
        <ConstructionInfoSnapshotForm
          values={EMPTY_SNAPSHOT}
          onChange={handleSnapshotChange}
        />
      </div>
    </div>
  );
}
