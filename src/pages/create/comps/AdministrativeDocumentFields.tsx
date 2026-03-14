import { FormField } from "@/components/form-ui/form-field";
import { useStore } from "zustand";
import { createSubmission_store } from "../store/create-submission.store";

type Props = {
  type: "tv" | "tt";
};

export function AdministrativeDocumentFields({ type }: Props) {
  const sub = useStore(createSubmission_store, (state) => state.submission);
  const sub_tt = useStore(
    createSubmission_store,
    (state) => state.submission_tt,
  );
  const setField = useStore(createSubmission_store, (state) => state.setField);
  const isTv = type === "tv";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <FormField
        htmlFor="no"
        label="Số T.Tr (No)"
        placeholder="01/TTr-..."
        value={isTv ? sub.no : sub_tt.no}
        onChange={(e) => setField("no", e.target.value, type)}
      />

      <FormField
        htmlFor="no"
        label="Số QĐ (No)"
        placeholder="01/QĐ-..."
        value={isTv ? sub.directlyDecision.no : sub_tt.directlyDecision.no}
        onChange={(e) => setField("directlyDecision.no", e.target.value, type)}
      />
      <span />
      <FormField
        htmlFor="date"
        label="Ngày ban hành (Date)"
        type="date"
        value={isTv ? sub.date : sub_tt.date}
        onChange={(e) => setField("date", e.target.value, type)}
      />

      {isTv && (
        <FormField
          htmlFor="dec-tct"
          label="Căn cứ quyết định TCT"
          placeholder="ID quyết định TCT"
          value={sub.pursuant_to_dec_tct_id ?? ""}
          onChange={(e) => setField("pursuant_to_dec_tct_id", e.target.value)}
        />
      )}

      {isTv && (
        <FormField
          htmlFor="dec-ttmn"
          label="Căn cứ quyết định TTMN"
          placeholder="ID quyết định TTMN (nếu có)"
          value={sub.pursuant_to_dec_ttmn_id ?? ""}
          onChange={(e) => setField("pursuant_to_dec_ttmn_id", e.target.value)}
        />
      )}
    </div>
  );
}
