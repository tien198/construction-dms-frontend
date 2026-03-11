import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";

export function DocumentSide() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
        <p className="mb-6 text-sm font-semibold text-foreground">
          Tờ trình - Quyết định TV
        </p>

        {/* Submission's own AdministrativeDocument fields */}
        <AdministrativeDocumentFields />
      </div>
      <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
        <p className="mb-6 text-sm font-semibold text-foreground">
          Tờ trình - Quyết định TT
        </p>

        {/* Submission's own AdministrativeDocument fields */}
        <AdministrativeDocumentFields />
      </div>
    </div>
  );
}
