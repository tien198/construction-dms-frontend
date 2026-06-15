import type { ConstructionPeriod } from "@/types/domain/construction.type";
import type { SubmissionPost } from "../types/submission-post/submission-post.type";
import type { BidPackageType } from "@/types/domain/decision/bid-package-snapshot.type";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

function initialStateGeneration(period: ConstructionPeriod): SubmissionPost {
  return {
    no: "",
    level: "",
    date: "",
    pursuant_to_dec_tct_id: null,
    pursuant_to_dec_ttmn_id: null,
    construction_info_snapshot: null,
    bid_package_snapshots: null,
    directly_decision: { no: "", period: period },
    con_id: "",
  };
}

function initialBidPackage(type: BidPackageType): BidPackageSnapshotPost {
  return {
    name: getBPNameByType(type),
    short_desc: getShortDescByType(type),
    is_completed: false,
    type,
    est_cost: 0,
    est_cost_str: "",
    project_owner: "Công ty Trực thăng Miền Nam",
    bidder_selection_time: "",
    bidder_selection_method: "Chỉ định thầu rút gọn",
    duration: "",
    successful_bidder_id: "",
    bid_package_id: "",
  };
}

// --- Export ---------------------
export { initialStateGeneration, initialBidPackage };
// -------------------------------

function getBPNameByType(type: BidPackageType) {
  if (type === "TV") {
    return "Tư vấn lập BCKTKT";
  } else if (type === "TT") {
    return "Tư vấn Thẩm tra BCKTKT";
  } else if (type === "TC") {
    return "Thi công sửa chữa";
  } else {
    return "";
  }
}

function getShortDescByType(type: BidPackageType) {
  if (type === "TV") {
    return "Lập bản vẽ thiết kế kỹ thuật thi công, dự toán công trình";
  } else if (type === "TT") {
    return "Thẩm tra bản vẽ thiết kế kỹ thuật thi công, dự toán công trình";
  } else if (type === "TC") {
    return "Thực hiện công tác sửa chữa theo hồ sơ thiết kế, dự toán";
  } else {
    return "";
  }
}
