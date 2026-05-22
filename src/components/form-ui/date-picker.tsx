import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Input } from "../ui/input";

type Props = {
  id: string;
  date?: Date;
  setDate: (date?: Date) => void;
  label?: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DatePicker({
  id,
  date,
  setDate,
  label,
  disabled = false,
  ...props
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Field className="mx-auto gap-1">
      <FieldLabel htmlFor={id}>{label ?? "Ngày"}</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button disabled={disabled}>
            <Input
              id={id}
              disabled={disabled}
              className={
                "w-full justify-start font-normal" +
                (disabled ? " disabled:opacity-100" : " border-primary") +
                (date ? "" : " opacity-70")
              }
              value={date ? format(date, "dd/MM/yyyy") : "Chọn ngày"}
              {...props}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-96 overflow-hidden  pb-6" align="start">
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="mx-auto"
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
