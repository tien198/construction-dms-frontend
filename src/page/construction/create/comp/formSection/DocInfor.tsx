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
          <Grid size={{ xs: 12 }}>
            <ConF.DocumentNo />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.DateOfSigning />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <ConF.SourceOfFunds />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <ConF.NameField />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.BudgetField />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <ConF.StringBudgetField />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
