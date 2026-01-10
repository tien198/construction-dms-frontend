import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function SubmissionLevel() {
  const level = useStore(constructionStore, (state) => state.formData.level);
  const setField = useStore(constructionStore, (state) => state.setField);

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
