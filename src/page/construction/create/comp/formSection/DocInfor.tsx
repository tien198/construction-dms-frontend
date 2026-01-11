import { Build as BuildIcon } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";

export default function DocInforSection() {
  return (
    <Card>
      <CardHeader
        title="TTr và QĐ"
        sub="Thông tin về Tờ Trình và Quyết Định"
        icon={<BuildIcon className="text-primary" sx={{ fontSize: 28 }} />}
      />
      <Divider></Divider>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.SubmissionNo />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.DecisionNo />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} />
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.DateOfSigning />
          </Grid>
        </Grid>
        <Divider>Căn cứ vào</Divider>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionNo />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionDate />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTTMNDecisionNo />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTTMNDecisionDate />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
