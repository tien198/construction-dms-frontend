import { FormField } from "@/components/form-ui/form-field";

export function AdministrativeDocumentFields() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <FormField htmlFor={`no`} label="Số T.Tr (No)" placeholder="01/TTr-..." />

      <FormField htmlFor={`no`} label="Số QĐ (No)" placeholder="01/QĐ-..." />
      <span />
      <FormField htmlFor={`date`} label="Ngày ban hành (Date)" type="date" />

      <FormField
        htmlFor={`tct`}
        label="Căn cứ quyết định TCT"
        placeholder="ID quyết định TCT"
      />

      <FormField
        htmlFor={`ttmn`}
        label="Căn cứ quyết định TTMN"
        placeholder="ID quyết định TTMN (nếu có)"
      />
    </div>
  );
}
