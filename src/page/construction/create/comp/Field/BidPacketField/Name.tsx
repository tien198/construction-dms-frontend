import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";
import { TextField } from "@mui/material";

export default function PackageName({ id }: { id: number }) {
  const name = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.bidPackageName
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);

  return (
    <TextField
      fullWidth
      label="Tên gói thầu"
      value={name}
      onChange={(e) => setPackage(id, "bidPackageName", e.target.value)}
    />
  );
}
