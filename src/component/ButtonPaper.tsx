import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, IconButton, Paper, Typography } from "@mui/material";

type Props = { onClick: () => void };
export default function ButtonPaper({ onClick }: Props) {
  return (
    <Paper
      onClick={onClick}
      elevation={1} // Tắt bóng mặc định của MUI để dùng custom shadow
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4, // Bo góc lớn hiện đại
        bgcolor: "#FFFFFF",
        border: "1px solid #FFFFFF",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        // Hiệu ứng "White Glass" & Shadow
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        "&:hover": {
          transform: "translateX(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
          borderColor: "#E0E0E0", // Viền nhẹ khi hover
          "& .icon-arrow": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Icon trang trí đơn sắc */}
        <Box
          sx={{
            p: 1.5,
            borderRadius: 3,
            bgcolor: "#F9FAFB", // Nền icon xám siêu nhẹ
            color: "#9CA3AF",
            display: "flex",
          }}
        >
          <ApartmentRoundedIcon fontSize="small" />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#2d2d2d",
            textDecoration: "none",
          }}
        >
          Tạo tài liệu
        </Typography>
      </Box>

      {/* Mũi tên điều hướng ẩn hiện tinh tế */}
      <IconButton
        className="icon-arrow"
        size="small"
        sx={{
          color: "#d1d1d1",
          opacity: 0, // Ẩn mặc định
          transform: "translateX(-10px)",
          transition: "all 0.3s ease",
        }}
      >
        <ArrowForwardIosRoundedIcon fontSize="inherit" />
      </IconButton>
    </Paper>
  );
}
