import { EditFormField } from "./EditFormField";
import DecisionSelectionDialog from "./decision-selection-dialog";
import type { SubmissionCreate } from "@/pages/create/types/submission-create.type";

type Props = {
  type: "tv" | "tt" | "bcktkt";
  submission: any;
  onChange: (field: string, value: any, type: string) => void;
  disabled?: boolean;
};

export function AdministrativeDocumentFields({ type, submission, onChange, disabled }: Props) {
  const isTv = type === "tv";
  const isBcktkt = type === "bcktkt";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <EditFormField
        htmlFor={`no-${type}`}
        label="Số T.Tr (No)"
        placeholder="01/TTr-..."
        value={submission?.no ?? ""}
        onChange={(e) => onChange("no", e.target.value, type)}
        disabled={disabled}
      />

      <EditFormField
        htmlFor={`dec-no-${type}`}
        label="Số QĐ (No)"
        placeholder="01/QĐ-..."
        value={submission?.directlyDecision?.no ?? ""}
        onChange={(e) => onChange("directlyDecision.no", e.target.value, type)}
        disabled={disabled}
      />
      <span />
      <EditFormField
        htmlFor={`date-${type}`}
        label="Ngày ban hành (Date)"
        type="date"
        value={submission?.date ?? ""}
        onChange={(e) => onChange("date", e.target.value, type)}
        disabled={disabled}
      />

      {isTv && (
        <DecisionSelectionDialog
          fieldName="pursuant_to_dec_tct_id"
          htmlFor={`dec-tct-${type}`}
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          value={submission?.pursuant_to_dec_tct_id ?? ""}
          disabled={disabled}
        />
      )}

      {isBcktkt && (
        <DecisionSelectionDialog
          fieldName="pursuant_to_dec_ttmn_id"
          htmlFor={`dec-ttmn-${type}`}
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
          value={submission?.pursuant_to_dec_ttmn_id ?? ""}
          disabled={disabled}
        />
      )}
    </div>
  );
}
