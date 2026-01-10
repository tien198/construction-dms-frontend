import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function CostField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.cost
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      type="number"
      label="Ngân sách"
      value={value as any}
      onChange={(e) =>
        setNestedField(
          "constructionInfor",
          "cost",
          e.target.value === "" ? "" : parseFloat(e.target.value)
        )
      }
    />
  );
}
