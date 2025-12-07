import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import type { ChangeEvent } from "react";

export default function ProjectOwner({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.projectOwner
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "projectOwner", e.target.value);

  return (
    <TextField
      fullWidth
      label="Chủ đầu tư"
      value={value}
      onChange={handleChange}
    />
  );
}
