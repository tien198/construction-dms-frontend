import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function RepairScopeField() {
  const value = useStore(constructionStore, (s) => s.formData.repairScope);
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
      label="Phạm vi sửa chữa"
      name="repairScope"
      value={value}
      onChange={handleChange}
    />
  );
}
