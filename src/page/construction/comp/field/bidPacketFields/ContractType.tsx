import { MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import type { ChangeEvent } from "react";
import { BidPackageConst } from "../../../create/constant/bidPackage.const";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function ContractType({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.contractType,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPackage(id, "contractType", e.target.value);

  const contractTypes = BidPackageConst.contractTypes;

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <TextField
      select
      fullWidth
      label="Loại hợp đồng"
      value={value}
      onChange={handleChange}
      defaultValue={contractTypes[0]}
      disabled={!isChangeInfor}
    >
      {contractTypes.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </TextField>
  );
}
