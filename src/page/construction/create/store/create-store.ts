import { submissionStoreFactory } from "../../store-factory/zustand.store.factory";
import { initialFormData } from "../constant/initalData/initialFormData.const";

export const createConstructionStore = submissionStoreFactory(initialFormData);

export type StoreApiInject = {
  storeApi: typeof createConstructionStore;
};
