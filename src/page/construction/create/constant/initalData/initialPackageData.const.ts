import type { BidPackage } from "../../../type/construction";

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

export const designPackage: BidPackage = {
  arrayIndex: 0,
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Tư vấn lập Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Lập bản vẽ thiết kế kỹ thuật thi công, dự toán công trình.",
  price: 100000000000,
  contractorSelectionTime: new Date(), // null
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "10 ngày",
};

export const verificationPackage: BidPackage = {
  arrayIndex: 1,
  projectOwner: "Công ty Trực thăng Miền Nam",
  bidPackageName: "Thẩm tra Báo cáo kinh tế kỹ thuật",
  shortDescription:
    "Thẩm tra bản vẽ thiết kế kỹ thuật thi công, dự toán công trình",
  price: 100000000000,
  contractorSelectionTime: new Date(), // null
  contractorSelectionMethod: "Chỉ định thầu rút gọn",
  contractType: "Trọn gói",
  implementDuration: "5 ngày",
};
