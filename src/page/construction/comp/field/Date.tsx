import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";
import type { PickerValue } from "@mui/x-date-pickers/internals";

export default function DateOfSigning({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.date);
  const setDateField = useStore(storeApi, (s) => s.setDateField);
  const setNestedDateField = useStore(storeApi, (s) => s.setNestedDateField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày ký"
      value={dayjs(value)}
      onChange={(val: PickerValue) => {
        setDateField(
          "date",
          val?.toDate() ?? new Date(""), // if undefined, retrun "Invalid Date"
        );
        setNestedDateField(
          "directlyDecision.date",
          val?.toDate() ?? new Date(""), // if undefined, retrun "Invalid Date"
        );
      }}
    />
  );
}
