import type { StoreApi } from "zustand";
import type { CreateSubmissionStore } from "./create-submission.store.type";

export type StoreApiInject = {
  storeApi: StoreApi<CreateSubmissionStore>;
  disabled?: boolean;
};
