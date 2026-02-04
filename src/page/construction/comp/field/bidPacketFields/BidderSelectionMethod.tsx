import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../create/constant/bidPackage.const";
import { createConstructionStore } from "../../../create/store/create-store";

export default function BidderSelectionMethod({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidderSelectionMethod,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
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
