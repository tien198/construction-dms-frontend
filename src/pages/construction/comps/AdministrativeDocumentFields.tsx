import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import DecisionSelectionDialog from "./decision-selection-dialog";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";

type Props = {
  type: "tv" | "tt" | "bcktkt";
} & StoreApiInject;

export function AdministrativeDocumentFields({
  type,
  storeApi,
  disabled = false,
}: Props) {
  const sub = useStore(storeApi, (state) => state.submission);
  const sub_tt = useStore(storeApi, (state) => state.submission_tt);
  const setField = useStore(storeApi, (state) => state.setField);

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
        disabled={disabled}
      />

      <FormField
        htmlFor="no"
        label="Số QĐ (No)"
        placeholder="01/QĐ-..."
        value={isTv ? sub.directlyDecision.no : sub_tt.directlyDecision.no}
        onChange={(e) => setField("directlyDecision.no", e.target.value, type)}
        disabled={disabled}
      />
      <span />
      <FormField
        htmlFor="date"
        label="Ngày ban hành (Date)"
        type="date"
        value={isTv ? sub.date : sub_tt.date}
        onChange={(e) => setField("date", e.target.value, type)}
        disabled={disabled}
      />

      {isTv && (
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_tct"
          htmlFor="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          disabled={disabled}
        />
      )}

      {isBcktkt && (
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_ttmn"
          htmlFor="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
          disabled={disabled}
        />
      )}
    </div>
  );
}
