import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function PursuantTCTDecisionLevel() {
  const level = useStore(
    constructionStore,
    (state) => state.formData.pursuantToDec_TCT.level
  );
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
      onChange={(e) =>
        setNestedField("pursuantToDec_TCT", "level", e.target.value)
      }
    >
      <MenuItem value="LCQ">TCT</MenuItem>
    </TextField>
  );
}
