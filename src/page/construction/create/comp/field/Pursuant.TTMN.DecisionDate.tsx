import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function PursuantTTMNDecisionDate({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.pursuantToDec_TTMN?.date);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày"
      value={dayjs(value)}
      onChange={(val) => {
        setNestedField(
          "pursuantToDec_TTMN.date",
          val?.toDate() ?? new Date(""), // if undefined, retrun "Invalid Date"
        );
      }}
    />
  );
}
