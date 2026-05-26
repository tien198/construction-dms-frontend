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
  };
}

function initialBidPackage(type: BidPackageType): BidPackageSnapshotPost {
  return {
    name: "",
    short_desc: "",
    is_completed: false,
    type,
    est_cost: 0,
    est_cost_str: "",
    project_owner: "",
    bidder_selection_time: "",
    bidder_selection_method: "",
    duration: "",
    successful_bidder_id: "",
  };
}

export { initialStateGeneration, initialBidPackage };
