import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/vi";
import type { Construction } from "../type/construction";

export default function ConstructionPage() {
  // Khởi tạo state ban đầu
  const [formData, setFormData] = useState<Construction>({
    number: 0,
    name: "",
    dateOfSigning: null,
    budget: 0,
    stringBudget: "",
    constructionExecutionTime: {
      startDate: null,
      endDate: null,
    },
    existingConditionOfTheStructure: "",
    repairScope: "",
    decision: {
      decisionNumber: "",
      decisionDate: null,
    },
  });

  // Xử lý thay đổi input ở cấp 1 (root level)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xử lý thay đổi input cho object lồng nhau (nested object)
  const handleNestedChange = (
    parentField: keyof Construction,
    childField: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [parentField]: {
        ...(prev[parentField] as object),
        [childField]: value,
      },
    }));
  };

  // Xử lý thay đổi Date (MUI DatePicker trả về object Dayjs)
  const handleDateChange = (name: keyof Construction, value: Dayjs | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value ? value.toDate() : null,
    }));
  };

  // Xử lý thay đổi Date trong object lồng nhau
  const handleNestedDateChange = (
    parentField: keyof Construction,
    childField: string,
    value: Dayjs | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [parentField]: {
        ...(prev[parentField] as object),
        [childField]: value ? value.toDate() : null,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dữ liệu form:", formData);
    alert("Đã gửi dữ liệu! (Kiểm tra console)");
  };

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

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* --- Thông tin chung --- */}
              <Grid size={{ xs: 12, md: 2 }}>
                <TextField
                  fullWidth
                  label="Số hiệu"
                  name="number"
                  type="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <TextField
                  fullWidth
                  label="Tên công trình"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <DatePicker
                  label="Ngày ký kết"
                  value={
                    formData.dateOfSigning
                      ? dayjs(formData.dateOfSigning)
                      : null
                  }
                  onChange={(val) => handleDateChange("dateOfSigning", val)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>

              {/* --- Ngân sách --- */}
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Ngân sách (VNĐ)"
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleChange}
                  // helperText={"loi"}
                  // error={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <TextField
                  fullWidth
                  label="Bằng chữ"
                  name="stringBudget"
                  value={formData.stringBudget}
                  onChange={handleChange}
                  placeholder="Ví dụ: Một tỷ đồng..."
                />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thời gian thi công</Divider>
              </Grid>

              {/* --- Thời gian thi công (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="Ngày bắt đầu"
                  value={
                    formData.constructionExecutionTime.startDate
                      ? dayjs(formData.constructionExecutionTime.startDate)
                      : null
                  }
                  onChange={(val) =>
                    handleNestedDateChange(
                      "constructionExecutionTime",
                      "startDate",
                      val
                    )
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="Ngày kết thúc"
                  value={
                    formData.constructionExecutionTime.endDate
                      ? dayjs(formData.constructionExecutionTime.endDate)
                      : null
                  }
                  onChange={(val) =>
                    handleNestedDateChange(
                      "constructionExecutionTime",
                      "endDate",
                      val
                    )
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Quyết định phê duyệt</Divider>
              </Grid>

              {/* --- Quyết định (Nested Object) --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Số quyết định"
                  value={formData.decision.decisionNumber}
                  onChange={(e) =>
                    handleNestedChange(
                      "decision",
                      "decisionNumber",
                      e.target.value
                    )
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="Ngày quyết định"
                  value={
                    formData.decision.decisionDate
                      ? dayjs(formData.decision.decisionDate)
                      : null
                  }
                  onChange={(val) =>
                    handleNestedDateChange("decision", "decisionDate", val)
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>

              <Grid size={12}>
                <Divider sx={{ my: 1 }}>Thông tin kỹ thuật</Divider>
              </Grid>

              {/* --- Thông tin mô tả --- */}
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Hiện trạng kết cấu"
                  name="existingConditionOfTheStructure"
                  value={formData.existingConditionOfTheStructure}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Phạm vi sửa chữa"
                  name="repairScope"
                  value={formData.repairScope}
                  onChange={handleChange}
                />
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
          </form>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}
