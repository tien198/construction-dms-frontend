import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "zustand";
import type { StoreApiInject } from "../../create/store/create-store";

export default function ConstructionStartDate({ storeApi }: StoreApiInject) {
  const value = useStore(
    storeApi,
    (s) =>
      s.formData.constructionInfor!.constructionImplementationTime.startDate,
  );
  const setNestedDateField = useStore(storeApi, (s) => s.setNestedDateField);

  return (
    <DatePicker
      sx={{ width: "100%" }}
      label="Ngày bắt đầu"
      value={dayjs(value)}
      onChange={(val) =>
        setNestedDateField(
          "constructionInfor.constructionImplementationTime.startDate",
          val?.toDate() ?? new Date(""), // if undefined, retrun "Invalid Date"
        )
      }
    />
  );
}
