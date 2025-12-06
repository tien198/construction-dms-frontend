import { Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { BidPackageDefaultValue as defVal } from "./BidPackageList.Default";
import { useStore } from "zustand";
import { constructionStore } from "../store/zustandStore";

// Gợi ý cấu trúc Grid cho item của gói thầu (để bạn implement vào BidPackagesList)
export default function BidPackagesList() {
  const package = useStore(
    constructionStore,
    (state) => state.formData.packages[0]
  );

  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" color="primary">
            Gói thầu #1
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Chủ đầu tư"
            name="packages[0].projectOwner"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Tên gói thầu"
            name="packages[0].bidPackageName"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Giá gói thầu"
            type="number"
            name="packages[0].price"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <DatePicker
            label="Thời gian chọn thầu"
            name="packages[0].contractorSelectionTime"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Thời gian thực hiện"
            name="packages[0].implementDuration"
            placeholder="10 ngày"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            label="Hình thức lựa chọn"
            name="packages[0].contractorSelectionMethod"
            value={}
            fullWidth
          >
            {defVal.contractorSelectionMethod.map((i) => (
              <MenuItem value="Chỉ định thầu rút gọn">{i}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Loại hợp đồng"
            name="packages[0].contractType"
            fullWidth
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Tóm tắt công việc"
            name="packages[0].shortDescription"
            multiline
            minRows={2}
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
