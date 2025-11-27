import { Button, Grid, Paper, Typography, Box, Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Form } from "react-router";
import DocumentNo from "./comp/DocumentNo";
import NameField from "./comp/Name";
import DateOfSigning from "./comp/DateOfSigning";
import BudgetField from "./comp/Budget";
import StringBudgetField from "./comp/StringBudget";
import StartDate from "./comp/StartDate";
import EndDate from "./comp/EndDate";
import DecisionNumberField from "./comp/DecisionNumber";
import DecisionDateField from "./comp/DecisionDate";
import ExistingConditionField from "./comp/ExistingCondition";
import RepairScopeField from "./comp/RepairScope";

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
                <DocumentNo />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <NameField />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <DateOfSigning />
              </Grid>

              {/* --- Ngân sách --- */}
              <Grid size={{ xs: 12, md: 4 }}>
                <BudgetField />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <StringBudgetField />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thời gian thi công</Divider>
              </Grid>

              {/* --- Thời gian thi công (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <StartDate />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EndDate />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Quyết định phê duyệt</Divider>
              </Grid>

              {/* --- Quyết định (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <DecisionNumberField />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <DecisionDateField />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thông tin kỹ thuật</Divider>
              </Grid>

              {/* --- Thông tin mô tả --- */}
              <Grid size={12}>
                <ExistingConditionField />
              </Grid>
              <Grid size={12}>
                <RepairScopeField />
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
