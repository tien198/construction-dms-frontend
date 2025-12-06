import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Stack,
  Chip,
  Paper,
} from "@mui/material";
import {
  CalendarTodayOutlined,
  AttachMoneyOutlined,
  DescriptionOutlined,
  GavelOutlined,
  BuildCircleOutlined,
  HomeWorkOutlined,
} from "@mui/icons-material";

import type { Construction } from "../type/construction";
import ItemInfo from "./comp/ItemInfo";
import { useLoaderData } from "react-router";
import { formatDate } from "./ultil/dataFormat";
import { formatCurrency } from "./ultil/currencyFormat";
import DocListDialog from "./comp/DocListDialog";

export default function ConstructionDetail() {
  const data = useLoaderData<Construction>();

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 800,
        width: "100%",
        borderRadius: 3,
        borderColor: "grey.300",
        backgroundColor: "#fff",
        margin: "auto",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Header Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={3}
        >
          <Box>
            <Chip
              label={`Số hồ sơ: ${data.documentNo}`}
              size="small"
              sx={{
                borderRadius: 1,
                bgcolor: "grey.100",
                color: "text.secondary",
                mb: 1,
                fontWeight: 500,
              }}
            />
            <Typography
              variant="h5"
              fontWeight={700}
              color="text.primary"
              gutterBottom
            >
              {data.name}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <GavelOutlined sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                QĐ số: <b>{data.decision.number}</b> (
                {formatDate(data.decision.date)})
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderStyle: "dashed" }} />

        {/* Main Info Grid */}
        <Grid container spacing={4}>
          {/* Cột 1: Tài chính & Thời gian */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <ItemInfo
                icon={<AttachMoneyOutlined fontSize="small" />}
                label="Tổng ngân sách"
                value={
                  <Box>
                    <Typography
                      component="span"
                      fontWeight={600}
                      fontSize="1.1rem"
                    >
                      {formatCurrency(data.budget)}
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {data.stringBudget}
                    </Typography>
                  </Box>
                }
                isHighlight
              />

              <ItemInfo
                icon={<DescriptionOutlined fontSize="small" />}
                label="Ngày ký kết"
                value={formatDate(data.dateOfSigning)}
              />

              <ItemInfo
                icon={<CalendarTodayOutlined fontSize="small" />}
                label="Thời gian thực hiện"
                value={`${formatDate(
                  data.constructionExecutionTime.startDate
                )} — ${formatDate(data.constructionExecutionTime.endDate)}`}
              />
            </Stack>
          </Grid>

          {/* Cột 2: Thông tin chi tiết (Text dài) */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {/* Sử dụng Paper nhẹ để làm nổi bật khối nội dung dài */}
              <Box>
                <Stack direction="row" spacing={1} mb={1}>
                  <HomeWorkOutlined
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase" }}
                  >
                    Hiện trạng
                  </Typography>
                </Stack>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, bgcolor: "grey.50", border: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
                  >
                    {data.existingConditionOfTheStructure}
                  </Typography>
                </Paper>
              </Box>

              <Box>
                <Stack direction="row" spacing={1} mb={1}>
                  <BuildCircleOutlined
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase" }}
                  >
                    Phạm vi sửa chữa
                  </Typography>
                </Stack>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, bgcolor: "grey.50", border: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
                  >
                    {data.repairScope}
                  </Typography>
                </Paper>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <DocListDialog />
    </Card>
  );
}
