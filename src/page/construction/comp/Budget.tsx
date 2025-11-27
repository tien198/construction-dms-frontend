import { TextField } from "@mui/material";
import { constructionStore } from "../store/zustandStore";
import { useStore } from "zustand";

export default function BudgetField() {
  const value = useStore(constructionStore, (s) => s.formData.budget);
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, Number(value));
  };

  return (
    <TextField
      fullWidth
      label="Ngân sách (VNĐ)"
      name="budget"
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
}
