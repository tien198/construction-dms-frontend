import { Box, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DocumentNo() {
  const documentNo = useStore(constructionStore, (state) => state.formData.no);
  const setField = useStore(constructionStore, (state) => state.setField);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        fullWidth
        label="Số Tờ Trình"
        value={documentNo}
        onChange={(e) => setField("no", e.target.value)}
        required
      />
    </Box>
  );
}
