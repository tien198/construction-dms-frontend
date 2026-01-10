import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustand.store";

export default function Date() {
  const value = useStore(constructionStore, (s) => s.formData.date);
  const setDateField = useStore(constructionStore, (s) => s.setDateField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày ký"
      value={dayjs(value)}
      onChange={(val) => setDateField("date", val)}
    />
  );
}
