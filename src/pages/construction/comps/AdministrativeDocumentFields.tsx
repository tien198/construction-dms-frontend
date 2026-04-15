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
        value={sub.no}
        onChange={(e) => setField("no", e.target.value)}
        disabled={disabled}
      />

      <FormField
        htmlFor="no"
        label="Số QĐ (No)"
        placeholder="01/QĐ-..."
        value={sub.directlyDecision.no}
        onChange={(e) => setField("directlyDecision.no", e.target.value)}
        disabled={disabled}
      />
      <span />
      <FormField
        htmlFor="date"
        label="Ngày ban hành (Date)"
        type="date"
        value={sub.date}
        onChange={(e) => setField("date", e.target.value)}
        disabled={disabled}
      />

      {(isTv || isBcktkt) && (
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_tct_id"
          htmlFor="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          disabled={disabled}
          decision={decision?.pursuant_to_dec_tct}
          isFindTCT
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
