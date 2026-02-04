import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import type { ChangeEvent } from "react";

export default function ImplementDuration({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.upTo,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "upTo", e.target.value);

  return (
    <TextField
      fullWidth
      label="Thời gian thực hiện"
      value={value}
      onChange={handleChange}
      placeholder="10 ngày"
    />
  );
}
