import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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

          {/* --- Phần 1: Thông tin chung --- */}
          <Card
            className="card-elevated"
            sx={{
              border: "1px solid",
              borderColor: "hsl(var(--border))",
            }}
          >
            <CardHeader
              title="Thông tin chung"
              subheader="Thông tin cơ bản về công trình"
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

          {/* --- Phần 2: Chi tiết thực hiện & Quyết định --- */}
          <Card>
            <CardHeader title="Chi tiết thực hiện & Quyết định" />
            <CardContent>
              <Divider sx={{ mb: 3 }}>Thời gian thực hiện</Divider>
              <Grid container spacing={3}>
                {/* Thời gian thực hiện */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <ConF.ConstructionStartDate />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ConF.ConstructionEndDate />
                </Grid>
              </Grid>
              {/* Quyết định */}
              <Divider sx={{ mt: 4, mb: 3 }}>Quyết định phê duyệt</Divider>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ConF.DecisionNumber />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ConF.DecisionDate />
                </Grid>
              </Grid>

              <Divider sx={{ mt: 4, mb: 3 }}>Thông tin kỹ thuật</Divider>
              <Stack spacing={2}>
                <ConF.ExistingConditionOfTheStructure />
                <ConF.RepairScope />
              </Stack>
            </CardContent>
          </Card>

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
