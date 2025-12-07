import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useStore } from "zustand";
import { constructionStore } from "../store/zustandStore";
import type { BidPackage } from "../../type/construction";
import PkgF from "./Field/BidPacketField";

type Props = {
  index: number;
  onRemove: (id: number) => void;
};
export default function BidPackage({ index, onRemove }: Props) {
  const pkg = useStore(
    constructionStore,
    (state) => state.formData.packages[index]
  )!;

  return (
    <Card sx={{ mb: 2, borderLeft: "4px solid #1976d2" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">
              Gói thầu:{" "}
              {pkg.bidPackageName ? pkg.bidPackageName : `#${index + 1}`}
            </Typography>
            <IconButton
              onClick={() => onRemove(index)}
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.PackageName id={index} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.ProjectOwner id={index} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.Price id={index} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.ContractorSelectionTime id={index} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PkgF.ImplementDuration id={index} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.ContractorSelectionMethod id={index} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PkgF.ContractType id={index} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <PkgF.ShortDescription id={index} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
