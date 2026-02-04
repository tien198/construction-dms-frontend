import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function PursuantTTMNDecisionNo({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.pursuantToDec_TTMN?.no);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="QĐ TTMN (Nếu có)"
      value={value}
      onChange={(e) => setNestedField("pursuantToDec_TTMN.no", e.target.value)}
    />
  );
}
