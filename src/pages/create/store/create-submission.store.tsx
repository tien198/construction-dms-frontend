import { createStore } from "zustand";
import { initialState } from "./initial-state";
import { setValueByPath } from "@/lib/setValByPath";
import type { CreateSubmissionStore } from "./create-submission.store.type";
import type { ConstructionPeriod } from "@/types/construction.type";
import type { BidPackageSnapshotCreate } from "../types/bid-package-snapshot-create.type";

export const createSubmission_store = createStore<CreateSubmissionStore>(
  (set) => ({
    submission: initialState,
    setField: (field, value) =>
      set((state) => {
        const shallowSubmission = setValueByPath(
          state.submission,
          field,
          value,
        );
        return { ...state, submission: shallowSubmission };
      }),

    setBidPackage<K extends keyof BidPackageSnapshotCreate>(
      per: ConstructionPeriod,
      field: K,
      value: any,
    ) {
      set((state) => {
        const shallowStore = { ...state };
        const conInfor = shallowStore.submission.construction_infor_snapshot;
        const bpIndex = conInfor.bid_package_snapshots.findIndex(
          (bp) => bp.type === per,
        );
        if (bpIndex < 0) {
          return state;
        }
        const bp = conInfor.bid_package_snapshots[bpIndex];
        const bpShallow = { ...bp };
        bpShallow[field] = value;

        conInfor.bid_package_snapshots[bpIndex] = bpShallow;
        return shallowStore;
      });
    },
    reset: () => set({ submission: initialState }),
  }),
);
