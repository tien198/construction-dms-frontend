import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function DecisionNo({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.directlyDecision?.no);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="Số quyết định"
      value={value}
      onChange={(e) => setNestedField("directlyDecision.no", e.target.value)}
    />
  );
}
