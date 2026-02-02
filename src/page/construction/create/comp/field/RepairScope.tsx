import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function RepairScope({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.repairScope,
  );
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

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
