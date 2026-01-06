import { Box, Container, Typography, Paper, Chip } from "@mui/material";
import { AccountBalance as AccountBalanceIcon } from "@mui/icons-material";
import { Outlet } from "react-router";
import NavBar from "./Navbar";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "hsl(var(--background))",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <Paper
          elevation={0}
          sx={{
            mb: 4,
            p: 4,
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-hover)) 100%)",
            boxShadow: "var(--shadow-elegant)",
          }}
        >
          <Box className="flex items-center gap-4 mb-3">
            <Box
              className="flex items-center justify-center bg-primary-foreground"
              sx={{
                width: 64,
                height: 64,
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
              }}
            >
              <AccountBalanceIcon sx={{ color: "white", fontSize: 36 }} />
            </Box>
            <div>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "Manrope, Inter, sans-serif",
                  mb: 1,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                }}
              >
                Quản lý Dự án Xây dựng
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "hsl(0 0% 100% / 0.9)",
                  fontSize: "1.1rem",
                }}
              >
                Hệ thống quản lý thông tin công trình và gói thầu
              </Typography>
            </div>
          </Box>
          <Chip
            label="Hệ thống hành chính - Đầu tư xây dựng"
            sx={{
              backgroundColor: "hsl(0 0% 100% / 0.2)",
              color: "white",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
            }}
          />
        </Paper>
        <NavBar />
        <Outlet />
      </Container>
    </Box>
  );
}
