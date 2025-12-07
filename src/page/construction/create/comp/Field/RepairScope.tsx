import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function RepairScope() {
  const value = useStore(constructionStore, (s) => s.formData.repairScope);
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Phạm vi sửa chữa"
      value={value}
      onChange={(e) => setField("repairScope", e.target.value)}
    />
  );
}
