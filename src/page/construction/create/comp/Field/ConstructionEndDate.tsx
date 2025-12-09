import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function ConstructionEndDate() {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionImplementationTime.endDate
  );
  const setNestedDateField = useStore(
    constructionStore,
    (s) => s.setNestedDateField
  );

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày kết thúc"
      value={dayjs(value)}
      onChange={(val) =>
        setNestedDateField("constructionImplementationTime", "endDate", val)
      }
    />
  );
}
