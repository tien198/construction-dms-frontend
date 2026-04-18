import type { ConstructionPeriod } from "@/types/construction.type";
import type { SubmissionPost } from "../types/submission-post.type";

function initialStateGeneration(period: ConstructionPeriod): SubmissionPost {
  return {
    no: "",
    level: "",
    date: "",
    pursuant_to_dec_tct_id: null,
    pursuant_to_dec_ttmn_id: null,
    is_changed_construction_info: false,
    construction_info_snapshot: {
      name: "",
      source_of_funds: "",
      impl_start_date: "",
      impl_end_date: "",
      existing_condition_of_the_structure: "",
      repair_scope: "",
      est_cost: 0,
      est_cost_str: "",
      bid_package_snapshots: [
        {
          type: "TV",
          project_owner: "",
          name: "",
          short_desc: "",
          bidder_selection_time: "",
          bidder_selection_method: "",
          successful_bidder_id: null,
          duration: "",
          is_completed: false,
          est_cost: 0,
          est_cost_str: "",
        },
        {
          type: "TT",
          project_owner: "",
          name: "",
          short_desc: "",
          bidder_selection_time: "",
          bidder_selection_method: "",
          successful_bidder_id: null,
          duration: "",
          is_completed: false,
          est_cost: 0,
          est_cost_str: "",
        },
      ],
    },
    directly_decision: { no: "", period: period },
  };
}

export { initialStateGeneration };
