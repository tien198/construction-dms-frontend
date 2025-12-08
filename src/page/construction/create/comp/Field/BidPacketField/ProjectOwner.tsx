import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../constant/bidPackage.const";

export default function ProjectOwner({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.projectOwner
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
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
