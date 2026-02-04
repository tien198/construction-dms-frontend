import { Box, TextField } from "@mui/material";
import { useStore } from "zustand";

import type { StoreApiInject } from "../../create/store/create-store";
export default function DocumentNo({ storeApi }: StoreApiInject) {
  const documentNo = useStore(storeApi, (state) => state.formData.no);
  const setField = useStore(storeApi, (state) => state.setField);

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
