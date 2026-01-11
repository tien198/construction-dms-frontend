import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function PursuantTCTDecisionDate() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.pursuantToDec_TCT.date
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày"
      value={dayjs(value)}
      onChange={(val) => {
        setNestedField("pursuantToDec_TCT", "date", val?.toDate() ?? null);
      }}
    />
  );
}
