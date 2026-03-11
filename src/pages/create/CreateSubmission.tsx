import { useId } from "react";
import { SaveIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "./comps/ConstructionInfoSnapshotForm";
import { AdministrativeDocumentFields } from "./comps/AdministrativeDocumentFields";
import type { FormSnapshot } from "./comps/ConstructionInfoSnapshotForm.type";
import type { FormSubmission } from "./comps/SubmissionForm.type";

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
  directlyDecision: {
    no: "",
  },
  construction_infor_snapshot: { ...EMPTY_SNAPSHOT },
};

export default function CreateSubmission() {
  const decisionPrefix = useId();

  const handleSubmissionChange = () => {
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
            Tạo mới Tờ trình
          </h1>
          <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
            Nhập thông tin chi tiết để khởi tạo Tờ trình.
          </p>
        </div>
        <StickyRevealButton>
          <SaveIcon className="mr-2 h-4 w-4" />
          Lưu Tờ trình
        </StickyRevealButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Submission info + directly attached Decision */}
        <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Tờ trình - Quyết định
          </p>

          {/* Submission's own AdministrativeDocument fields */}
          <AdministrativeDocumentFields
            prefix="submission"
            values={{
              no: EMPTY_SUBMISSION.no,
              level: EMPTY_SUBMISSION.level,
              date: EMPTY_SUBMISSION.date,
              pursuant_to_dec_tct_id:
                EMPTY_SUBMISSION.pursuant_to_dec_tct_id ?? "",
              pursuant_to_dec_ttmn_id:
                EMPTY_SUBMISSION.pursuant_to_dec_ttmn_id ?? "",
            }}
            onChange={handleSubmissionChange}
          />

          {/* directlyDecision - the decision that directly approved this submission */}
          <Separator className="my-5" />
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-muted-foreground">
              Quyết định phê duyệt trực tiếp
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-foreground">
              Thông tin Quyết định
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor={`${decisionPrefix}-no`}>
                  Số văn bản quyết định (No)
                </Label>
                <Input
                  id={`${decisionPrefix}-no`}
                  placeholder="VD: 01/QĐ-..."
                  defaultValue={EMPTY_SUBMISSION.directlyDecision.no}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm
          values={EMPTY_SNAPSHOT}
          onChange={handleSnapshotChange}
        />
      </div>
    </div>
  );
}
