import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function SourceOfFunds({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor!.sourceOfFunds,
  );
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

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
      label="Nguồn vốn: Chi phí SXKD năm"
      value={value}
      onChange={(e) =>
        setNestedField("constructionInfor.sourceOfFunds", e.target.value)
      }
    >
      {selections.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
