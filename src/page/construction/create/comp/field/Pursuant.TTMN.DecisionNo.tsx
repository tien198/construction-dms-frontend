import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function PursuantTTMNDecisionNo() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.pursuantToDec_TTMN?.no
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="QĐ TTMN (Nếu có)"
      value={value}
      onChange={(e) => setNestedField("pursuantToDec_TTMN.no", e.target.value)}
    />
  );
}
