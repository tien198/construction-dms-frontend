import type { Decision } from "@/types";
import type { SubmissionPost } from "../../types/submission-post.type";

export function decisionToSubmissionPost(decision: Decision): SubmissionPost {
  const submission = decision.submission;

  const constructionSnapshot = submission.construction_infor_snapshot
    ? {
        ...submission.construction_infor_snapshot,
        bid_package_snapshots:
          submission.construction_infor_snapshot.bid_package_snapshots?.map(
            ({ id, ...rest }) => rest,
          ) ?? [],
      }
    : undefined;

  return {
    ...submission,
    construction_infor_snapshot: constructionSnapshot,

    directlyDecision: {
      no: decision.no,
      period: decision.period,
    },

    pursuant_to_dec_tct_id: decision.pursuant_to_dec_tct?.id ?? null,
    pursuant_to_dec_ttmn_id: decision.pursuant_to_dec_ttmn?.id ?? null,
  };
}
