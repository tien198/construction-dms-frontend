import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../create/constant/bidPackage.const";

export default function ContractType({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.contractType,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "contractType", e.target.value);

  const contractTypes = BidPackageConst.contractTypes;

  return (
    <TextField
      select
      fullWidth
      label="Loại hợp đồng"
      value={value}
      onChange={handleChange}
      defaultValue={contractTypes[0]}
    >
      {contractTypes.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
