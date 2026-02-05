import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../../store-factory/store.type";

type Props = { id: number } & StoreApiInject;

export default function BidderSelectionTime({ id, storeApi }: Props) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.bidPackages[id]?.bidderSelectionTime,
  );
  const setPackage = useStore(storeApi, (s) => s.setPackage);
  const isChangeInfor = useStore(
    storeApi,
    (s) => s.formData.isChangeConstructionInfor,
  );

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Thời gian chọn nhà thầu"
      value={dayjs(value)}
      onChange={(val) =>
        setPackage(id, "bidderSelectionTime", val?.toDate() ?? new Date(""))
      }
      disabled={!isChangeInfor}
    />
  );
}
