import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function StringBudgetField() {
  const value = useStore(constructionStore, (s) => s.formData.stringBudget);
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      label="Ngân sách bằng chữ"
      value={value}
      onChange={(e) => setField("stringBudget", e.target.value)}
    />
  );
}
