import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function PursuantTCTDecisionNo() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.pursuantToDec_TCT.no
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <TextField
      fullWidth
      label="QĐ TCT"
      value={value}
      onChange={(e) =>
        setNestedField("pursuantToDec_TCT", "no", e.target.value)
      }
    />
  );
}
