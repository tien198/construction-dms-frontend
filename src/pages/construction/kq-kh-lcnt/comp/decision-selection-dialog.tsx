import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AdministrativeDocument } from "@/types/domain";
import { DecisionList } from "@/pages/construction/comps/DecisionList";
import { useStore, type StoreApi } from "zustand";
import { useState } from "react";
import { FormField } from "@/components/form-ui/form-field";
import type { DecisionRef } from "@/types/domain/administrative-document.type";
import type { CreateDecisionStore } from "../store/create-decision-store";
import type { RecursivePath } from "@/lib/type/recursion";

export type DecisionResponse = Pick<
  AdministrativeDocument,
  "id" | "no" | "date"
>;

export type FormFieldProps = {
  /** The id to link the label's htmlFor to the form control */
  id: string;
  /** Label text */
  label: string;
  /** When true adds `sm:col-span-2` so the field spans full width on ≥sm grids */
  placeholder?: string;
  fieldName: RecursivePath<AdministrativeDocument>;
  selectedDec?: DecisionRef | null;
  isFindTCT?: boolean;
  storeApi: StoreApi<CreateDecisionStore>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DecisionSelectionDialog({
  id,
  label,
  placeholder,
  fieldName,
  storeApi,
  disabled = false,
  selectedDec,
  isFindTCT = false,
}: FormFieldProps) {
  const [dec, setDec] = useState<DecisionResponse | null>(selectedDec ?? null);
  const setField = useStore(storeApi, (state) => state.setField);

  function handleSetDec(dec: DecisionResponse) {
    setDec(dec);
    setField(fieldName, dec.id);
  }

  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger disabled={disabled}>
        <FormField
          id={id}
          label={label}
          value={dec?.no ?? ""}
          placeholder={placeholder ?? "Chọn quyết định"}
          disabled={disabled}
          readOnly
        />
      </DialogTrigger>
      <DialogContent className="max-w-[90vw]! md:max-w-[30vw]!">
        <DialogHeader>
          <DialogTitle>Căn cứ Quyết Định</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="max-h-[80vh]! min-h-96! overflow-y-auto">
            <DecisionList handleSetDec={handleSetDec} isFindTCT={isFindTCT} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
