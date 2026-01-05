import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function NameField() {
  const value = useStore(constructionStore, (s) => s.formData.name);
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      label="Tên công trình"
      value={value}
      onChange={(e) => setField("name", e.target.value)}
      required
    />
  );
}
