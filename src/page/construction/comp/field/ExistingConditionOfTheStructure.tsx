import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function ExistingConditionOfTheStructure({
  storeApi,
}: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.existingConditionOfTheStructure,
  );
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Hiện trạng kết cấu"
      value={value}
      onChange={(e) =>
        setNestedField(
          "constructionInfor.existingConditionOfTheStructure",
          e.target.value,
        )
      }
      disabled={!isChangeInfor}
    />
  );
}
