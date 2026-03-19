import type { PropsWithChildren } from "react";

type FormLayoutProps = PropsWithChildren & {
  className?: string;
};

export function FormLayout({ children, className }: FormLayoutProps) {
  return (
    <div className={`w-full border p-6 shadow-sm md:p-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function FormHeader({ children }: PropsWithChildren) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
}

// Title + description block
interface FormTitleProps {
  title: string;
  description?: string;
}

export function FormTitle({ title, description }: FormTitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-lg text-shadow-accent-foreground sm:text-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-sm text-accent text-shadow-sm text-shadow-accent-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

// Action buttons container
export function ActionBtns({ children }: PropsWithChildren) {
  return <div className="flex gap-2">{children}</div>;
}
