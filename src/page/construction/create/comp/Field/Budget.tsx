import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function BudgetField() {
  const value = useStore(constructionStore, (s) => s.formData.budget);
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      type="number"
      label="Ngân sách"
      value={value as any}
      onChange={(e) =>
        setField(
          "budget",
          e.target.value === "" ? "" : parseFloat(e.target.value)
        )
      }
    />
  );
}
