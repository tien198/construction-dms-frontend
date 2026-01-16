import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function RepairScope() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.repairScope
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Phạm vi sửa chữa"
      value={value}
      onChange={(e) =>
        setNestedField("constructionInfor.repairScope", e.target.value)
      }
    />
  );
}
