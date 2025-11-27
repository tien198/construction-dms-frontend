import { Typography, Box, Stack } from "@mui/material";

// Component con để hiển thị từng block thông tin nhỏ
export default function ItemInfo({
  icon,
  label,
  value,
  isHighlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  isHighlight?: boolean;
}) {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
        <Box sx={{ color: "text.secondary", display: "flex" }}>{icon}</Box>
        <Typography
          variant="caption"
          fontWeight="bold"
          color="text.secondary"
          sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
        >
          {label}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        fontWeight={isHighlight ? 600 : 400}
        color="text.primary"
      >
        {value || "---"}
      </Typography>
    </Box>
  );
}
