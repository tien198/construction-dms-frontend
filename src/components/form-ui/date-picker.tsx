import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

type Props = {
  id: string;
  date?: Date;
  setDate: (date?: Date) => void;
  label?: string;
  disabled?: boolean;
};

export function DatePicker({
  id,
  date,
  setDate,
  label,
  disabled = false,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Field className="mx-auto gap-1">
      <FieldLabel htmlFor={id}>{label ?? "Ngày"}</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            disabled={disabled}
            className={
              "w-full justify-start font-normal" +
              (disabled ? " disabled:opacity-100" : " border-primary") +
              (date ? "" : " opacity-70")
            }
          >
            {date ? format(date, "dd/MM/yyyy") : "Chọn ngày"}
          </Button>
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
