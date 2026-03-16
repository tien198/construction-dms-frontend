import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AdministrativeDocument } from "@/types";
import { DecisionList } from "./DecisionList";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";
import { useState } from "react";
import type { SubmissionCreate } from "../types/submission-create.type";

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
  fieldName: keyof SubmissionCreate;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function DecisionSelectionDialog({
  htmlFor,
  label,
  placeholder,
  fieldName,
}: FormFieldProps) {
  const [dec, setDec] = useState<DecisionResponse | null>(null);
  const setField = useStore(createSubmission_store, (state) => state.setField);

  function handleSetDec(dec: DecisionResponse) {
    setDec(dec);
    setField(fieldName, dec.id);
  }

  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger>
        <div>
          <Label htmlFor={htmlFor}>{label}</Label>
          <Input
            value={dec?.no ?? "Chọn quyết định"}
            placeholder={placeholder}
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw]! md:max-w-[30vw]!">
        <DialogHeader>
          <DialogTitle>Căn cứ Quyết Định</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="max-h-[80vh]! min-h-96! overflow-y-auto">
            <DecisionList handleSetDec={handleSetDec} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
