import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function ConstructionStartDate() {
  const value = useStore(
    constructionStore,
    (s) =>
      s.formData.constructionInfor!.constructionImplementationTime.startDate
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
        setNestedDateField("constructionImplementationTime", "startDate", val)
      }
    />
  );
}
