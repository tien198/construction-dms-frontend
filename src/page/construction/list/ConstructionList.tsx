import {
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import { Link, useLoaderData } from "react-router";
import type { Construction } from "../type/construction";

// 1. Định nghĩa Type như yêu cầu
type ConstructionsArr = Construction[];

export default function ConstructionList() {
  const data = useLoaderData<ConstructionsArr>();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F5F7", // Màu nền xám khói rất nhẹ để làm nổi bật thẻ trắng
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Tối giản */}
        <Box mb={6} textAlign="center">
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a", // Đen nhạt thay vì đen tuyền
              letterSpacing: "-0.5px",
              mb: 1,
            }}
          >
            Danh Sách Công Trình
          </Typography>
          <Typography variant="body2" sx={{ color: "#888" }}>
            Construction Projects List
          </Typography>
        </Box>

        {/* Danh sách */}
        <Grid container spacing={2}>
          {data.map((construction, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Link
                to={"/cong-trinh/" + construction.id}
                style={{ display: "block", textDecoration: "none" }}
              >
                <Paper
                  elevation={0} // Tắt bóng mặc định của MUI để dùng custom shadow
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
                      {construction.name}
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
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
