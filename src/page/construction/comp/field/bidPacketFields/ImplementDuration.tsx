import { TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function ImplementDuration({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.upTo,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "upTo", e.target.value);

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      fullWidth
      label="Thời gian thực hiện"
      value={value}
      onChange={handleChange}
      placeholder="10 ngày"
      disabled={!isChangeInfor}
    />
  );
}
