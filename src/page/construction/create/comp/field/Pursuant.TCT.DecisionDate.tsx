import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function PursuantTCTDecisionDate({ storeApi }: StoreApiInject) {
  const value = useStore(storeApi, (s) => s.formData.pursuantToDec_TCT.date);
  const setNestedField = useStore(storeApi, (s) => s.setNestedField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày"
      value={dayjs(value)}
      onChange={(val) => {
        setNestedField("pursuantToDec_TCT.date", val?.toDate() ?? null);
      }}
    />
  );
}
