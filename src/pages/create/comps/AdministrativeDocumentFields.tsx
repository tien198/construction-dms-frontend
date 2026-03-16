import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";
import DecisionSelectionDialog from "./decision-selection-dialog";

type Props = {
  type: "tv" | "tt" | "bcktkt";
};

export function AdministrativeDocumentFields({ type }: Props) {
  const sub = useStore(createSubmission_store, (state) => state.submission);
  const sub_tt = useStore(
    createSubmission_store,
    (state) => state.submission_tt,
  );
  const setField = useStore(createSubmission_store, (state) => state.setField);
  const isTv = type === "tv";
  const isBcktkt = type === "bcktkt";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <FormField
        htmlFor="no"
        label="Số T.Tr (No)"
        placeholder="01/TTr-..."
        value={isTv ? sub.no : sub_tt.no}
        onChange={(e) => setField("no", e.target.value, type)}
      />

      <FormField
        htmlFor="no"
        label="Số QĐ (No)"
        placeholder="01/QĐ-..."
        value={isTv ? sub.directlyDecision.no : sub_tt.directlyDecision.no}
        onChange={(e) => setField("directlyDecision.no", e.target.value, type)}
      />
      <span />
      <FormField
        htmlFor="date"
        label="Ngày ban hành (Date)"
        type="date"
        value={isTv ? sub.date : sub_tt.date}
        onChange={(e) => setField("date", e.target.value, type)}
      />

      {isTv && (
        <DecisionSelectionDialog
          fieldName="pursuant_to_dec_tct_id"
          htmlFor="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
        />
      )}

      {isBcktkt && (
        <DecisionSelectionDialog
          fieldName="pursuant_to_dec_ttmn_id"
          htmlFor="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
        />
      )}
    </div>
  );
}
