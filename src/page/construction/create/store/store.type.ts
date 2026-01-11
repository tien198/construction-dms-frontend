import type { CreateSubmission } from "../type/submission.type";
import type { BidPackage } from "../../type/bid-package.type";

export interface InitConstructionStore {
  formData: CreateSubmission;

  // Actions
  setField: (name: keyof CreateSubmission, value: any) => void;
  setNestedField: (
    parent: keyof CreateSubmission,
    child: string,
    value: any
  ) => void;

  // Action riêng cho Date để xử lý Dayjs -> Date
  setDateField: (name: keyof CreateSubmission, value: Date | null) => void;
  setNestedDateField: (
    parent: keyof CreateSubmission,
    child: string,
    value: Date | null
  ) => void;
  setPackage: (
    id: number,
    prop: keyof BidPackage,
    value: number | string | Date | null
  ) => void;
  // Reset form nếu cần
  resetForm: () => void;
}
