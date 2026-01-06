import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  sub: string;
  icon: React.ReactNode;
};
export function CardHeader({ title, sub, icon }: Props) {
  return (
    <Box className="flex items-center gap-3 p-5">
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "10px",
          backgroundColor: "hsl(var(--primary-light))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <div>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "hsl(var(--foreground))",
            fontFamily: "Manrope, Inter, sans-serif",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "hsl(var(--muted-foreground))" }}
        >
          {sub}
        </Typography>
      </div>
    </Box>
  );
}
