import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function CostStringField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.costString
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Ngân sách bằng chữ"
      value={value}
      onChange={(e) =>
        setNestedField("constructionInfor", "costString", e.target.value)
      }
    />
  );
}
