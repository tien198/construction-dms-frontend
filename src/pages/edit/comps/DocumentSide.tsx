import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";

type Props = {
  submissionTv: any;
  submissionTt: any;
  onChange: (field: string, value: any, type: string) => void;
  disabled?: boolean;
};

export function DocumentSide({ submissionTv, submissionTt, onChange, disabled }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
        <p className="mb-6 text-sm font-semibold text-foreground">
          Tờ trình - Quyết định TV
        </p>
        <AdministrativeDocumentFields 
          type="tv" 
          submission={submissionTv} 
          onChange={onChange} 
          disabled={disabled} 
        />
      </div>
      <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
        <p className="mb-6 text-sm font-semibold text-foreground">
          Tờ trình - Quyết định TT
        </p>
        <AdministrativeDocumentFields 
          type="tt" 
          submission={submissionTt} 
          onChange={onChange} 
          disabled={disabled} 
        />
      </div>
    </div>
  );
}
