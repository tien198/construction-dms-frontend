import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2Icon } from "lucide-react";
import type { FormSubmission } from "./SubmissionForm.type";
import type { FormDecision, DecisionFormProps } from "./DecisionForm.type";
import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";
import { SubmissionForm } from "./SubmissionForm";

export function DecisionForm({
  values,
  onChange,
  onRemove,
}: DecisionFormProps) {
  const prefix = useId();

  const handleDocField = (field: string, value: string) => {
    onChange(field as keyof FormDecision, value);
  };

  const handleSubmissionChange = (
    field: keyof FormSubmission,
    value: unknown,
  ) => {
    onChange("submissions", { ...values.submissions, [field]: value });
  };

  return (
    <div className="relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground">
      {onRemove && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
          onClick={() => onRemove?.()}
          aria-label="Xoá quyết định"
        >
          <Trash2Icon />
        </Button>
      )}

      <p className="mb-6 text-sm font-semibold text-foreground">
        Tờ trình - Quyết định
      </p>

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

      {/* Submissions */}
      <Separator className="my-5" />
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">
          Thông tin Tờ trình
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <SubmissionForm
          values={values.submissions}
          onChange={handleSubmissionChange}
        />
      </div>
    </div>
  );
}
