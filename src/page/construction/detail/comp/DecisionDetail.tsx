import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import DecisionCard from "./DecisionCard";
import ConstructionInfor from "./ConstructionInfor";
import BidPackageCard from "./BidPackageCard";
import DecisionAction from "./Dial";
import type { Decision } from "../../type/decision.type";

export default function DecisionDetail({ decision }: { decision: Decision }) {
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
