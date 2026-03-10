import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon, Trash2Icon } from "lucide-react";
import type {
  BidPackageSnapshot,
  ConstructionInfoSnapshot,
  Submission,
} from "@/types";
import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";
import { ConstructionInfoSnapshotForm } from "./ConstructionInfoSnapshotForm";

type FormSnapshot = Omit<
  ConstructionInfoSnapshot,
  "id" | "bid_package_snapshots"
> & {
  bid_package_snapshots: Omit<BidPackageSnapshot, "id">[];
};

type FormSubmission = Omit<Submission, "id" | "construction_infor_snapshot"> & {
  construction_infor_snapshot: FormSnapshot | null;
};

interface SubmissionFormProps {
  index: number;
  values: FormSubmission;
  onChange: (
    index: number,
    field: keyof FormSubmission,
    value: unknown,
  ) => void;
  onRemove: (index: number) => void;
}

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

export function SubmissionForm({
  index,
  values,
  onChange,
  onRemove,
}: SubmissionFormProps) {
  const prefix = `sub-${index}`;
  const snapshot = values.construction_infor_snapshot;

  const handleDocField = (field: string, value: string) => {
    onChange(index, field as keyof FormSubmission, value);
  };

  const handleSnapshotChange = (
    _: number,
    field: keyof ConstructionInfoSnapshot,
    value: unknown,
  ) => {
    if (!snapshot) return;
    onChange(index, "construction_infor_snapshot", {
      ...snapshot,
      [field]: value,
    });
  };

  const enableSnapshot = () => {
    onChange(index, "construction_infor_snapshot", { ...EMPTY_SNAPSHOT });
  };

  const removeSnapshot = () => {
    onChange(index, "construction_infor_snapshot", null);
  };

  return (
    <div className="relative rounded-xl border border-border bg-card/40 p-5 shadow-sm">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(index)}
        aria-label="Xoá tờ trình"
      >
        <Trash2Icon />
      </Button>

      <p className="mb-4 text-sm font-semibold text-foreground">
        Tờ trình #{index + 1}
      </p>

      {/* Submission ID (editable slug) */}
      {/* <div className="mb-4 flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-id`}>ID tờ trình</Label>
        <Input
          id={`${prefix}-id`}
          placeholder="Nhập ID tờ trình"
          value={values.id}
          onChange={(e) => onChange(index, "id", e.target.value)}
        />
      </div> */}

      {/* AdministrativeDocument fields */}
      <AdministrativeDocumentFields
        prefix={prefix}
        values={{
          no: values.no,
          level: values.level,
          date: values.date,
          pursuant_to_dec_tct_id: values.pursuant_to_dec_tct_id ?? "",
          pursuant_to_dec_ttmn_id: values.pursuant_to_dec_ttmn_id ?? "",
        }}
        onChange={handleDocField}
      />

      {/* ConstructionInfoSnapshot */}
      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">
          Thông tin chi tiết công trình
        </p>
        {!snapshot ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={enableSnapshot}
          >
            <PlusIcon />
            Thêm thông tin công trình
          </Button>
        ) : (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={removeSnapshot}
          >
            <Trash2Icon />
            Xoá thông tin công trình
          </Button>
        )}
      </div>

      {snapshot && (
        <ConstructionInfoSnapshotForm
          index={0}
          values={snapshot}
          onChange={handleSnapshotChange}
          onRemove={removeSnapshot}
        />
      )}
    </div>
  );
}
