import { TextField } from "@mui/material";
import { constructionStore } from "../store/zustandStore";
import { useStore } from "zustand";

export default function StringBudgetField() {
  const value = useStore(constructionStore, (s) => s.formData.stringBudget);
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, value);
  };

  return (
    <TextField
      fullWidth
      label="Bằng chữ"
      name="stringBudget"
      value={value}
      onChange={handleChange}
      placeholder="Ví dụ: Một tỷ đồng..."
    />
  );
}
