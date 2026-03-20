import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

export type FormFieldProps = {
  /** The id to link the label's htmlFor to the form control */
  htmlFor: string;
  /** Label text */
  label: string;
  /** When true adds `sm:col-span-2` so the field spans full width on ≥sm grids */
  fullWidth?: boolean;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * A thin layout wrapper that pairs a `<Label>` with any form control.
 *
 * Usage:
 * ```tsx
 * <FormField htmlFor="my-input" label="Tên công trình">
 *   <Input id="my-input" … />
 * </FormField>
 * ```
 */
export function FormField({
  htmlFor,
  label,
  fullWidth = false,
  disabled = false,
  ...props
}: FormFieldProps) {
  return (
    <div
      className={`flex flex-col gap-1.5${fullWidth ? " sm:col-span-2" : ""}`}
    >
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={htmlFor}
        disabled={disabled}
        {...props}
        className={`bg-card${disabled ? " text-black disabled:opacity-100" : " border-primary outline-2 outline-primary"}${props.className ? ` ${props.className}` : ""}`}
      />
    </div>
  );
}
