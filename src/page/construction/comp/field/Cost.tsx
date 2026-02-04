import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function CostField({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.constructionInfor?.cost);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      type="number"
      label="Ngân sách"
      value={value as any}
      onChange={(e) =>
        setNestedField(
          "constructionInfor.cost",
          e.target.value === "" ? "" : parseFloat(e.target.value),
        )
      }
    />
  );
}
