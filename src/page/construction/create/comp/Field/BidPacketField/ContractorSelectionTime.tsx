import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustandStore";

export default function ContractorSelectionTime({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.packages[id]?.contractorSelectionTime
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Thời gian chọn nhà thầu"
      value={dayjs(value)}
      onChange={(val) => setPackage(id, "contractorSelectionTime", dayjs(val))}
    />
  );
}
