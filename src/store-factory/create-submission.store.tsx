import { createStore, type StoreApi } from "zustand";
import { setValueByPath } from "@/lib/setValByPath";

import type { CreateSubmissionStore } from "./create-submission.store.type";
import type { ConstructionPeriod } from "@/types/domain/construction.type";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";
import type { BidPackageType } from "@/types/domain/bid-package-snapshot.type";
import type { ConstructionInfoSnapshotPost } from "@/types/submission-post/construction-info-snapshot-post.type";
import type { SubmissionPost } from "@/types/submission-post/submission-post.type";

import { initialStateGeneration } from "./initial-state";

export function submission_store_factory(
  period: ConstructionPeriod,
): StoreApi<CreateSubmissionStore> {
  return createStore<CreateSubmissionStore>((set) => ({
    // default submission is TV
    submission: initialStateGeneration(period) as SubmissionPost,

    setField: (field, value) =>
      set((state) => {
        const shallowSubmission = setValueByPath(
          state.submission,
          field,
          value,
        );
        return { ...state, submission: shallowSubmission };
      }),

    setBidPackageField<K extends keyof BidPackageSnapshotPost>(
      type: BidPackageType,
      field: K,
      value: any,
    ) {
      set((state) => {
        const shallowStore = { ...state };
        const bidPackages = shallowStore.submission?.bid_package_snapshots;
        if (!bidPackages) {
          return state;
        }
        const bpIndex = bidPackages.findIndex((bp) => bp.type === type);
        if (bpIndex < 0) {
          return state;
        }
        const bp = bidPackages[bpIndex];
        const bpShallow = { ...bp };
        bpShallow[field] = value;

        bidPackages[bpIndex] = bpShallow;
        return shallowStore;
      });
    },

    setConstructionInfo(value: ConstructionInfoSnapshotPost) {
      set((state) => ({
        ...state,
        submission: {
          ...state.submission,
          construction_info_snapshot: value,
        },
      }));
    },

    reset: (per, sub) =>
      set((state) => ({
        ...state,
        submission: sub ?? initialStateGeneration(per),
      })),
  }));
}
