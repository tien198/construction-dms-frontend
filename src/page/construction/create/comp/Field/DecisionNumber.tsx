import { TextField } from "@mui/material";
import { constructionStore } from "../../store/zustandStore";
import { useStore } from "zustand";

export default function DecisionNumberField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.decision.decisionNumber
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNestedField("decision", "decisionNumber", value);
  };

  return (
    <TextField
      fullWidth
      label="Số quyết định"
      name="decisionNumber"
      value={value}
      onChange={handleChange}
    />
  );
}
