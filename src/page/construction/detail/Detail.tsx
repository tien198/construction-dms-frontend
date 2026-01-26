// ...existing code...
import { useLoaderData } from "react-router";
import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import type { Construction } from "../type/construction.type";
import DecisionCard from "./comp/DecisionCard";
import ConstructionInfor from "./comp/ConstructionInfor";
import BidPackageCard from "./comp/BidPackageCard";

export default function ConstructionDetailPage() {
  const construction = useLoaderData<Construction>();
  // const construction = list[0] as Construction;
  if (construction == null)
    return (
      <div className="flex items-center justify-center h-96 font-bold text-3xl">
        Not found
      </div>
    );
  const { constructionInfor, decisions } = construction;

  return (
    <Container maxWidth="lg">
      <Stack spacing={3}>
        {/* Quyết định & hồ sơ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Tờ Trình & Quyết định
          </Typography>

          <Grid container spacing={2}>
            {decisions?.map((decision, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <DecisionCard decision={decision} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Thông tin chung */}
        <ConstructionInfor info={constructionInfor} />

        {/* Danh sách gói thầu */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Danh sách gói thầu
          </Typography>

          <Grid container spacing={2}>
            {constructionInfor.bidPackages?.map((pkg, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <BidPackageCard pkg={pkg} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
