import type { Construction } from "../../type/construction";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  CalendarToday,
  AttachMoney,
  Build,
  Gavel,
  Assignment,
  Engineering,
} from "@mui/icons-material";
import InfoItem from "./InforItem";
import { formatDate } from "../ultil/formatDate";

type Props = {
  con: Construction;
};
export default function ConstructionInformation({ con }: Props) {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Card elevation={2} sx={{ height: "100%", px: 5, py: 8 }}>
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Assignment color="primary" sx={{ mr: 1 }} /> Thông tin chung
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <InfoItem
              icon={<CalendarToday fontSize="small" />}
              label="Thời gian thực hiện"
              value={`${formatDate(
                con.constructionImplementationTime.startDate,
                "month"
              )} - ${formatDate(
                con.constructionImplementationTime.endDate,
                "month"
              )}`}
            />
            <InfoItem
              icon={<Gavel fontSize="small" />}
              label="Quyết định phê duyệt"
              value={
                <Box sx={{ display: "flex", gap: 2 }}>
                  <span>Số: {con.decision.number}</span>-
                  <span>Ngày: {formatDate(con.decision.date)}</span>
                </Box>
              }
            />
            <InfoItem
              icon={<AttachMoney fontSize="small" />}
              label="Nguồn vốn"
              value={con.sourceOfFunds}
            />
          </CardContent>

          {/* 3. Phạm vi & Hiện trạng */}

          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  display="flex"
                  alignItems="center"
                >
                  <Engineering color="warning" sx={{ mr: 1 }} />
                  Hiện trạng kết cấu
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 1,
                    border: "1px dashed #ccc",
                  }}
                >
                  <Typography sx={{ padding: 2 }}>
                    {con.existingConditionOfTheStructure}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  display="flex"
                  alignItems="center"
                  sx={{ mt: 1 }}
                >
                  <Build color="info" sx={{ mr: 1 }} />
                  Phạm vi sửa chữa
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 1,
                    border: "1px dashed #ccc",
                  }}
                >
                  <Typography sx={{ padding: 2 }}>{con.repairScope}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
