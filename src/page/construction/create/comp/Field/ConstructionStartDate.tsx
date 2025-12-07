import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function ConstructionStartDate() {
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
      sx={{ width: "100%" }}
      label="Ngày bắt đầu"
      value={dayjs(value)}
      onChange={(val) =>
        setNestedDateField("constructionExecutionTime", "startDate", val)
      }
    />
  );
}
