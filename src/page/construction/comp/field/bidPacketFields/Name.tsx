import { useStore } from "zustand";
import { createConstructionStore } from "../../../create/store/create-store";
import { Autocomplete, TextField } from "@mui/material";

const nameList = [
  "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  "Thẩm tra Báo cáo kinh tế kỹ thuật",
];

export default function PackageName({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const name = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidPackageName,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);

  return (
    <Autocomplete
      options={nameList}
      fullWidth
      value={name}
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
