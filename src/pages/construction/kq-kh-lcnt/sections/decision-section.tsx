import { FormField } from "@/components/form-ui/form-field";
import type { StoreApiInject } from "../../../../store-factory/store-api-inject.type";
import { useStore } from "zustand";
import DecisionSelectionDialog from "../../comps/decision-selection-dialog";

type Props = { disabled?: boolean } & StoreApiInject;

export function DecisionSection({ storeApi, disabled }: Props) {
  const decNo = useStore(
    storeApi,
    (state) => state.submission.directly_decision.no,
  );
  const setField = useStore(storeApi, (state) => state.setField);

  function changeDecNoHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setField("directly_decision.no", e.target.value);
  }

  return (
    <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          id="decision_no"
          label="Quyết định số"
          value={decNo}
          onChange={changeDecNoHandler}
          fullWidth
        />
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_tct_id"
          id="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          disabled={disabled}
          isFindTCT
        />
        <DecisionSelectionDialog
          storeApi={storeApi}
          fieldName="pursuant_to_dec_ttmn_id"
          id="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
          disabled={disabled}
        />
      </div>
    </div>
  );
}
