import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function CostStringField({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.costString,
  );
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Ngân sách bằng chữ"
      value={value}
      onChange={(e) =>
        setNestedField("constructionInfor.costString", e.target.value)
      }
    />
  );
}
