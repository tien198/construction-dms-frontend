import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ComponentProps } from "react";

export type FormTextProps = {
  /** The id to link the label's htmlFor to the textarea */
  htmlFor: string;
  /** Label text */
  label: string;
  /** When true adds `sm:col-span-2` so the field spans full width on ≥sm grids */
  fullWidth?: boolean;
} & ComponentProps<typeof Textarea>;

/**
 * A layout wrapper that pairs a `<Label>` with a `<Textarea>`.
 *
 * Usage:
 * ```tsx
 * <FormText htmlFor="my-textarea" label="Mô tả" placeholder="…" value={v} onChange={…} />
 * ```
 */
export function FormText({
  htmlFor,
  label,
  fullWidth = false,
  disabled = false,
  ...props
}: FormTextProps) {
  return (
    <div
      className={`flex flex-col gap-1.5${fullWidth ? " sm:col-span-2" : ""}`}
    >
      <Label htmlFor={htmlFor}>{label}</Label>
      <Textarea
        id={htmlFor}
        disabled={disabled}
        {...props}
        className={`bg-card ${disabled ? " text-black disabled:opacity-100" : "border-primary outline-2 outline-primary"}${props.className ? ` ${props.className}` : ""}`}
      />
    </div>
  );
}
