import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import type { Construction } from "../../type/construction";
import { formatDate } from "../ultil/formatDate";
import { formatCurrency } from "../ultil/currencyFormat";

type Props = {
  con: Construction;
};
export default function Header({ con }: Props) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: "white",
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={20}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h2" fontWeight="bold">
            {con.name}
          </Typography>
          <Typography variant="h5" display="flex" alignItems="center" gap={3}>
            Số hiệu:{" "}
            <Chip
              label={con.documentNo}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "2rem",
                padding: 3,
              }}
            />
            •<span> Ngày ký: {formatDate(con.dateOfSigning)}</span>
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          borderRadius={5}
          sx={{
            textAlign: { xs: "left", md: "right" },
            bgcolor: "rgba(255,255,255,0.1)",
            padding: 5,
            pl: 8,
          }}
        >
          <Typography>Ngân sách</Typography>
          <Typography variant="h4" fontWeight="bold">
            {formatCurrency(con.budget)}
          </Typography>
          <Typography variant="h5" sx={{ fontStyle: "italic", opacity: 0.8 }}>
            ({con.stringBudget})
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
