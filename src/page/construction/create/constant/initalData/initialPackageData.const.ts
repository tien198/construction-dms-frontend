import type { BidPackage } from "../../../type/bid-package.type";

export const initialBidPackage: BidPackage = {
  type: "TC",
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "",
  shortDescription: "",
  cost: 0,
  costString: "",
  bidderSelectionTime: null,
  bidderSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  upTo: "",
  isCompleted: false,
};

export const designPackage: BidPackage = {
  type: "TV",
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Lập bản vẽ thiết kế kỹ thuật thi công, dự toán công trình.",
  cost: 100000000000,
  costString: "",
  bidderSelectionTime: new Date(), // null
  bidderSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  upTo: "10 ngày",
  isCompleted: false,
};

export const verificationPackage: BidPackage = {
  type: "TT",
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Thẩm tra Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Thẩm tra bản vẽ thiết kế kỹ thuật thi công, dự toán công trình",
  cost: 100000000000,
  costString: "",
  bidderSelectionTime: new Date(), // null
  bidderSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  upTo: "5 ngày",
  isCompleted: false,
};
