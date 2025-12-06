import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function SourceOfFundsField() {
  const value = useStore(constructionStore, (s) => s.formData.sourceOfFunds);
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, value);
  };
  const currentYear = Number(value);
  const from = currentYear - 3;
  const to = currentYear + 3;
  const selectionItems = [];
  for (let i = from; i <= to; i++) {
    selectionItems.push(i);
  }

  return (
    <TextField
      select
      fullWidth
      label="Nguồn vốn"
      name="sourceOfFunds"
      value={value}
      onChange={handleChange}
    >
      {selectionItems.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
