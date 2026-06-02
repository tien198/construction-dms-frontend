import { produce } from "immer";
import { submission_store_factory } from "../../../store-factory/create-submission.store";
import type { CreateSubmissionStore } from "@/store-factory/create-submission.store.type";
import { initialBidPackage } from "@/store-factory/initial-state";

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
      initialBidPackage("TV"),
      initialBidPackage("TT"),
    ];
  }),
);
