import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AdministrativeDocument } from "@/types";
import { DecisionList } from "./DecisionList";
import { useStore } from "zustand";
import { useState } from "react";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";
import type { SubmissionPost } from "../types/submission-post.type";
import { FormField } from "@/components/form-ui/form-field";
import type { NestedDoc } from "@/types/administrative-document.type";

export type DecisionResponse = Pick<
  AdministrativeDocument,
  "id" | "no" | "date"
>;

export type FormFieldProps = {
  /** The id to link the label's htmlFor to the form control */
  htmlFor: string;
  /** Label text */
  label: string;
  /** When true adds `sm:col-span-2` so the field spans full width on ≥sm grids */
  placeholder?: string;
  fieldName: keyof SubmissionPost;
  decision?: NestedDoc | null;
  isFindTCT?: boolean;
} & StoreApiInject &
  React.InputHTMLAttributes<HTMLInputElement>;

export default function DecisionSelectionDialog({
  htmlFor,
  label,
  placeholder,
  fieldName,
  storeApi,
  disabled = false,
  decision,
  isFindTCT = false,
}: FormFieldProps) {
  const [dec, setDec] = useState<DecisionResponse | null>(decision ?? null);
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
          htmlFor={htmlFor}
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
