import { TextField } from "@mui/material";
import { constructionStore } from "../../store/zustandStore";
import { useStore } from "zustand";

export default function NameField() {
  const value = useStore(constructionStore, (s) => s.formData.name);
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, value);
  };

  return (
    <TextField
      fullWidth
      label="Tên công trình"
      name="name"
      value={value}
      onChange={handleChange}
      required
    />
  );
}
