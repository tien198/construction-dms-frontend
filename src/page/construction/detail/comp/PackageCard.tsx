import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { formatCurrency } from "../ultil/currencyFormat";
import { formatDate } from "../ultil/formatDate";
import type { BidPackage } from "../../type/construction";

export default function PackageCard({ item }: { item: BidPackage }) {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        px: 5,
        py: 8,
        transition: "0.3s",
        "&:hover": {
          boxShadow: theme.shadows[4],
          borderColor: theme.palette.primary.dark,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          mb={1}
        >
          <Typography variant="h5" fontWeight="bold" color="primary">
            {item.bidPackageName}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={1}
          >
            <span style={{ paddingRight: "1rem" }}>Loại hợp đồng:</span>
            <Chip
              label={item.contractType}
              color="success"
              variant="outlined"
              sx={{
                fontSize: "1.25rem",
                padding: 3,
              }}
            />
          </Box>
        </Stack>

        <Typography color="text.secondary" sx={{ mt: 3, minHeight: "40px" }}>
          {item.shortDescription}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">Giá gói thầu:</Typography>
            <Typography fontWeight="bold">
              {formatCurrency(item.price)}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">Thời gian chọn thầu:</Typography>
            <Typography>{formatDate(item.contractorSelectionTime)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">Thực hiện:</Typography>
            <Typography>{item.implementDuration}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">Hình thức:</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {item.contractorSelectionMethod}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
