import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import { DecisionSelectionDialog } from "../comp/decision-selection-dialog";
import { decision_store } from "../store/create-decision-store";

type Props = { disabled?: boolean };

export function DecisionSection({ disabled }: Props) {
  const decNo = useStore(decision_store, (state) => state.decision.no);
  const setField = useStore(decision_store, (state) => state.setField);

  function changeDecNoHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setField("no", e.target.value);
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
          storeApi={decision_store}
          fieldName="pursuant_to_dec_tct.id"
          id="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="Quyết định TCT"
          disabled={disabled}
          isFindTCT
        />
        <DecisionSelectionDialog
          storeApi={decision_store}
          fieldName="pursuant_to_dec_ttmn.id"
          id="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="Quyết định TTMN"
          disabled={disabled}
        />
      </div>
    </div>
  );
}
