import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import type { FormEvent } from "react";
import { useSubmit } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/vi";
import ConF from "./comp/ConstructionFormFields";
import BidPackagesList from "./comp/BidPackagesList";
import { CardHeader } from "../../../component/CardHeader";
import { Build as BuildIcon } from "@mui/icons-material";

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
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "#f5f5f5" }}
      >
        <Stack spacing={3}>
          <Typography variant="h4" color="primary" gutterBottom>
            Tạo Mới Công Trình
          </Typography>

          <Card className="card-elevanted rounded-4xl p-4" square>
            <CardHeader
              title="Thông tin chung"
              sub="Thông tin cơ bản về công trình"
              icon={
                <BuildIcon className="text-primary" sx={{ fontSize: 28 }} />
              }
            />
            <Divider></Divider>
            <CardContent>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ConF.DocumentNo />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ConF.DateOfSigning />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ConF.SourceOfFunds />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <ConF.NameField />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <ConF.BudgetField />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <ConF.StringBudgetField />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* --- Phần 1: Thông tin chung --- */}
          {/* --- Phần 3: Gói thầu (Dynamic Array) --- */}
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
