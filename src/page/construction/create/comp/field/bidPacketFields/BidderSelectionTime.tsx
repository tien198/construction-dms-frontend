import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import { createConstructionStore } from "../../../store/create-store";

export default function BidderSelectionTime({
  id,
  storeApi,
}: {
  id: number;
  storeApi: typeof createConstructionStore;
}) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidderSelectionTime,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);

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
