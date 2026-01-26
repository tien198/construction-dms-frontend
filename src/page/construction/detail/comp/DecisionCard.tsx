import {
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import type { Decision } from "../../type/decision.type";
import { formatDate } from "../ultil/formatDate";

const DecisionCard: React.FC<{ decision: Decision }> = ({ decision }) => {
  const submission = decision.submission;

  return (
    <Stack spacing={3}>
      <Grid wrap="nowrap" container size={{ sm: 12 }} spacing={2}>
        <Grid size={{ md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  <strong>Tơ trình số:</strong> {submission.no}
                </Typography>

                <Typography variant="body2">
                  <strong>Cấp:</strong> {submission.level}
                </Typography>

                <Typography variant="body2">
                  <strong>Ngày:</strong> {formatDate(submission.date)}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  <strong>Quyết định số:</strong> {decision.no}
                </Typography>

                <Typography variant="body2">
                  <strong>Cấp:</strong> {decision.level}
                </Typography>

                <Typography variant="body2">
                  <strong>Ngày:</strong> {formatDate(decision.date)}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Chip
                    label={
                      decision.isApproved ? "Đã phê duyệt" : "Chưa phê duyệt"
                    }
                    color={decision.isApproved ? "success" : "warning"}
                    size="small"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider>
        <Typography>Căn cứ vào</Typography>
      </Divider>

      <Grid wrap="nowrap" container size={{ sm: 12 }} spacing={2}>
        <Grid size={{ md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle1">
                  <strong>Quyết định:</strong> {decision.pursuantToDec_TCT.no}
                </Typography>

                <Typography variant="body2">
                  <strong>Cấp:</strong> {decision.pursuantToDec_TCT.level}
                </Typography>

                <Typography variant="body2">
                  <strong>Ngày:</strong>{" "}
                  {formatDate(decision.pursuantToDec_TCT.date)}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {decision.pursuantToDec_TTMN ? (
          <Grid size={{ md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    <strong>Quyết định:</strong>{" "}
                    {decision.pursuantToDec_TTMN.no}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Cấp:</strong> {decision.pursuantToDec_TTMN.level}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Ngày:</strong>{" "}
                    {formatDate(decision.pursuantToDec_TTMN.date)}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Stack>
  );
};

export default DecisionCard;
