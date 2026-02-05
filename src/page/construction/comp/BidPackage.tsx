import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useStore } from "zustand";
import PkgF from "./field/bidPacketFields";
import type { StoreApiInject } from "../store-factory/store.type";

type Props = {
  index: number;
  onRemove: (id: number) => void;
} & StoreApiInject;
export default function BidPackage({ index, onRemove, storeApi }: Props) {
  return (
    <Card sx={{ mb: 2, borderLeft: "4px solid #1976d2" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} display="flex" justifyContent="space-between">
            <Heading index={index} storeApi={storeApi} />
            {index >= 2 && (
              <IconButton
                onClick={() => onRemove(index)}
                color="error"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.PackageName id={index} storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.ProjectOwner id={index} storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.Cost id={index} storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.BidderSelectionTime id={index} storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.ImplementDuration id={index} storeApi={storeApi} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.BidderSelectionMethod id={index} storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.ContractType id={index} storeApi={storeApi} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <PkgF.ShortDescription id={index} storeApi={storeApi} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Heading({
  index,
  storeApi,
}: {
  index: number;
} & StoreApiInject) {
  const packageName = useStore(
    storeApi,
    (s) => s.formData.constructionInfor!.bidPackages[index]!.bidPackageName,
  );
  return (
    <Typography variant="subtitle1" fontWeight="bold">
      Gói thầu: {packageName ? packageName : `#${index + 1}`}
    </Typography>
  );
}
