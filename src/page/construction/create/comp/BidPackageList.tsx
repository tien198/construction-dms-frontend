import { Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { BidPackageDefaultValue as defVal } from "./BidPackageList.Default";
import type { BidPackage } from "../../type/construction";

// Gợi ý cấu trúc Grid cho item của gói thầu (để bạn implement vào BidPackagesList)
export default function BidPackagesComp({
  bidPackage,
}: {
  bidPackage: BidPackage;
}) {
  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" color="primary">
            Gói thầu #1
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField label="Chủ đầu tư" name="package.projectOwner" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Tên gói thầu"
            name="package.bidPackageName"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Giá gói thầu"
            type="number"
            name="package.price"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <DatePicker
            label="Thời gian chọn thầu"
            name="package.contractorSelectionTime"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Thời gian thực hiện"
            name="package.implementDuration"
            placeholder="10 ngày"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            label="Hình thức lựa chọn"
            name="package.contractorSelectionMethod"
            value={bidPackage.contractorSelectionMethod}
            fullWidth
          >
            {defVal.contractorSelectionMethod.map((i) => (
              <MenuItem value={i}>{i}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Loại hợp đồng"
            name="package.contractType"
            fullWidth
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Tóm tắt công việc"
            name="package.shortDescription"
            multiline
            minRows={2}
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
