import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../create/constant/bidPackage.const";

export default function ProjectOwner({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.projectOwner,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "projectOwner", e.target.value);

  const projectOwners = BidPackageConst.projectOwners;

  return (
    <TextField
      select
      fullWidth
      label="Chủ đầu tư"
      value={value}
      onChange={handleChange}
      defaultValue={projectOwners[0]}
    >
      {projectOwners.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
