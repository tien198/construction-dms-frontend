import { TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function DocumentNo() {
  const documentNo = useStore(
    constructionStore,
    (state) => state.formData.documentNo
  );
  const setField = useStore(constructionStore, (state) => state.setField);

  return (
    <TextField
      fullWidth
      label="Số hiệu"
      value={documentNo}
      onChange={(e) => setField("documentNo", e.target.value)}
      required
    />
  );
}
