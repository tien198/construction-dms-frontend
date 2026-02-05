import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function Cost({ id, storeApi }: Props) {
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

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      fullWidth
      type="number"
      label="Giá gói thầu"
      value={value}
      onChange={handleChange}
      disabled={!isChangeInfor}
    />
  );
}
