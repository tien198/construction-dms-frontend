import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { constructionStore } from "../../../store/zustand.store";

export default function BidderSelectionTime({ id }: { id: number }) {
  const value = useStore(
    constructionStore,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidderSelectionTime
  );
  const setPackage = useStore(constructionStore, (s) => s.setPackage);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Thời gian chọn nhà thầu"
      value={dayjs(value)}
      onChange={(val) =>
        setPackage(id, "bidderSelectionTime", val?.toDate() ?? new Date(""))
      }
    />
  );
}
