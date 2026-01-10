import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DecisionLevel() {
  const level = useStore(constructionStore, (state) => state.formData.level);
  const setNestedField = useStore(
    constructionStore,
    (state) => state.setNestedField
  );

  return (
    <TextField
      select
      fullWidth
      label="Cấp"
      value={level}
      onChange={(e) => setNestedField("directlyDecision", "no", e.target.value)}
    >
      <MenuItem value="LCQ">TTMN</MenuItem>
    </TextField>
  );
}
