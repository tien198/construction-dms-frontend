import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function NameField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.name
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Tên công trình"
      value={value}
      onChange={(e) =>
        setNestedField("constructionInfor", "name", e.target.value)
      }
      required
    />
  );
}
