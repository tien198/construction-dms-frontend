import { produce } from "immer";
import { submission_store_factory } from "../../../store-factory/create-submission.store";
import type { CreateSubmissionStore } from "@/store-factory/create-submission.store.type";

export const create_construction_store = submission_store_factory("KH_LCNT");

create_construction_store.setState(
  produce((draft: CreateSubmissionStore) => {
    draft.submission.construction_info_snapshot = {
      id: "",
      name: "",
      source_of_funds: "",
      impl_start_date: "",
      impl_end_date: "",
      existing_condition_of_the_structure: "",
      repair_scope: "",
      est_cost: 0,
      est_cost_str: "",
    };

    draft.submission.bid_package_snapshots = [
      {
        id: "",
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
        id: "",
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
    ];
  }),
);
