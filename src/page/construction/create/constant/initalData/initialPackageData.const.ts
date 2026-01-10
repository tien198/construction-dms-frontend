import type { BidPackage } from "../../../type/bid-package.type";

export const initialBidPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "",
  shortDescription: "",
  cost: 0,
  costString: "",
  bidderSelectionTime: null,
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "",
};

export const designPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Lập bản vẽ thiết kế kỹ thuật thi công, dự toán công trình.",
  cost: 100000000000,
  costString: "",
  bidderSelectionTime: new Date(), // null
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "10 ngày",
};

export const verificationPackage: BidPackage = {
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Thẩm tra Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Thẩm tra bản vẽ thiết kế kỹ thuật thi công, dự toán công trình",
  cost: 100000000000,
  costString: "",
  bidderSelectionTime: new Date(), // null
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "5 ngày",
};
