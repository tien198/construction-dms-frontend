import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import type { BidPackage } from "../../type/bid-package.type";
import { formatDate } from "../ultil/formatDate";
import SuccessfulBidderInfo from "./BidderInfor";

const BidPackageCard: React.FC<{ pkg: BidPackage }> = ({ pkg }) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">{pkg.bidPackageName}</Typography>

          <Stack direction="row" spacing={1}>
            <Chip
              label={pkg.isCompleted ? "Đã hoàn thành" : "Chưa hoàn thành"}
              color={pkg.isCompleted ? "success" : "default"}
              size="small"
            />
          </Stack>

          <Typography variant="body2">
            <strong>Giá gói thầu:</strong> {pkg.costString}
          </Typography>

          <Typography variant="body2">
            <strong>Hình thức lựa chọn nhà thầu:</strong>{" "}
            {pkg.bidderSelectionMethod}
          </Typography>

          <Typography variant="body2">
            <strong>Thời gian lựa chọn nhà thầu:</strong>{" "}
            {formatDate(pkg.bidderSelectionTime)}
          </Typography>

          {pkg.successfulBidder && (
            <>
              <Divider />
              <SuccessfulBidderInfo bidder={pkg.successfulBidder} />
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BidPackageCard;
