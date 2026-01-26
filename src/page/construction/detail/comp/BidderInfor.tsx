import { Box, Typography, Stack } from "@mui/material";
import type { Bidder } from "../../type/bidder.type";

// Nhà thầu trúng thầu
const SuccessfulBidderInfo: React.FC<{ bidder: Bidder }> = ({ bidder }) => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Nhà thầu trúng thầu
      </Typography>

      <Stack spacing={1}>
        <Typography variant="body2">
          <strong>Tên nhà thầu:</strong> {bidder.name}
        </Typography>

        <Typography variant="body2">
          <strong>Đại diện pháp luật:</strong> {bidder.legalRepresentative.name}{" "}
          ({bidder.legalRepresentative.position})
        </Typography>

        <Typography variant="body2">
          <strong>Mã số thuế:</strong> {bidder.taxCode}
        </Typography>

        <Typography variant="body2">
          <strong>Ngân hàng:</strong> {bidder.bankAccount.bankName} – Chi nhánh{" "}
          {bidder.bankAccount.branch}
        </Typography>

        <Typography variant="body2">
          <strong>Số tài khoản:</strong> {bidder.bankAccount.accountNumber}
        </Typography>
      </Stack>
    </Box>
  );
};

export default SuccessfulBidderInfo;
