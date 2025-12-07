import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
import type { BidPackage, Construction } from "../type/construction";
import { useStore } from "zustand";
import { constructionStore } from "./store/zustandStore";
import dayjs from "dayjs";
import type { ChangeEvent, FormEvent } from "react";
import { useSubmit } from "react-router";
import { initialBidPackage } from "./constant/initialData";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/vi";
import type { PickerValue } from "@mui/x-date-pickers/internals";

const formatDateForInput = (date: Date | null | undefined): string => {
  if (!date) return "";
  return date instanceof Date ? date.toISOString().split("T")[0] : "";
};

export default function ConstructionForm() {
  const formData = useStore(constructionStore, (state) => state.formData);
  const setField = useStore(constructionStore, (state) => state.setField);
  const setDateField = useStore(
    constructionStore,
    (state) => state.setDateField
  );
  const setNestedField = useStore(
    constructionStore,
    (state) => state.setNestedField
  );
  const setNestedDateField = useStore(
    constructionStore,
    (state) => state.setNestedDateField
  );

  // --- Handlers ---

  // 1. Xử lý các trường cấp 1 (name, budget...)
  const handleChange =
    (prop: keyof Construction) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        event.target.type === "number"
          ? parseFloat(event.target.value)
          : event.target.value;
      setField(prop, value);
    };

  // 2. Xử lý trường Date cấp 1
  const handleDateChange = (prop: keyof Construction) => (val: PickerValue) => {
    setDateField(prop, val);
  };

  // 3. Xử lý Nested Object (decision, constructionExecutionTime)
  const handleNestedChange =
    (parent: "decision" | "constructionExecutionTime", child: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setNestedField(parent, child, value);
    };

  const handleNestedDateChange =
    (parent: keyof Construction, child: string) => (val: PickerValue) => {
      setNestedDateField(parent, child, val);
    };

  // 4. Xử lý Mảng Packages (Thêm/Sửa/Xóa)
  const handleAddPackage = () => {
    setField("packages", [...formData.packages, { ...initialBidPackage }]);
  };

  const handleRemovePackage = (index: number) => {
    const newPackages = [...formData.packages];
    newPackages.splice(index, 1);
    setField("packages", newPackages);
  };

  const handlePackageChange =
    (index: number, prop: keyof BidPackage, isDate: boolean = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const newPackages = [...formData.packages];
      const currentPackage = newPackages[index];

      if (currentPackage) {
        let value: any = event.target.value;
        if (event.target.type === "number") value = parseFloat(value);
        if (isDate) value = value ? new Date(value) : null;

        newPackages[index] = { ...currentPackage, [prop]: value };
        setField("packages", newPackages);
      }
    };

  // 5. Submit
  const submit = useSubmit();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(JSON.stringify(formData), { method: "post" });
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
          <Card>
            <CardHeader
              title="Thông tin chung"
              subheader="Thông tin cơ bản về công trình"
            />
            <Divider></Divider>
            <CardContent>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    label="Số hiệu"
                    value={formData.documentNo}
                    onChange={handleChange("documentNo")}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <DatePicker
                    label="Ngày ký"
                    value={dayjs(formData.dateOfSigning)}
                    onChange={handleDateChange("dateOfSigning")}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    label="Nguồn vốn"
                    value={formData.sourceOfFunds}
                    onChange={handleChange("sourceOfFunds")}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Tên công trình"
                    value={formData.name}
                    onChange={handleChange("name")}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Ngân sách"
                    value={formData.budget}
                    onChange={handleChange("budget")}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    label="Ngân sách bằng chữ"
                    value={formData.stringBudget}
                    onChange={handleChange("stringBudget")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* --- Phần 2: Chi tiết thực hiện & Quyết định --- */}
          <Card>
            <CardHeader title="Chi tiết thực hiện & Quyết định" />
            <CardContent>
              <Divider sx={{ mb: 3 }}>Thời gian thi công</Divider>
              <Grid container spacing={3}>
                {/* Thời gian thực hiện */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <DatePicker
                    label="Ngày bắt đầu"
                    value={dayjs(formData.constructionExecutionTime.startDate)}
                    onChange={handleNestedDateChange(
                      "constructionExecutionTime",
                      "startDate"
                    )}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <DatePicker
                    label="Ngày kết thúc"
                    value={dayjs(formData.constructionExecutionTime.endDate)}
                    onChange={handleNestedDateChange(
                      "constructionExecutionTime",
                      "endDate"
                    )}
                  />
                </Grid>
              </Grid>
              {/* Quyết định */}
              <Divider sx={{ mt: 4, mb: 3 }}>Quyết định phê duyệt</Divider>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Số quyết định"
                    value={formData.decision.number}
                    onChange={handleNestedChange("decision", "number")}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <DatePicker
                    label="Ngày quyết định"
                    value={dayjs(formData.decision.date)}
                    onChange={handleNestedDateChange("decision", "date")}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mt: 4, mb: 3 }}>Thông tin kỹ thuật</Divider>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Hiện trạng kết cấu"
                  value={formData.existingConditionOfTheStructure}
                  onChange={handleChange("existingConditionOfTheStructure")}
                />
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Phạm vi sửa chữa"
                  value={formData.repairScope}
                  onChange={handleChange("repairScope")}
                />
              </Stack>
            </CardContent>
          </Card>

          {/* --- Phần 3: Gói thầu (Dynamic Array) --- */}
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">
                Danh sách gói thầu ({formData.packages.length})
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleAddPackage}
                color="secondary"
              >
                Thêm gói thầu
              </Button>
            </Stack>

            {formData.packages.map((pkg, index) => {
              if (!pkg) return null; // Safety check
              return (
                <Card
                  key={index}
                  sx={{ mb: 2, borderLeft: "4px solid #1976d2" }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid
                        size={{ xs: 12 }}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Typography variant="subtitle1" fontWeight="bold">
                          Gói thầu #{index + 1}
                        </Typography>
                        <IconButton
                          onClick={() => handleRemovePackage(index)}
                          color="error"
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>

                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Tên gói thầu"
                          value={pkg.bidPackageName}
                          onChange={handlePackageChange(
                            index,
                            "bidPackageName"
                          )}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Chủ đầu tư"
                          value={pkg.projectOwner}
                          onChange={handlePackageChange(index, "projectOwner")}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Giá gói thầu"
                          value={pkg.price}
                          onChange={handlePackageChange(index, "price")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                          fullWidth
                          type="date"
                          label="TG chọn nhà thầu"
                          InputLabelProps={{ shrink: true }}
                          value={formatDateForInput(
                            pkg.contractorSelectionTime
                          )}
                          onChange={handlePackageChange(
                            index,
                            "contractorSelectionTime",
                            true
                          )}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                          fullWidth
                          label="Thời gian thực hiện"
                          value={pkg.implementDuration}
                          onChange={handlePackageChange(
                            index,
                            "implementDuration"
                          )}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Hình thức lựa chọn"
                          value={pkg.contractorSelectionMethod}
                          onChange={handlePackageChange(
                            index,
                            "contractorSelectionMethod"
                          )}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Loại hợp đồng"
                          value={pkg.contractType}
                          onChange={handlePackageChange(index, "contractType")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={3}
                          label="Mô tả ngắn"
                          value={pkg.shortDescription}
                          onChange={handlePackageChange(
                            index,
                            "shortDescription"
                          )}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}

            {formData.packages.length === 0 && (
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                py={3}
              >
                Chưa có gói thầu nào. Nhấn "Thêm gói thầu" để bắt đầu.
              </Typography>
            )}
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
