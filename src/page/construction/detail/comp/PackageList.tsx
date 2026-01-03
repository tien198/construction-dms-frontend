import { Business } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import type { Construction } from "../../type/construction.type";
import PackageCard from "./PackageCard";

type Props = {
  con: Construction;
};
export default function PackageList({ con }: Props) {
  return (
    <Grid size={{ xs: 12 }}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          <Business
            sx={{
              verticalAlign: "middle",
              mr: 1,
              color: "primary.main",
            }}
          />
          Danh sách các gói thầu ({con.packages.length})
        </Typography>
        <Grid container spacing={3}>
          {con.packages.map((pkg, index) =>
            pkg ? (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <PackageCard item={pkg} />
              </Grid>
            ) : null
          )}
        </Grid>
      </Box>
    </Grid>
  );
}
