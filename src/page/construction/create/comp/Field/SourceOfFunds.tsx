import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function SourceOfFunds() {
  const value = useStore(constructionStore, (s) => s.formData.sourceOfFunds);
  const setField = useStore(constructionStore, (s) => s.setField);

  return (
    <TextField
      fullWidth
      label="Nguồn vốn"
      value={value}
      onChange={(e) => setField("sourceOfFunds", e.target.value)}
    />
  );
}
