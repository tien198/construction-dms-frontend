import { Build as BuildIcon } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";
import type { StoreApiInject } from "../../store-factory/store.type";

export default function ConstructionInforSection({ storeApi }: StoreApiInject) {
  return (
    <Card>
      <CardHeader
        title="Công trình"
        sub="Thông tin Công Trình"
        icon={<BuildIcon className="text-primary" sx={{ fontSize: 28 }} />}
      />
      <Divider></Divider>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <ConF.NameField storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <ConF.SourceOfFunds storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.BudgetField storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <ConF.StringBudgetField storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.ConstructionStartDate storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.ConstructionEndDate storeApi={storeApi} />
          </Grid>
          <ConF.ExistingConditionOfTheStructure storeApi={storeApi} />
          <ConF.RepairScope storeApi={storeApi} />
        </Grid>
      </CardContent>
    </Card>
  );
}
