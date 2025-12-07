import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../store/zustandStore";

export default function DateOfSigning() {
  const value = useStore(constructionStore, (s) => s.formData.dateOfSigning);
  const setDateField = useStore(constructionStore, (s) => s.setDateField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày ký"
      value={dayjs(value)}
      onChange={(val) => setDateField("dateOfSigning", val)}
    />
  );
}
