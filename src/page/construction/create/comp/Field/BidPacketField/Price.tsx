import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";
import type { ChangeEvent } from "react";

export default function Price({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.price
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(
      id,
      "price",
      e.target.type === "string" ? parseFloat(e.target.value) : e.target.value
    );

  return (
    <TextField
      fullWidth
      type="number"
      label="Giá gói thầu"
      value={value as any}
      onChange={handleChange}
    />
  );
}
