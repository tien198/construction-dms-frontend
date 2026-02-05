import type { StoreApi } from "zustand";
import type { InitSubmissionStore } from "../../store-factory/store.type";
import { submissionStoreFactory } from "../../store-factory/zustand.store.factory";
import { generateInitialState } from "../../create/constant/initalData/initialFormData.const";
import type { ConstructionPeriod } from "../../type/construction.type";

// KH
let kh_submission_store: StoreApi<InitSubmissionStore>;

function getKhSubmissionStore() {
    if (!kh_submission_store) {
        const initialState = generateInitialState('KH')
        kh_submission_store = submissionStoreFactory(initialState);
    }
    return kh_submission_store;
}


// LCNT_TV
let lcnt_tv_submission_store: StoreApi<InitSubmissionStore>;

function getLcntTvSubmissionStore() {
    if (!lcnt_tv_submission_store) {
        const initialState = generateInitialState('TV')
        lcnt_tv_submission_store = submissionStoreFactory(initialState);
    }
    return lcnt_tv_submission_store;
}



// LCNT_TT
let lcnt_tt_submission_store: StoreApi<InitSubmissionStore>;

function getLcntTtSubmissionStore() {
    if (!lcnt_tt_submission_store) {
        const initialState = generateInitialState('TT')
        lcnt_tt_submission_store = submissionStoreFactory(initialState);
    }
    return lcnt_tt_submission_store;
}


// BCKTKT
let bcktkt_submission_store: StoreApi<InitSubmissionStore>;

function getBcktktSubmissionStore() {
    if (!bcktkt_submission_store) {
        const initialState = generateInitialState('BCKTKT')
        bcktkt_submission_store = submissionStoreFactory(initialState);
    }
    return bcktkt_submission_store;
}


// export all ---------------------------------------
export function getStoreByPeriod(period: ConstructionPeriod) {
    switch (period) {
        case 'KH':
            return getKhSubmissionStore();
        case 'TV':
            return getLcntTvSubmissionStore();
        case 'TT':
            return getLcntTtSubmissionStore();
        case 'BCKTKT':
            return getBcktktSubmissionStore();
    }
}
