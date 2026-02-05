import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function CostField({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.constructionInfor?.cost);
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );
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
      disabled={!isChangeInfor}
    />
  );
}
