import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function PursuantTTMNDecisionLevel({
  storeApi,
}: StoreApiInject) {
  const level = useStore(
    storeApi,
    (state) => state.formData.pursuantToDec_TTMN?.level,
  );
  const setNestedField = useStore(storeApi, (state) => state.setNestedField);

  return (
    <TextField
      select
      fullWidth
      label="Cấp"
      value={level}
      onChange={(e) => setNestedField("pursuantToDec_TTMN.no", e.target.value)}
    >
      <MenuItem value="LCQ">TTMN</MenuItem>
    </TextField>
  );
}
