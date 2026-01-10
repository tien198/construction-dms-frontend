import { createStore } from "zustand";
import { initialFormData } from "../constant/initalData/initialFormData.const";
import type { InitConstructionStore } from "./store.type";
import type { BidPackage } from "../../type/bid-package.type";

export const constructionStore = createStore<InitConstructionStore>()(
  (set) => ({
    formData: initialFormData,

    // Tương đương handleChange (nhưng nhận value trực tiếp thay vì event)
    setField: (name, value) =>
      set((state) => ({
        formData: { ...state.formData, [name]: value },
      })),

    // Tương đương handleNestedChange
    setNestedField: (parent, child, value) =>
      set((state) => ({
        formData: {
          ...state.formData,
          [parent]: {
            ...(state.formData[parent] as object),
            [child]: value,
          },
        },
      })),

    // Tương đương handleDateChange
    setDateField: (name, value) =>
      set((state) => ({
        formData: {
          ...state.formData,
          [name]: value ? value.toDate() : null,
        },
      })),

    // Tương đương handleNestedDateChange
    setNestedDateField: (parent, child, value) =>
      set((state) => ({
        formData: {
          ...state.formData,
          [parent]: {
            ...(state.formData[parent] as object),
            [child]: value ? value.toDate() : null,
          },
        },
      })),

    setPackage: (id: number, prop: keyof BidPackage, value: any) =>
      set((state) => {
        const shallow = { ...state };
        console.log(shallow.formData.constructionInfor!.bidPackages[id]);

        (shallow.formData.constructionInfor!.bidPackages[id]![prop] as any) =
          value;
        return shallow;
      }),

    resetForm: () => set({ formData: initialFormData }),
  })
);
