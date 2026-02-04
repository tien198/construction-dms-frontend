import { submissionStoreFactory } from "../../store-factory/zustand.store.factory";
import { generateInitialState } from "../constant/initalData/initialFormData.const";

const initialState = generateInitialState("KH");
export const createConstructionStore = submissionStoreFactory(initialState);
