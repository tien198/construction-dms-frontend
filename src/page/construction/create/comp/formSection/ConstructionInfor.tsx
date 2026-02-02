import { Build as BuildIcon } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";
import { createConstructionStore } from "../../store/create-store";

export default function ConstructionInforSection() {
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
            <ConF.NameField storeApi={createConstructionStore} />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <ConF.SourceOfFunds storeApi={createConstructionStore} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.BudgetField storeApi={createConstructionStore} />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <ConF.StringBudgetField storeApi={createConstructionStore} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.ConstructionStartDate storeApi={createConstructionStore} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.ConstructionEndDate storeApi={createConstructionStore} />
          </Grid>
          <ConF.ExistingConditionOfTheStructure
            storeApi={createConstructionStore}
          />
          <ConF.RepairScope storeApi={createConstructionStore} />
        </Grid>
      </CardContent>
    </Card>
  );
}
