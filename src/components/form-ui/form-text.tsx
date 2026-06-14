import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ComponentProps } from "react";

export type FormTextProps = {
  /** The id to link the label's htmlFor to the textarea */
  id: string;
  /** Label text */
  label: string;
  /** When true adds `sm:col-span-2` so the field spans full width on ≥sm grids */
  fullWidth?: boolean;
  // } & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
} & ComponentProps<typeof Textarea>;

/**
 * A layout wrapper that pairs a `<Label>` with a `<Textarea>`.
 *
 * Usage:
 * ```tsx
 * <FormText id="my-textarea" label="Mô tả" placeholder="…" value={v} onChange={…} />
 * ```
 */
export function FormText({
  id,
  label,
  fullWidth = false,
  disabled = false,
  ...props
}: FormTextProps) {
  return (
    <div
      className={`flex flex-col gap-1.5${fullWidth ? " sm:col-span-2" : ""}`}
    >
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        disabled={disabled}
        {...props}
        className={`bg-card ${disabled ? " text-black disabled:opacity-100" : "border-primary outline-2 outline-primary"}${props.className ? ` ${props.className}` : ""}`}
      />
    </div>
  );
}
