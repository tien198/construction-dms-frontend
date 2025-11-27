import type { Dayjs } from "dayjs";
import type { Construction } from "../../type/construction";

export interface ConstructionStore {
  formData: Construction;

  // Actions
  setField: (name: keyof Construction, value: any) => void;
  setNestedField: (
    parent: keyof Construction,
    child: string,
    value: any
  ) => void;

  // Action riêng cho Date để xử lý Dayjs -> Date
  setDateField: (name: keyof Construction, value: Dayjs | null) => void;
  setNestedDateField: (
    parent: keyof Construction,
    child: string,
    value: Dayjs | null
  ) => void;

  // Reset form nếu cần
  resetForm: () => void;
}
