import { Box, Button, Typography, Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import type { FormEvent } from "react";
import { useSubmit } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/vi";
import BidPackagesList from "./comp/BidPackagesList";
import DocInforSection from "./comp/formSection/DocInfor";
import ConstructionInforSection from "./comp/formSection/ConstructionInfor";

export default function ConstructionForm() {
  // 5. Submit
  const submit = useSubmit();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // submit(JSON.stringify(formData), { method: "post" });
    submit(null, { method: "post" });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <Box
        className="rounded-4xl card"
        component="form"
        onSubmit={handleSubmit}
        sx={{ mx: "auto", bgcolor: "#f5f5f5" }}
      >
        <Stack spacing={3} className="px-1 py-8">
          <Typography variant="h4" color="primary" gutterBottom>
            Tạo Mới Công Trình
          </Typography>

          {/* --- Phần 1: Thông tin chung --- */}
          <DocInforSection />
          {/* --- Phần 3: Gói thầu (Dynamic Array) --- */}
          <ConstructionInforSection />
          <Box>
            <BidPackagesList />
          </Box>

          {/* Action Buttons */}
          <Box display="flex" justifyContent="flex-end" gap={2} pb={5}>
            <Button variant="outlined" color="inherit">
              Hủy bỏ
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
            >
              Lưu Construction
            </Button>
          </Box>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}
