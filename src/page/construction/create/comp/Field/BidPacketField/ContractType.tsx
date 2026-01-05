import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../constant/bidPackage.const";

export default function ContractType({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.contractType
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);
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
