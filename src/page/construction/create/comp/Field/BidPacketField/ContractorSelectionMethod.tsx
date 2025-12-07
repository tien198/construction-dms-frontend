import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import type { ChangeEvent } from "react";

export default function ContractorSelectionMethod({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.contractorSelectionMethod
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "contractorSelectionMethod", e.target.value);

  return (
    <TextField
      fullWidth
      label="Hình thức lựa chọn"
      value={value}
      onChange={handleChange}
    />
  );
}
