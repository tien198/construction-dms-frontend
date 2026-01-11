import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../constant/bidPackage.const";

export default function BidderSelectionMethod({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidderSelectionMethod
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "bidderSelectionMethod", e.target.value);
  const contractorSelectionMethods = BidPackageConst.contractorSelectionMethods;

  return (
    <TextField
      select
      fullWidth
      label="Hình thức lựa chọn"
      value={value}
      onChange={handleChange}
      defaultValue={contractorSelectionMethods[0]}
    >
      {contractorSelectionMethods.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
