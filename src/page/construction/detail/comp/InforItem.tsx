import { Box, Typography } from "@mui/material";

export default function InfoItem({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      <Box sx={{ color: "navy", mr: 1.5, mt: 0.5 }}>{icon}</Box>
      <Typography variant="body1" display="block">
        {label}:
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight={highlight ? 700 : 600}
        color={highlight ? "primary.main" : "text.primary"}
      >
        {value}
      </Typography>
    </Box>
  );
}
