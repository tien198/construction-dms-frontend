import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { constructionStore } from "../store/zustandStore";
import { useStore } from "zustand";

export default function DecisionDateField() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.decision.decisionDate
  );
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      label="Ngày quyết định"
      value={value ? dayjs(value) : null}
      onChange={(val) => setNestedDateField("decision", "decisionDate", val)}
      slotProps={{ textField: { fullWidth: true } }}
    />
  );
}
