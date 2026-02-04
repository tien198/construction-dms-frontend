import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import type { ChangeEvent } from "react";

export default function ShortDescription({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.shortDescription,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "shortDescription", e.target.value);

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Mô tả ngắn"
      value={value}
      onChange={handleChange}
    />
  );
}
