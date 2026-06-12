import type { Decision, Submission } from "@/types/domain";
import type { SubmissionPost } from "@/types/submission-post/submission-post.type";
import type { ConstructionInfoSnapshotPost } from "@/types/submission-post/construction-info-snapshot-post.type";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";

/**
 * @param specificSubmissionIndex passed when existing many Submissions in the Decision.
 */
export function decisionToSubmissionPost(
  decision: Decision,
  specificSubmissionIndex?: number,
): SubmissionPost {
  const submission: Submission =
    decision.submissions[specificSubmissionIndex ?? 0];

  const constructionInfor: ConstructionInfoSnapshotPost | null =
    submission.construction_info_snapshot
      ? {
          id: submission.construction_info_snapshot.id ?? null,
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
        }
      : null;

  const bidPackages: BidPackageSnapshotPost[] | null = specificSubmissionIndex
    ? (submission.bid_package_snapshots?.slice(0, 1) ?? null)
    : (submission.bid_package_snapshots ?? null);

  return {
    id: submission.id ?? null,
    no: submission.no,
    level: submission.level,
    date: submission.date,

    construction_info_snapshot: constructionInfor,
    bid_package_snapshots: bidPackages,

    directly_decision: {
      no: decision.no,
      period: decision.period,
      id: decision.id,
    },

    pursuant_to_dec_tct_id: decision.pursuant_to_dec_tct?.id ?? null,
    pursuant_to_dec_ttmn_id: decision.pursuant_to_dec_ttmn?.id ?? null,
    con_id: decision.construction_id,
  };
}
