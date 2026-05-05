import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export type FormTextProps = {
  htmlFor: string;
  label: string;
  fullWidth?: boolean;
} & ComponentProps<typeof Textarea>;

export function EditFormText({
  htmlFor,
  label,
  fullWidth = false,
  className,
  ...props
}: FormTextProps) {
  return (
    <div className={`flex flex-col gap-1.5${fullWidth ? " sm:col-span-2" : ""}`}>
      <Label htmlFor={htmlFor} className="text-muted-foreground">{label}</Label>
      <Textarea 
        id={htmlFor} 
        {...props} 
        className={cn(
          "text-black border-0 disabled:opacity-100 disabled:cursor-auto min-h-[80px]",
          className
        )} 
      />
    </div>
  );
}
