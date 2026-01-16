import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";
import type { PickerValue } from "@mui/x-date-pickers/internals";

export default function DateOfSigning() {
  const value = useStore(constructionStore, (s) => s.formData.date);
  const setDateField = useStore(constructionStore, (s) => s.setDateField);
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày ký"
      value={dayjs(value)}
      onChange={(val: PickerValue) => {
        setDateField(
          "date",
          val?.toDate() ?? new Date("") // if undefined, retrun "Invalid Date"
        );
        setNestedDateField(
          "directlyDecision.date",
          val?.toDate() ?? new Date("") // if undefined, retrun "Invalid Date"
        );
      }}
    />
  );
}
