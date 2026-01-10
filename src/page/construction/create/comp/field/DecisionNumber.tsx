import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DecisionNumber() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.directlyDecision?.no
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Số quyết định"
      value={value}
      onChange={(e) => setNestedField("directlyDecision", "no", e.target.value)}
    />
  );
}
