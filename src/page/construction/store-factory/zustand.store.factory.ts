import { createStore } from "zustand";
import { iniitialState } from "../create/constant/initalData/initialFormData.const";
import type { InitSubmissionStore } from "./store.type";
import type { BidPackage } from "../type/bid-package.type";
import { setValueByPath } from "../../../lib/setvalueByPath";
import type { CreateSubmission } from "../create/type/submission.create.type";
import { subscribeWithSelector } from "zustand/middleware";

export function submissionStoreFactory(init: CreateSubmission) {
  const storeApi = createStore<InitSubmissionStore>()(
    subscribeWithSelector((set) => ({
      formData: init,

      // Tương đương handleChange (nhưng nhận value trực tiếp thay vì event)
      setField: (name, value) =>
        set((state) => ({
          formData: { ...state.formData, [name]: value },
        })),

      // Tương đương handleNestedChange
      setNestedField: (path, value) =>
        set((state) => {
          const newVal = setValueByPath(state.formData, path, value);
          return {
            formData: newVal,
          };
        }),

      // Tương đương handleDateChange
      setDateField: (name, value) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [name]: value,
          },
        })),

      // Tương đương handleNestedDateChange
      setNestedDateField: (path, value) =>
        set((state) => {
          const newVal = setValueByPath(state.formData, path, value);
          return {
            formData: newVal,
          };
        }),

      setPackage: (id: number, prop: keyof BidPackage, value) =>
        set((state) => {
          const shallow = { ...state };
          console.log(shallow.formData.constructionInfor!.bidPackages[id]);

          (shallow.formData.constructionInfor!.bidPackages[id]![prop] as any) =
            value;
          return shallow;
        }),

      resetForm: (state?: CreateSubmission) =>
        set({ formData: state && iniitialState }),
    })),
  );
  storeApi.subscribe(
    (state) =>
      state.formData.constructionInfor?.bidPackages?.map((p) => p.cost),
    (state) => {
      storeApi
        .getState()
        .setNestedField(
          "constructionInfor.estimatedCost",
          state?.reduce((a, b) => a + b, 0) ?? 0,
        );
    },
    {
      equalityFn: (a, b) => {
        if (a === b) return true;
        if (!a || !b) return false;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      },
      // equalityFn: (a, b) => a?.every((item, i) => item === b?.[i]) ?? false,
    },
  );

  return storeApi;
}
