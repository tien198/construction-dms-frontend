import { createStore, type StoreApi } from "zustand";
import { setValueByPath } from "@/lib/setValByPath";

import type { CreateSubmissionStore } from "./create-submission.store.type";
import type { ConstructionPeriod } from "@/types/construction.type";
import type { BidPackageSnapshotPost } from "../types/bid-package-snapshot-post.type";
import type { BidPackageType } from "@/types/bid-package-snapshot.type";
import type { ConstructionInfoSnapshotPost } from "../types/construction-infor-snapshot-post.type";

import { initialStateGeneration } from "./initial-state";

export function submission_store_factory(
  period: ConstructionPeriod,
): StoreApi<CreateSubmissionStore> {
  return createStore<CreateSubmissionStore>((set) => ({
    // default submission is TV
    submission: initialStateGeneration(period),

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
        const conInfor = shallowStore.submission.construction_infor_snapshot;
        const bpIndex = conInfor!.bid_package_snapshots.findIndex(
          (bp) => bp.type === type,
        );
        if (bpIndex < 0) {
          return state;
        }
        const bp = conInfor!.bid_package_snapshots[bpIndex];
        const bpShallow = { ...bp };
        bpShallow[field] = value;

        conInfor!.bid_package_snapshots[bpIndex] = bpShallow;
        return shallowStore;
      });
    },

    setConstructionInfor(value: ConstructionInfoSnapshotPost) {
      set((state) => ({
        ...state,
        submission: {
          ...state.submission,
          construction_infor_snapshot: value,
        },
      }));
    },

    reset: (type, sub) =>
      set((state) => ({
        ...state,
        submission: sub ?? initialStateGeneration(type),
      })),
  }));
}
