import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function SourceOfFunds() {
  const value = useStore(constructionStore, (s) => s.formData.sourceOfFunds);
  const setField = useStore(constructionStore, (s) => s.setField);

  // eslint-disable-next-line react-hooks/purity
  const currYear = new Date(Date.now()).getFullYear();
  const start = currYear - 3;
  const end = currYear + 3;
  const selections = [];
  for (let i = start; i <= end; i++) {
    selections.push(i);
  }

  return (
    <TextField
      select
      fullWidth
      label="Nguồn vốn"
      value={value}
      onChange={(e) => setField("sourceOfFunds", e.target.value)}
    >
      {selections.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
