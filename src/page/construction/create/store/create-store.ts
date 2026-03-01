import { submissionStoreFactory } from "../../store-factory/zustand.store.factory";
import { iniitialState } from "../constant/initalData/initialFormData.const";

const initialState = iniitialState;
export const createConstructionStore = submissionStoreFactory(initialState);
