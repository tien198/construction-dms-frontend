import { PlusIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconWrapperVariants = cva("p-2 rounded-lg", {
  variants: {
    border: {
      true: "border border-accent border-dashed",
      false: "",
    },
  },
  defaultVariants: {
    border: true,
  },
});

type Props = {
  title: string;
  onClick: () => void;
  className?: string;
  iconSize?: number;
} & VariantProps<typeof iconWrapperVariants>;

export function AddButton({
  title,
  onClick,
  border,
  className,
  iconSize = 35,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border border-dashed rounded-lg flex justify-center items-center gap-4 text-accent bg-accent-foreground/45 hover:bg-primary/20 cursor-pointer min-h-10",
        className,
      )}
    >
      <div className={cn(iconWrapperVariants({ border }))}>
        <PlusIcon size={iconSize} />
      </div>
      {title}
    </button>
  );
}
