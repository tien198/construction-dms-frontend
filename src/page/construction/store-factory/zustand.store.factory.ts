import { createStore } from "zustand";
import { iniitialState } from "../create/constant/initalData/initialFormData.const";
import type { InitSubmissionStore } from "./store.type";
import type { BidPackage } from "../type/bid-package.type";
import { setValueByPath } from "../../../lib/setvalueByPath";
import type { CreateSubmission } from "../create/type/submission.create.type";

export const submissionStoreFactory = (init: CreateSubmission) =>
  createStore<InitSubmissionStore>()((set) => ({
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
  }));
