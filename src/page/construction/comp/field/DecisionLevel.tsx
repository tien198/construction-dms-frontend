import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function DecisionLevel({ storeApi }: StoreApiInject) {
  const level = useStore(storeApi, (state) => state.formData.level);
  const setNestedField = useStore(storeApi, (state) => state.setNestedField);

  return (
    <TextField
      select
      fullWidth
      label="Cấp"
      value={level}
      onChange={(e) => setNestedField("directlyDecision.level", e.target.value)}
    >
      <MenuItem value="LCQ">TTMN</MenuItem>
    </TextField>
  );
}
