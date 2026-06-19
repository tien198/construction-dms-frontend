import type { PropsWithChildren } from "react";
import { Button } from "../ui/button";

type Props = { onClick: () => void; disabled?: boolean } & PropsWithChildren;
export function SaveBtn({ onClick, children, disabled }: Props) {
  return (
    <Button
      variant="outline"
      className="bg-accent text-primary hover:bg-primary hover:text-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Lưu"}
    </Button>
  );
}
