import { createStore, type StoreApi } from "zustand";
import { setValueByPath } from "@/lib/setValByPath";

import type { CreateSubmissionStore } from "./create-submission.store.type";
import type { ConstructionPeriod } from "@/types/domain/construction.type";
import type { BidPackageSnapshotPost } from "@/types/submission-post/bid-package-snapshot-post.type";
import type { BidPackageType } from "@/types/domain/decision/bid-package-snapshot.type";
import type { ConstructionInfoSnapshotPost } from "@/types/submission-post/construction-info-snapshot-post.type";
import type { SubmissionPost } from "@/types/submission-post/submission-post.type";

import { initialStateGeneration } from "./initial-state";
import { produce } from "immer";

export function submission_store_factory(
  period: ConstructionPeriod,
): StoreApi<CreateSubmissionStore> {
  return createStore<CreateSubmissionStore>((set) => ({
    // default submission is TV
    submission: initialStateGeneration(period) as SubmissionPost,

    setField: (fieldPath, value) =>
      set((state) => {
        const shallowSubmission = setValueByPath(
          state.submission,
          fieldPath,
          value,
        );
        return { ...state, submission: shallowSubmission };
      }),

    setAdministrative(ad) {
      set(
        produce<CreateSubmissionStore>((draft) => {
          draft.submission.id = ad.id;
          draft.submission.no = ad.no;
          draft.submission.level = ad.level;
          draft.submission.date = ad.date;
          draft.submission.pursuant_to_dec_tct_id =
            ad.pursuant_to_dec_tct?.id ?? null;
          draft.submission.pursuant_to_dec_ttmn_id =
            ad.pursuant_to_dec_ttmn?.id ?? null;
        }),
      );
    },

    setBidPackageField<K extends keyof BidPackageSnapshotPost>(
      type: BidPackageType,
      field: K,
      value: any,
    ) {
      set((state) => {
        const stateShallow = { ...state };
        const bidPackages = stateShallow.submission.bid_package_snapshots;
        if (!bidPackages) {
          return state;
        }
        const bpIndex = bidPackages.findIndex(
          (bp) => bp.type.toLowerCase() === type.toLowerCase(),
        );
        if (bpIndex < 0) {
          return state;
        }
        const bp = bidPackages[bpIndex];
        const bpShallow = { ...bp };
        bpShallow[field] = value;

        const bidPackagesShallow = [...bidPackages];
        bidPackagesShallow[bpIndex] = bpShallow;

        stateShallow.submission = {
          ...state.submission,
          bid_package_snapshots: bidPackagesShallow,
        };
        return stateShallow;
      });
    },

    addBidPackage(type: BidPackageType, value: BidPackageSnapshotPost | null) {
      set((state) => {
        const stateShallow = { ...state };
        if (!value) {
          return stateShallow;
        }

        const bidPackages = stateShallow.submission.bid_package_snapshots;
        if (!bidPackages) {
          return produce(stateShallow, (draft) => {
            draft.submission.bid_package_snapshots = [value];
          });
        }

        const bidPackagesShallow = [...bidPackages];
        const bpIndex = bidPackagesShallow.findIndex(
          (bp) => bp.type.toLowerCase() === type.toLowerCase(),
        );
        if (bpIndex < 0) {
          bidPackagesShallow.push(value);
          stateShallow.submission = {
            ...stateShallow.submission,
            bid_package_snapshots: bidPackagesShallow,
          };
          return stateShallow;
        }

        bidPackagesShallow[bpIndex] = value;
        stateShallow.submission = {
          ...stateShallow.submission,
          bid_package_snapshots: bidPackagesShallow,
        };
        return stateShallow;
      });
    },

    removeBidPackage(type: BidPackageType) {
      set((state) => {
        const bidPackages = state.submission.bid_package_snapshots;
        if (!bidPackages) {
          return state;
        }
        const bpIndex = bidPackages.findIndex(
          (bp) => bp.type.toLowerCase() === type.toLowerCase(),
        );
        if (bpIndex < 0) {
          return state;
        }
        const stateShallow = { ...state };
        const bidPackagesShallow = [...bidPackages];
        bidPackagesShallow.splice(bpIndex, 1);
        stateShallow.submission.bid_package_snapshots = bidPackagesShallow;
        return stateShallow;
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
