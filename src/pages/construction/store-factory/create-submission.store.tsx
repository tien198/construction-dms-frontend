import { createStore, type StoreApi } from "zustand";
import { setValueByPath } from "@/lib/setValByPath";
import type { CreateSubmissionStore } from "./create-submission.store.type";
import type { ConstructionPeriod } from "@/types/construction.type";
import type { BidPackageSnapshotPost } from "../types/bid-package-snapshot-post.type";
import {
  initialStateGeneration,
  withoutConstructionInfor,
} from "./initial-state";

export function submission_store_factory(
  period: ConstructionPeriod,
): StoreApi<CreateSubmissionStore> {
  return createStore<CreateSubmissionStore>((set) => ({
    // default submission is TV
    submission: initialStateGeneration(period),
    submission_tt: withoutConstructionInfor,

    setField: (field, value, type = "tv") =>
      set((state) => {
        if (type == "tv") {
          const shallowSubmission = setValueByPath(
            state.submission,
            field,
            value,
          );
          return { ...state, submission: shallowSubmission };
        }
        const shallowSubmission = setValueByPath(
          state.submission_tt,
          field,
          value,
        );
        return { ...state, submission_tt: shallowSubmission };
      }),

    setBidPackage<K extends keyof BidPackageSnapshotPost>(
      per: ConstructionPeriod,
      field: K,
      value: any,
    ) {
      set((state) => {
        const shallowStore = { ...state };
        const conInfor = shallowStore.submission.construction_infor_snapshot;
        const bpIndex = conInfor!.bid_package_snapshots.findIndex(
          (bp) => bp.type === per,
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
    reset: (type, sub) =>
      set((state) => {
        if (type == "TV" || type == "BCKTKT") {
          return { ...state, submission: sub ?? initialStateGeneration(type) };
        }
        return { ...state, submission_tt: sub ?? withoutConstructionInfor };
      }),
  }));
}
