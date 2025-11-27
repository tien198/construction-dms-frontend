import { Button, Grid, Paper, Typography, Box, Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Form } from "react-router";
import ConF from "./comp/ConstructionFormFields";

export default function ConstructionPage() {
  // Get only formData from store; individual components use the store for updates
  // const { setField, setNestedField, setDateField, setNestedDateField } =
  //   useConstructionStore();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mb: 3, fontWeight: "bold", color: "#1976d2" }}
          >
            Thông Tin Công Trình
          </Typography>

          <Form method="post">
            <Grid container spacing={2}>
              {/* --- Thông tin chung --- */}
              <Grid size={{ xs: 12, md: 2 }}>
                <ConF.DocumentNo />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <ConF.NameField />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <ConF.DateOfSigning />
              </Grid>

              {/* --- Ngân sách --- */}
              <Grid size={{ xs: 12, md: 4 }}>
                <ConF.BudgetField />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <ConF.StringBudgetField />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thời gian thi công</Divider>
              </Grid>

              {/* --- Thời gian thi công (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.StartDate />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.EndDate />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Quyết định phê duyệt</Divider>
              </Grid>

              {/* --- Quyết định (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.DecisionNumberField />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.DecisionDateField />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thông tin kỹ thuật</Divider>
              </Grid>

              {/* --- Thông tin mô tả --- */}
              <Grid size={12}>
                <ConF.ExistingConditionField />
              </Grid>
              <Grid size={12}>
                <ConF.RepairScopeField />
              </Grid>

              {/* --- Button Submit --- */}
              <Grid
                size={12}
                sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
              >
                <Button variant="contained" size="large" type="submit">
                  Lưu Công Trình
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}
