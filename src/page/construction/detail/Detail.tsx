// ...existing code...
import { useLoaderData } from "react-router";
import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import DecisionCard from "./comp/DecisionCard";
import ConstructionInfor from "./comp/ConstructionInfor";
import BidPackageCard from "./comp/BidPackageCard";
import type { Decision } from "../type/decision.type";
import DecisionAction from "./comp/Dial";
import NotFound_AddSubmissionForm from "./comp/Notfound";

export default function ConstructionDetailPage() {
  const decision = useLoaderData<Decision>();

  if (decision == null) return <NotFound_AddSubmissionForm />;

  return (
    <Container maxWidth="lg" className="bg-gray-200 py-9">
      <DecisionAction decId={decision.id} />
      <Stack spacing={7}>
        {/* Quyết định & hồ sơ */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Tờ Trình & Quyết định
          </Typography>

          <Grid size={{ xs: 12 }}>
            <DecisionCard decision={decision} />
          </Grid>
        </Box>
        {/* Thông tin chung */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Thông tin công trình
          </Typography>
          <ConstructionInfor info={decision.submission.constructionInfor!} />
        </Box>
        {/* Danh sách gói thầu */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Danh sách gói thầu
          </Typography>

          <Grid container spacing={2}>
            {decision.submission.constructionInfor?.bidPackages?.map(
              (pkg, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <BidPackageCard pkg={pkg} />
                </Grid>
              ),
            )}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
