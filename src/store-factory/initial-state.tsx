import type { ConstructionPeriod } from "@/types/domain/construction.type";
import type { SubmissionPost } from "../types/submission-post/submission-post.type";

function initialStateGeneration(period: ConstructionPeriod): SubmissionPost {
  return {
    no: "",
    level: "",
    date: new Date(Date.now()).toISOString(),
    pursuant_to_dec_tct_id: null,
    pursuant_to_dec_ttmn_id: null,
    construction_info_snapshot: null,
    bid_package_snapshots: null,
    directly_decision: { no: "", period: period },
  };
}

export { initialStateGeneration };
