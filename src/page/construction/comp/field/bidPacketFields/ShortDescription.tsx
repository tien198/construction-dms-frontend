import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function ShortDescription({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.shortDescription,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "shortDescription", e.target.value);

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label="Mô tả ngắn"
      value={value}
      onChange={handleChange}
      disabled={!isChangeInfor}
    />
  );
}
