import { useStore } from "zustand";
import { Autocomplete, TextField } from "@mui/material";
import type { StoreApiInject } from "../../../store-factory/store.type";

const nameList = [
  "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  "Thẩm tra Báo cáo kinh tế kỹ thuật",
];

type Props = { id: number } & StoreApiInject;

export default function PackageName({ id, storeApi }: Props) {
  const name = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidPackageName,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);

  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <Autocomplete
      options={nameList}
      fullWidth
      value={name}
      disabled={!isChangeInfor}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tên gói thầu"
          onChange={(e) => setPackage(id, "bidPackageName", e.target.value)}
        />
      )}
    />
  );
}
