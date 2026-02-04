import { Build as BuildIcon } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";
import { createConstructionStore } from "../../create/store/create-store";
import type { ConstructionPeriod } from "../../type/construction.type";

export default function DocInforSection({
  period,
}: {
  period: ConstructionPeriod;
}) {
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
            <ConF.SubmissionNo storeApi={createConstructionStore} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.DecisionNo storeApi={createConstructionStore} />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} />
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.DateOfSigning storeApi={createConstructionStore} />
          </Grid>
        </Grid>
        <Divider>Căn cứ vào</Divider>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionNo storeApi={createConstructionStore} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionDate storeApi={createConstructionStore} />
          </Grid>
          {!(period === "KH") && (
            <>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.PursuantTTMNDecisionNo
                  storeApi={createConstructionStore}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.PursuantTTMNDecisionDate
                  storeApi={createConstructionStore}
                />
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
