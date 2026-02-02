import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../store/create-store";

export default function ConstructionEndDate({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) => s.formData.constructionInfor?.constructionImplementationTime.endDate,
  );
  const setNestedDateField = useStore(storeApi, (s) => s.setNestedDateField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày kết thúc"
      value={dayjs(value)}
      onChange={(val) =>
        setNestedDateField(
          "constructionInfor.constructionImplementationTime.endDate",
          val?.toDate() ?? new Date(""), // if undefined, retrun "Invalid Date"
        )
      }
    />
  );
}
