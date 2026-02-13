import type { StoreApi } from "zustand";
import type { InitSubmissionStore } from "../../store-factory/store.type";
import { submissionStoreFactory } from "../../store-factory/zustand.store.factory";
import {
  generateState,
  iniitialState,
} from "../../create/constant/initalData/initialFormData.const";
import type {
  Construction,
  ConstructionPeriod,
} from "../../type/construction.type";

// KH
const kh_submission_store: StoreApi<InitSubmissionStore> =
  submissionStoreFactory(iniitialState);
function getKhSubmissionStore() {
  return kh_submission_store;
}
function setKhSubmissionStore(con: Construction) {
  const state = generateState("KH", con);

  kh_submission_store.setState({ formData: state });
  return kh_submission_store;
}

// LCNT_TV
const lcnt_tv_submission_store: StoreApi<InitSubmissionStore> =
  submissionStoreFactory(iniitialState);
function getLcntTvSubmissionStore() {
  return lcnt_tv_submission_store;
}
function setLcntTvSubmissionStore(con: Construction) {
  const state = generateState("TV", con);

  lcnt_tv_submission_store.setState({ formData: state });

  return lcnt_tv_submission_store;
}

// LCNT_TT
const lcnt_tt_submission_store: StoreApi<InitSubmissionStore> =
  submissionStoreFactory(iniitialState);
function getLcntTtSubmissionStore() {
  return lcnt_tt_submission_store;
}
function setLcntTtSubmissionStore(con: Construction) {
  const state = generateState("TT", con);
  lcnt_tt_submission_store.setState({ formData: state });

  return lcnt_tt_submission_store;
}

// BCKTKT
const bcktkt_submission_store: StoreApi<InitSubmissionStore> =
  submissionStoreFactory(iniitialState);
function getBcktktSubmissionStore() {
  return bcktkt_submission_store;
}
function setBcktktSubmissionStore(con: Construction) {
  const state = generateState("BCKTKT", con);
  bcktkt_submission_store.setState({ formData: state });

  return bcktkt_submission_store;
}

// export all ---------------------------------------

export function setStoreByPeriod(per: ConstructionPeriod, con: Construction) {
  switch (per) {
    case "KH":
      return setKhSubmissionStore(con);
    case "TV":
      return setLcntTvSubmissionStore(con);
    case "TT":
      return setLcntTtSubmissionStore(con);
    case "BCKTKT":
      return setBcktktSubmissionStore(con);
  }
}

export function getStoreByPeriod(per: ConstructionPeriod) {
  switch (per) {
    case "KH":
      return getKhSubmissionStore();

    case "TV":
      return getLcntTvSubmissionStore();

    case "TT":
      return getLcntTtSubmissionStore();

    case "BCKTKT":
      return getBcktktSubmissionStore();
  }
}
