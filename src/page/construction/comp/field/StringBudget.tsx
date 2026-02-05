import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function CostStringField({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.costString,
  );
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
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
      disabled={!isChangeInfor}
    />
  );
}
