import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";
import type { ChangeEvent } from "react";

export default function ImplementDuration({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.upTo
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
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
