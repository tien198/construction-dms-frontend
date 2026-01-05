import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function DecisionDate() {
  const value = useStore(constructionStore, (s) => s.formData.decision.date);
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày quyết định"
      value={dayjs(value)}
      onChange={(val) => setNestedDateField("decision", "date", val)}
    />
  );
}
