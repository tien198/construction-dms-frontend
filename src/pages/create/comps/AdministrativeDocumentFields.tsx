import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { AdministrativeDocumentFieldsProps } from "./AdministrativeDocumentFields.type";

export function AdministrativeDocumentFields({
  prefix,
  values,
  onChange,
}: AdministrativeDocumentFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-no`}>Số văn bản (No)</Label>
        <Input
          id={`${prefix}-no`}
          placeholder="VD: 01/QĐ-..."
          value={values.no}
          onChange={(e) => onChange("no", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-date`}>Ngày ban hành (Date)</Label>
        <Input
          id={`${prefix}-date`}
          type="date"
          value={values.date}
          onChange={(e) => onChange("date", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-tct`}>Căn cứ quyết định TCT</Label>
        <Input
          id={`${prefix}-tct`}
          placeholder="ID quyết định TCT"
          value={values.pursuant_to_dec_tct_id}
          onChange={(e) => onChange("pursuant_to_dec_tct_id", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${prefix}-ttmn`}>Căn cứ quyết định TTMN</Label>
        <Input
          id={`${prefix}-ttmn`}
          placeholder="ID quyết định TTMN (nếu có)"
          value={values.pursuant_to_dec_ttmn_id}
          onChange={(e) => onChange("pursuant_to_dec_ttmn_id", e.target.value)}
        />
      </div>
    </div>
  );
}
