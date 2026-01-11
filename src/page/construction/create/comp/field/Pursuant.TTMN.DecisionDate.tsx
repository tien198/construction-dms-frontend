import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function PursuantTTMNDecisionDate() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.pursuantToDec_TTMN?.date
  );
  const setNestedField = useStore(constructionStore, (s) => s.setNestedField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày"
      value={dayjs(value)}
      onChange={(val) => {
        setNestedField("pursuantToDec_TTMN", "date", val?.toDate() ?? null);
      }}
    />
  );
}
