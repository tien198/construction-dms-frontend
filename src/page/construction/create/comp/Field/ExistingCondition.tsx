import { TextField } from "@mui/material";
import { constructionStore } from "../../store/zustandStore";
import { useStore } from "zustand";

export default function ExistingConditionField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.existingConditionOfTheStructure
  );
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, value);
  };

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Hiện trạng kết cấu"
      name="existingConditionOfTheStructure"
      value={value}
      onChange={handleChange}
    />
  );
}
