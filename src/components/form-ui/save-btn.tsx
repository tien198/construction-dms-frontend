import type { PropsWithChildren } from "react";
import { Button } from "../ui/button";

type Props = { onClick: () => void } & PropsWithChildren;
export function SaveBtn({ onClick, children }: Props) {
  return (
    <Button
      variant="outline"
      className="bg-accent text-primary hover:bg-primary hover:text-white"
      onClick={onClick}
    >
      {children || "Lưu"}
    </Button>
  );
}
