import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../create/store/create-store";

export default function ExistingConditionOfTheStructure({
  storeApi,
}: {
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.existingConditionOfTheStructure,
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
    />
  );
}
