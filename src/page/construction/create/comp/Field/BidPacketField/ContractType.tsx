import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import type { ChangeEvent } from "react";

export default function ContractType({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.contractType
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "contractType", e.target.value);

  return (
    <TextField
      fullWidth
      label="Loại hợp đồng"
      value={value}
      onChange={handleChange}
    />
  );
}
