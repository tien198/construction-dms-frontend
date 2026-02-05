import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function NameField({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.constructionInfor?.name);
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Tên công trình"
      value={value}
      onChange={(e) => setNestedField("constructionInfor.name", e.target.value)}
      required
      disabled={!isChangeInfor}
    />
  );
}
