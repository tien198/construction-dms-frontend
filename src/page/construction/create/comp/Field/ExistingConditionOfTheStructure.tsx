import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function ExistingConditionOfTheStructure() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.existingConditionOfTheStructure
  );
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Hiện trạng kết cấu"
      value={value}
      onChange={(e) =>
        setField("existingConditionOfTheStructure", e.target.value)
      }
    />
  );
}
