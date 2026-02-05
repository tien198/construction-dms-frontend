import { Build as BuildIcon } from "@mui/icons-material";
import { Button, Card, CardContent, Divider, Grid } from "@mui/material";
import { CardHeader } from "../../../../component/CardHeader";
import ConF from "../ConstructionFormFields";
import type { StoreApiInject } from "../../store-factory/store.type";
import { useStore } from "zustand";

export default function ConstructionInforSection({ storeApi }: StoreApiInject) {
  const isChangeInfor = useStore(
    storeApi,
    (state) => state.formData.isChangeConstructionInfor,
  );
  const setField = useStore(storeApi, (state) => state.setField);
  const handleChangeInfor = () => {
    setField("isChangeConstructionInfor", !isChangeInfor);
  };
  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardHeader
          title="Công trình"
          sub="Thông tin Công Trình"
          icon={<BuildIcon className="text-primary" sx={{ fontSize: 28 }} />}
        />
        <Button onClick={handleChangeInfor}>
          {isChangeInfor ? "Hủy " : "Thay đổi thông tin"}
        </Button>
      </div>
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
