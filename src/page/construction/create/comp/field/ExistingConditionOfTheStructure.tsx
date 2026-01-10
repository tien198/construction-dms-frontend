import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function ExistingConditionOfTheStructure() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.existingConditionOfTheStructure
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Hiện trạng kết cấu"
      value={value}
      onChange={(e) =>
        setNestedField(
          "constructionInfor",
          "existingConditionOfTheStructure",
          e.target.value
        )
      }
    />
  );
}
