import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function NameField({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.constructionInfor?.name);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Tên công trình"
      value={value}
      onChange={(e) => setNestedField("constructionInfor.name", e.target.value)}
      required
    />
  );
}
