import type { BidPackage } from "../../../type/construction";

// --- 2. Các giá trị khởi tạo mặc định ---
import type { Construction } from "../../../type/construction";
import { designPackage, verificationPackage } from "./initialPackageData";

export const initialFormData: Construction = {
  documentNo: "",
  name: "",
  dateOfSigning: null,
  budget: 0,
  stringBudget: "",
  sourceOfFunds: new Date(Date.now()).getFullYear().toString(),
  constructionExecutionTime: {
    startDate: null,
    endDate: null,
  },
  existingConditionOfTheStructure: "",
  repairScope: "",
  decision: {
    number: "",
    date: null,
  },
  packages: [designPackage, verificationPackage],
};

export const initialBidPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "",
  shortDescription: "",
  price: 0,
  contractorSelectionTime: null,
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "",
};

/*
import type { BidPackage } from "../../../type/construction";

// --- 2. Các giá trị khởi tạo mặc định ---
import type { Construction } from "../../../type/construction";
import { designPackage, verificationPackage } from "./initialPackageData";

export const initialFormData: Construction = {
  id: "1764347797538-fa",
  documentNo: "fa",
  name: "Công Trình A",
  dateOfSigning: new Date("2025-10-31T17:00:00.000Z"),
  budget: 1000000000,
  stringBudget: "Một tỷ đồng",
  sourceOfFunds: "2025",
  constructionExecutionTime: {
    startDate: new Date("2025-11-08T17:00:00.000Z"),
    endDate: new Date("2025-11-28T17:00:00.000Z"),
  },
  existingConditionOfTheStructure:
    "Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng Hỏng nặng ",
  repairScope:
    "Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết Sửa hết ",
  decision: {
    number: "QTCB",
    date: new Date("2025-10-31T17:00:00.000Z"),
  },

  packages: [designPackage, verificationPackage],
};

export const initialBidPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "",
  shortDescription: "",
  price: 0,
  contractorSelectionTime: null,
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "",
};
*/
