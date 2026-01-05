import type { Dayjs } from "dayjs";
import type { CreateSubmission } from "../type/submission.type";
import type { BidPackage } from "../../type/bid-package.type";

export interface initConstructionStore {
  formData: CreateSubmission;

  // Actions
  setField: (name: keyof CreateSubmission, value: any) => void;
  setNestedField: (
    parent: keyof CreateSubmission,
    child: string,
    value: any
  ) => void;

  // Action riêng cho Date để xử lý Dayjs -> Date
  setDateField: (name: keyof CreateSubmission, value: Dayjs | null) => void;
  setNestedDateField: (
    parent: keyof CreateSubmission,
    child: string,
    value: Dayjs | null
  ) => void;
  setPackage: (id: number, prop: keyof BidPackage, value: any) => void;
  // Reset form nếu cần
  resetForm: () => void;
}
