import { Box, Chip, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DocumentNo() {
  const documentNo = useStore(
    constructionStore,
    (state) => state.formData.documentNo
  );
  const setField = useStore(constructionStore, (state) => state.setField);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        label="Số hiệu"
        value={documentNo}
        onChange={(e) => setField("documentNo", e.target.value)}
        required
      />
      <Chip
        label="/ TTr-LCQ"
        sx={{
          bgcolor: "#6b3509ff",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: 1,
          py: 3,
        }}
      />
    </Box>
  );
}
