import { FormField } from "@/components/form-ui/form-field";

import type { AdministrativeDocumentFieldsProps } from "./AdministrativeDocumentFields.type";

export function AdministrativeDocumentFields({
  prefix,
  values,
  onChange,
}: AdministrativeDocumentFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <FormField
        htmlFor={`${prefix}-no`}
        label="Số văn bản (No)"
        placeholder="VD: 01/QĐ-..."
        value={values.no}
        onChange={(e) => onChange("no", e.target.value)}
      />

      <FormField
        htmlFor={`${prefix}-date`}
        label="Ngày ban hành (Date)"
        type="date"
        value={values.date}
        onChange={(e) => onChange("date", e.target.value)}
      />

      <FormField
        htmlFor={`${prefix}-tct`}
        label="Căn cứ quyết định TCT"
        placeholder="ID quyết định TCT"
        value={values.pursuant_to_dec_tct_id}
        onChange={(e) => onChange("pursuant_to_dec_tct_id", e.target.value)}
      />

      <FormField
        htmlFor={`${prefix}-ttmn`}
        label="Căn cứ quyết định TTMN"
        placeholder="ID quyết định TTMN (nếu có)"
        value={values.pursuant_to_dec_ttmn_id}
        onChange={(e) => onChange("pursuant_to_dec_ttmn_id", e.target.value)}
      />
    </div>
  );
}
