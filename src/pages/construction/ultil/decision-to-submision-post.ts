import type { Decision } from "@/types";
import type { SubmissionPost } from "../types/submission-post.type";
import type { ConstructionInfoSnapshotPost } from "../types/construction-info-snapshot-post.type";

export function decisionToSubmissionPost(decision: Decision): SubmissionPost {
  const submission = decision.submission;

  const constructionInfor: ConstructionInfoSnapshotPost | undefined =
    submission.construction_info_snapshot
      ? {
          id: submission.id ?? "",
          name: submission.construction_info_snapshot.name,
          source_of_funds:
            submission.construction_info_snapshot.source_of_funds,
          impl_start_date:
            submission.construction_info_snapshot.impl_start_date,
          impl_end_date: submission.construction_info_snapshot.impl_end_date,
          existing_condition_of_the_structure:
            submission.construction_info_snapshot
              .existing_condition_of_the_structure,
          repair_scope: submission.construction_info_snapshot.repair_scope,
          est_cost: submission.construction_info_snapshot.est_cost,
          est_cost_str: submission.construction_info_snapshot.est_cost_str,

          bid_package_snapshots:
            submission.construction_info_snapshot.bid_package_snapshots ?? [],
        }
      : undefined;

  return {
    id: submission.id ?? "",
    no: submission.no,
    level: submission.level,
    date: submission.date,
    is_changed_construction_info: submission.is_changed_construction_info,
    construction_info_snapshot: constructionInfor,

    directly_decision: {
      no: decision.no,
      period: decision.period,
      id: decision.id,
    },

    pursuant_to_dec_tct_id: decision.pursuant_to_dec_tct?.id ?? null,
    pursuant_to_dec_ttmn_id: decision.pursuant_to_dec_ttmn?.id ?? null,
  };
}
