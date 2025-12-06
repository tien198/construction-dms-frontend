import type { BidPackage } from "../../type/construction";

// --- 2. Các giá trị khởi tạo mặc định ---
import type { Construction } from "../../type/construction";

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
  packages: [],
};

export const initialBidPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "",
  shortDescription: "",
  price: 0,
  contractorSelectionTime: null,
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "10 ngày",
};
