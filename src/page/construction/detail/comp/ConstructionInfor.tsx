import { Card, CardContent, Grid } from "@mui/material";

import InfoRow from "./InforRow";
import type { ConstructionInfor } from "../../type/construction-infor.type";
import { formatDate } from "../ultil/formatDate";

type Props = {
  info: ConstructionInfor;
};

// Thông tin công trình
export default function ConstructionInfor({ info }: Props) {
  console.log(info);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <InfoRow label="Tên công trình" value={info.name} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoRow label="Tổng mức đầu tư" value={info.costString} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoRow label="Nguồn vốn" value={info.sourceOfFunds} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoRow
              label="Thời gian thực hiện"
              value={`${formatDate(
                info.constructionImplementationTime.startDate,
                "month",
              )} - ${formatDate(info.constructionImplementationTime.endDate, "month")}`}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoRow label="Giai đoạn" value={info.period} />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <InfoRow
              label="Hiện trạng công trình"
              value={info.existingConditionOfTheStructure}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <InfoRow label="Phạm vi sửa chữa" value={info.repairScope} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
