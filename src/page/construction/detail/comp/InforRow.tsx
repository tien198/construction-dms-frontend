import { Box, Grid, Typography } from "@mui/material";

// Hiển thị 1 dòng label - value (dùng nhiều nơi)
const InfoRow: React.FC<{ label: string; value?: React.ReactNode }> = ({
  label,
  value,
}) => (
  <Grid container wrap="nowrap" spacing={2}>
    <Box minWidth="8rem">
      <Typography variant="body2" color="text.secondary">
        {label}:
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" textAlign="left">
        {value ?? "-"}
      </Typography>
    </Box>
  </Grid>
);

export default InfoRow;
