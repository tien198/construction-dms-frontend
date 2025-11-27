import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { constructionStore } from "../../store/zustandStore";
import { useStore } from "zustand";

export default function StartDate() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionExecutionTime.startDate
  );
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      label="Ngày bắt đầu"
      value={value ? dayjs(value) : null}
      name="startDate"
      onChange={(val) =>
        setNestedDateField("constructionExecutionTime", "startDate", val)
      }
      slotProps={{ textField: { fullWidth: true } }}
    />
  );
}
