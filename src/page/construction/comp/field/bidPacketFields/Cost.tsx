import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import type { ChangeEvent } from "react";

export default function Cost({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.cost,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(
      id,
      "cost",
      e.target.type === "string" ? parseFloat(e.target.value) : e.target.value,
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
