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
import { DecisionList } from "./DecisionList";
import { useState } from "react";
import type { AdministrativeDocument } from "@/types";

export type DecisionResponse = Pick<
  AdministrativeDocument,
  "id" | "no" | "date"
>;

export type FormFieldProps = {
  htmlFor: string;
  label: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function DecisionSelectionDialog({
  htmlFor,
  label,
  placeholder,
  value,
  disabled,
}: FormFieldProps) {
  const [dec, setDec] = useState<DecisionResponse | null>(null);

  function handleSetDec(dec: DecisionResponse) {
    setDec(dec);
  }

  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger disabled={disabled}>
        <div className="flex flex-col gap-1.5 min-w-[200px] sm:col-span-1">
          <Label htmlFor={htmlFor} className="text-muted-foreground">{label}</Label>
          <Input
            value={dec?.no ?? value ?? ""}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            className="text-black border-0 disabled:opacity-100 disabled:cursor-auto"
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
