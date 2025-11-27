import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { constructionStore } from "../store/zustandStore";
import { useStore } from "zustand";

export default function DateOfSigning() {
  const value = useStore(constructionStore, (s) => s.formData.dateOfSigning);
  const setDateField = useStore(constructionStore, (s) => s.setDateField);

  return (
    <DatePicker
      label="Ngày ký kết"
      value={value ? dayjs(value) : null}
      onChange={(val) => setDateField("dateOfSigning", val)}
      slotProps={{ textField: { fullWidth: true } }}
    />
  );
}
