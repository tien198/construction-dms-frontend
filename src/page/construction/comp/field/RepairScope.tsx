import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function RepairScope({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.repairScope,
  );
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
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
      disabled={!isChangeInfor}
    />
  );
}
