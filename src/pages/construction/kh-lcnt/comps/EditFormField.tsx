import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type FormFieldProps = {
  htmlFor: string;
  label: string;
  fullWidth?: boolean;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function EditFormField({
  htmlFor,
  label,
  fullWidth = false,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5${fullWidth ? " sm:col-span-2" : ""}`}>
      <Label htmlFor={htmlFor} className="text-muted-foreground">{label}</Label>
      <Input
        id={htmlFor}
        {...props}
        className={cn(
          "text-black border-0 disabled:opacity-100 disabled:cursor-auto",
          className
        )}
      />
    </div>
  );
}
