import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";
import type { ChangeEvent } from "react";

export default function Cost({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.cost
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(
      id,
      "cost",
      e.target.type === "string" ? parseFloat(e.target.value) : e.target.value
    );

  return (
    <TextField
      fullWidth
      type="number"
      label="Giá gói thầu"
      value={value}
      onChange={handleChange}
    />
  );
}
