import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import DecisionSelectionDialog from "./decision-selection-dialog";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";
import { useEffect } from "react";
import type { Decision } from "@/types";

type Props = {
  type: "tv" | "tt" | "bcktkt";
  decision?: Decision;
} & StoreApiInject;

export function AdministrativeDocumentFields({
  type,
  decision,
  storeApi,
  disabled = false,
}: Props) {
  const sub = useStore(storeApi, (state) => state.submission);
  const sub_tt = useStore(storeApi, (state) => state.submission_tt);
  const setField = useStore(storeApi, (state) => state.setField);

  const isTv = type === "tv";
  const isBcktkt = type === "bcktkt";

  useEffect(() => {
    setField("directlyDecision.period", type.toUpperCase());
  }, [type, setField]);

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
          fieldName="pursuant_to_dec_tct_id"
          htmlFor="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          disabled={disabled}
          decision={decision?.pursuant_to_dec_tct}
        />
      )}

      {isBcktkt && (
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_ttmn_id"
          htmlFor="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
          disabled={disabled}
          decision={decision?.pursuant_to_dec_ttmn}
        />
      )}
    </div>
  );
}
