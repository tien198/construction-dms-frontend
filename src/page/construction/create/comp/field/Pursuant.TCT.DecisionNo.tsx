import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function PursuantTCTDecisionNo({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.pursuantToDec_TCT.no);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="QĐ TCT"
      value={value}
      onChange={(e) => setNestedField("pursuantToDec_TCT.no", e.target.value)}
    />
  );
}
