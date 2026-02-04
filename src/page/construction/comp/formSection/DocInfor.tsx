import { Build as BuildIcon } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";
import type { ConstructionPeriod } from "../../type/construction.type";
import type { StoreApiInject } from "../../store-factory/store.type";

type Props = {
  period: ConstructionPeriod;
} & StoreApiInject;

export default function DocInforSection({ storeApi, period }: Props) {
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
            <ConF.SubmissionNo storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.DecisionNo storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} />
          <Grid size={{ xs: 12, md: 4 }}>
            <ConF.DateOfSigning storeApi={storeApi} />
          </Grid>
        </Grid>
        <Divider>Căn cứ vào</Divider>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionNo storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ConF.PursuantTCTDecisionDate storeApi={storeApi} />
          </Grid>
          {!(period === "KH") && (
            <>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.PursuantTTMNDecisionNo storeApi={storeApi} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ConF.PursuantTTMNDecisionDate storeApi={storeApi} />
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
