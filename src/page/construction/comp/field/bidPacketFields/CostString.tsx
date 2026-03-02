import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function CostString({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.costString,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "costString", e.target.value);

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      fullWidth
      type="text"
      label="Giá gói thầu (bằng chữ)"
      value={value}
      onChange={handleChange}
      disabled={!isChangeInfor}
    />
  );
}
