import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PlusIcon, Trash2Icon } from "lucide-react";
import type {
  BidPackageSnapshot,
  ConstructionInfoSnapshot,
  Decision,
  Submission,
} from "@/types";
import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";
import { SubmissionForm } from "./SubmissionForm";
import { Label } from "@/components/ui/label";

type FormSnapshot = Omit<ConstructionInfoSnapshot, "id" | "bid_package_snapshots"> & {
  bid_package_snapshots: Omit<BidPackageSnapshot, "id">[];
};

type FormSubmission = Omit<Submission, "id" | "construction_infor_snapshot"> & {
  id: string;
  construction_infor_snapshot: FormSnapshot | null;
};

type FormDecision = Omit<Decision, "submissions"> & {
  submissions: FormSubmission[];
};

interface DecisionFormProps {
  index: number;
  values: FormDecision;
  onChange: (index: number, field: keyof FormDecision, value: unknown) => void;
  onRemove: (index: number) => void;
}

const EMPTY_SUBMISSION: FormSubmission = {
  id: "",
  no: "",
  level: "",
  date: "",
  pursuant_to_dec_tct_id: null,
  pursuant_to_dec_ttmn_id: null,
  construction_infor_snapshot: null,
};

export function DecisionForm({
  index,
  values,
  onChange,
  onRemove,
}: DecisionFormProps) {
  const prefix = `dec-${index}`;

  const handleDocField = (field: string, value: string) => {
    onChange(index, field as keyof FormDecision, value);
  };

  const handleSubmissionChange = (
    subIdx: number,
    field: keyof FormSubmission,
    value: unknown
  ) => {
    const updated = [...values.submissions];
    updated[subIdx] = { ...updated[subIdx], [field]: value };
    onChange(index, "submissions", updated);
  };

  const addSubmission = () => {
    onChange(index, "submissions", [
      ...values.submissions,
      { ...EMPTY_SUBMISSION },
    ]);
  };

  const removeSubmission = (subIdx: number) => {
    onChange(
      index,
      "submissions",
      values.submissions.filter((_, i) => i !== subIdx)
    );
  };

  return (
    <div className="relative rounded-xl border border-border bg-card/50 p-5 shadow-sm">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(index)}
        aria-label="Xoá quyết định"
      >
        <Trash2Icon />
      </Button>

      <p className="mb-4 text-sm font-semibold text-foreground">
        Quyết định #{index + 1}
      </p>

      {/* Decision ID */}
      <div className="mb-4 flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-id`}>ID quyết định</Label>
        <Input
          id={`${prefix}-id`}
          placeholder="Nhập ID quyết định"
          value={values.id}
          onChange={(e) => onChange(index, "id", e.target.value)}
        />
      </div>

      {/* AdministrativeDocument base fields */}
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

      {/* is_change_construction_infor */}
      <div className="mt-4 flex items-center gap-2">
        <input
          id={`${prefix}-change-info`}
          type="checkbox"
          className="size-4 rounded border-border accent-primary"
          checked={values.is_change_construction_infor ?? false}
          onChange={(e) =>
            onChange(index, "is_change_construction_infor", e.target.checked)
          }
        />
        <Label htmlFor={`${prefix}-change-info`} className="cursor-pointer">
          Thay đổi thông tin công trình
        </Label>
      </div>

      {/* Submissions */}
      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">
          Tờ trình ({values.submissions.length})
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addSubmission}
        >
          <PlusIcon />
          Thêm tờ trình
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {values.submissions.map((sub, subIdx) => (
          <SubmissionForm
            key={subIdx}
            index={subIdx}
            values={sub}
            onChange={handleSubmissionChange}
            onRemove={removeSubmission}
          />
        ))}
      </div>
    </div>
  );
}
