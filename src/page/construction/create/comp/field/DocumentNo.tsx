import { Box, MenuItem, TextField } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DocumentNo() {
  const documentNo = useStore(constructionStore, (state) => state.formData.no);
  const level = useStore(constructionStore, (state) => state.formData.level);
  const setField = useStore(constructionStore, (state) => state.setField);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        label="Số hiệu"
        value={documentNo}
        onChange={(e) => setField("no", e.target.value)}
        required
      />
      <TextField
        select
        label="Cấp"
        value={level}
        onChange={(e) => setField("level", e.target.value)}
      >
        <MenuItem value="LCQ">LCQ</MenuItem>
      </TextField>
    </Box>
  );
}
