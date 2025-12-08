import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import { Autocomplete, TextField } from "@mui/material";

const nameList = [
  "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  "Thẩm tra Báo cáo kinh tế kỹ thuật",
];

export default function PackageName({ id }: { id: number }) {
  const name = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.bidPackageName
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);

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
