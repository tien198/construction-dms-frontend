import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function SubmissionLevel({ storeApi }: StoreApiInject) {
  const level = useStore(storeApi, (state) => state.formData.level);
  const setField = useStore(storeApi, (state) => state.setField);

  return (
    <TextField
      select
      fullWidth
      label="Cấp"
      value={level}
      onChange={(e) => setField("level", e.target.value)}
    >
      <MenuItem value="LCQ">LCQ</MenuItem>
    </TextField>
  );
}
