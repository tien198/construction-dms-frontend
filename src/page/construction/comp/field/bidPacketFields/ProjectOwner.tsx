import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../create/constant/bidPackage.const";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function ProjectOwner({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.projectOwner,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "projectOwner", e.target.value);

  const projectOwners = BidPackageConst.projectOwners;

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      select
      fullWidth
      label="Chủ đầu tư"
      value={value}
      onChange={handleChange}
      defaultValue={projectOwners[0]}
      disabled={!isChangeInfor}
    >
      {projectOwners.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
