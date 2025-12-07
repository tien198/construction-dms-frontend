import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import type { ChangeEvent } from "react";

export default function ShortDescription({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.shortDescription
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
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
