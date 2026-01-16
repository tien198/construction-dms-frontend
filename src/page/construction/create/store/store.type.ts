import type { CreateSubmission } from "../type/submission.create.type";
import type { BidPackage } from "../../type/bid-package.type";
import type { Path } from "../../../../lib/type.recurtion";

export interface InitConstructionStore {
  formData: CreateSubmission;

  // Actions
  setField: (name: keyof CreateSubmission, value: any) => void;
  setNestedField: (
    path: Path<CreateSubmission>,
    value: number | string | Date | object | null
  ) => void;

  // Action riêng cho Date để xử lý Dayjs -> Date
  setDateField: (name: keyof CreateSubmission, value: Date) => void;
  setNestedDateField: (path: Path<CreateSubmission>, value: Date) => void;
  setPackage: (
    id: number,
    prop: keyof BidPackage,
    value: number | string | Date | null
  ) => void;
  // Reset form nếu cần
  resetForm: () => void;
}
