import type { PropsWithChildren } from "react";

export function SideEl(props: PropsWithChildren) {
  return (
    <div>
      <div className="bg-brand bg-card p-5 shadow-xl shadow-accent-foreground rounded-xl border border-border w-full">
        {props.children}
      </div>
    </div>
  );
}
