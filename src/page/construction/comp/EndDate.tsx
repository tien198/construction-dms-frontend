import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { constructionStore } from "../store/zustandStore";
import { useStore } from "zustand";

export default function EndDate() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionExecutionTime.endDate
  );
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      label="Ngày kết thúc"
      value={value ? dayjs(value) : null}
      onChange={(val) =>
        setNestedDateField("constructionExecutionTime", "endDate", val)
      }
      slotProps={{ textField: { fullWidth: true } }}
    />
  );
}
