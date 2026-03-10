import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import type {
  FormSubmission,
  SubmissionFormProps,
} from "./SubmissionForm.type";
import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";

export function SubmissionForm({
  values,
  onChange,
  onRemove,
}: SubmissionFormProps) {
  const prefix = useId();
  const handleDocField = (field: string, value: string) => {
    onChange(field as keyof FormSubmission, value);
  };

  return (
    <div className="relative rounded-xl border border-border bg-card/40 p-5 shadow-sm">
      {onRemove && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-4 top-4 text-muted-foreground hover:text-destructive"
          onClick={() => onRemove?.()}
          aria-label="Xoá tờ trình"
        >
          <Trash2Icon />
        </Button>
      )}

      <p className="mb-4 text-sm font-semibold text-foreground">
        Thông tin Tờ trình
      </p>

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
    </div>
  );
}
