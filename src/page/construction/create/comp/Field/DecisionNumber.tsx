import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function DecisionNumber() {
  const value = useStore(constructionStore, (s) => s.formData.decision.number);
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Số quyết định"
      value={value}
      onChange={(e) => setNestedField("decision", "number", e.target.value)}
    />
  );
}
